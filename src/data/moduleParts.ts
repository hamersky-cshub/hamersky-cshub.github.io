import type { ModuleId } from './modules'
import { TranslationPartSchema } from './moduleParts.schema'

// ── Part metadata (derived automatically in mergeParts) ──────────────────────

export interface PartMeta {
  steps: number
  materials: number
  videos: number
}

// ── Content-page helper types ─────────────────────────────────────────────────

export interface TeachersGuide {
  ariaLabel?: string
  download?: string
}

export interface RelatedModuleCard {
  moduleId: ModuleId
  brand: string
  href: string
  imageSrc?: string
  description: string
  parts?: number
  materials?: number
  videos?: number
  challenges?: number
  games?: number
}

// ── Non-translatable asset interfaces ────────────────────────────────────────

export interface PartBundle { href: string }
export interface PartMaterialAssets { id?: string; href: string; isGuide?: boolean }
export interface VideoDownload { href: string; filename?: string }
export interface SubtitleTrack { label: string; srclang: string; src: string }

export interface FeaturedVideoAssets {
  id?: string
  posterSrc: string
  videoSrc: string
  downloads: { video: VideoDownload; subtitles: VideoDownload }
  tracks: SubtitleTrack[]
}

export interface PartAssets {
  bundle?: PartBundle
  materials?: PartMaterialAssets[]
  featuredVideo?: FeaturedVideoAssets
}

export interface PartDefinition {
  anchorId: string
  assets?: PartAssets
}

// ── Translation-side types (provided by content editors in locale files) ──────

/** A single downloadable item label, authored in each locale. */
export interface TranslationVideoDownload {
  ariaLabel: string
}

/** Video metadata that varies per locale. */
export interface TranslationFeaturedVideo {
  title: string
  supportText?: string
  downloads?: {
    video: TranslationVideoDownload
    subtitles: TranslationVideoDownload
  }
}

/** A single activity-plan step, authored in each locale. */
export interface TranslationActivityStep {
  title: string
}

/** A single downloadable material, authored in each locale. */
export interface TranslationMaterial {
  kind: string
  name: string
  filename?: string
  ariaLabel: string
}

/** The `included` block inside a translation part. */
export interface TranslationPartIncluded {
  materials?: TranslationMaterial[]
  activityPlan?: TranslationActivityStep[]
}

/**
 * Shape of a single part entry inside a locale translation file.
 * Content editors (external partners) only fill in translatable text here —
 * no file paths, IDs, or technical identifiers.
 */
export interface TranslationPart {
  goal?: string
  bundle?: { filename?: string }
  included?: TranslationPartIncluded
  featuredVideo?: TranslationFeaturedVideo
}

// ── Merged output types ───────────────────────────────────────────────────────

/** A material entry after merging asset data with translation text. */
export interface MergedMaterial extends Partial<PartMaterialAssets>, TranslationMaterial {}

/** An activity-plan step with its auto-derived sequential number. */
export interface MergedActivityStep {
  stepNumber: number
  title: string
}

/** A download link after merging asset paths with translation label. */
export interface MergedVideoDownload extends Partial<VideoDownload>, TranslationVideoDownload {}

/** A video entry after merging asset data with translation text. */
export interface MergedFeaturedVideo extends Partial<Omit<FeaturedVideoAssets, 'downloads'>> {
  title?: string
  supportText?: string
  downloads?: {
    video: MergedVideoDownload
    subtitles: MergedVideoDownload
  }
}

/** `included` block in a fully merged part. */
export interface MergedPartIncluded {
  materials?: MergedMaterial[]
  activityPlan?: MergedActivityStep[]
}

/**
 * A fully merged part: structural data from `modulePartsData` combined with
 * locale text from a translation file. Consumed by content.astro pages.
 */
export interface MergedPart {
  number: number
  anchorId: string
  titleKey: string
  meta?: PartMeta
  goal?: string
  bundle?: Partial<PartBundle> & { filename?: string }
  included?: MergedPartIncluded
  featuredVideo?: MergedFeaturedVideo
}

// ── Merge helper ─────────────────────────────────────────────────────────────

/**
 * Combines structural part definitions (`modulePartsData`) with locale-specific
 * translation parts. Call this in each `content.astro` page instead of
 * accessing `modulePartsData` directly.
 *
 * @param moduleId         - Module identifier (e.g. `'dc'`, `'at'`).
 * @param translationParts - Locale parts array from `v('content*.parts')`.
 *
 * **Activity plan steps are numbered automatically** from the array index
 * (`stepNumber: 1, 2, 3…`). Order in the translation file determines the
 * step number — the first entry is always Step 1.
 *
 * **Material count mismatches** are caught in dev mode: if a locale's
 * `materials` array has a different length than `assets.materials`, a warning
 * is logged so editors can fix the discrepancy before it silently mis-pairs
 * download links.
 *
 * **Shape validation** runs in dev mode via Zod: each translation part is
 * checked against `TranslationPartSchema`. Validation errors are logged as
 * warnings — they do not throw, so the page still renders.
 */
export function mergeParts(
  moduleId: ModuleId,
  translationParts: ReadonlyArray<TranslationPart>
): MergedPart[] {
  // Validate translation part shapes in dev mode
  if (import.meta.env?.DEV) {
    translationParts.forEach((tp, i) => {
      const result = TranslationPartSchema.safeParse(tp)
      if (!result.success) {
        console.warn(
          `[mergeParts] ${moduleId} part ${i + 1}: unexpected shape —`,
          result.error.flatten()
        )
      }
    })
  }

  return modulePartsData[moduleId].map((partDef, i) => {
    const tp     = translationParts[i] ?? {}
    const { assets } = partDef
    const number   = i + 1
    const titleKey = `hub.moduleParts.${moduleId}.p${number}Title`

    // ── Bundle ────────────────────────────────────────────────────────────────
    const bundle = assets?.bundle || tp.bundle
      ? { ...assets?.bundle, ...tp.bundle }
      : undefined

    // ── Materials ─────────────────────────────────────────────────────────────
    const assetMaterials       = assets?.materials ?? []
    const translationMaterials = tp.included?.materials ?? []

    if (
      import.meta.env?.DEV &&
      assetMaterials.length > 0 &&
      translationMaterials.length > 0 &&
      assetMaterials.length !== translationMaterials.length
    ) {
      console.warn(
        `[mergeParts] ${moduleId} part ${number} (${partDef.anchorId}): ` +
        `assets has ${assetMaterials.length} material(s) but translation has ` +
        `${translationMaterials.length}. Pairing by index — check for missing entries.`
      )
    }

    const materials: MergedMaterial[] | undefined = translationMaterials.length > 0
      ? translationMaterials.map((m, j) => ({
          ...assetMaterials[j],
          ...m,
        } as MergedMaterial))
      : undefined

    // ── Activity plan ─────────────────────────────────────────────────────────
    const activityPlan: MergedActivityStep[] | undefined = tp.included?.activityPlan?.map(
      (step, j) => ({ stepNumber: j + 1, ...step })
    )

    // ── Featured video ────────────────────────────────────────────────────────
    const featuredVideo: MergedFeaturedVideo | undefined = assets?.featuredVideo || tp.featuredVideo
      ? {
          ...assets?.featuredVideo,
          ...tp.featuredVideo,
          // tracks are not translatable — always taken from assets
          tracks: assets?.featuredVideo?.tracks,
          downloads: {
            video:     { ...assets?.featuredVideo?.downloads?.video,     ...tp.featuredVideo?.downloads?.video },
            subtitles: { ...assets?.featuredVideo?.downloads?.subtitles, ...tp.featuredVideo?.downloads?.subtitles },
          },
        } as MergedFeaturedVideo
      : undefined

    const meta: PartMeta = {
      steps:     activityPlan?.length ?? 0,
      materials: assetMaterials.filter(m => m.href !== '' && !m.isGuide).length,
      videos:    assets?.featuredVideo?.videoSrc ? 1 : 0,
    }

    return {
      ...tp,
      number,
      anchorId: partDef.anchorId,
      titleKey,
      meta,
      bundle,
      included: tp.included
        ? { ...tp.included, ...(materials !== undefined ? { materials } : {}), activityPlan }
        : undefined,
      featuredVideo,
    }
  })
}

// ── Part data ─────────────────────────────────────────────────────────────────

export const modulePartsData: Record<ModuleId, PartDefinition[]> = {

  // ── Digital Citizenship ────────────────────────────────────────────────────
  dc: [
    {
      anchorId: 'digital-environments',
      assets: {
        bundle: { 
          href: '/materials/digital-citizenship/part1/part1.zip' 
        },
        materials: [
          // Scenario Cards: Physical and Digital Worlds
          { id: '1.1.1', 
            href: '/materials/digital-citizenship/part1/cards/1.1.1_Scenario_Cards.pdf'
          },
        ],
        featuredVideo: {
          // What Is a Digital Environment?
          id: '1.1.2',
          posterSrc: '/images/video-posters/1.1.2_DigitalEnvironment_video_thumbnail.png',
          videoSrc: '/materials/digital-citizenship/part1/videos/1.1.2_DigitalEnvironment_video.mp4',
          downloads: {
            video: 
            { href: '/materials/digital-citizenship/part1/videos/1.1.2_DigitalEnvironment_video.mp4'
            },
            subtitles: 
            { href: '/materials/digital-citizenship/part1/videos/subtitles/subtitles.zip'
            },
          },
          tracks: [
            { label: 'English', 
              srclang: 'en',
              src: '/materials/digital-citizenship/part1/videos/subtitles/en/1.1.2_DigitalEnvironment_subtitles_EN.vtt' 
            },
            { label: 'Czech',
              srclang: 'cs',
              src: '/materials/digital-citizenship/part1/videos/subtitles/cs/1.1.2_DigitalEnvironment_subtitles_CS.vtt' 
            },
            { label: 'Norwegian',
              srclang: 'no',
              src: '/materials/digital-citizenship/part1/videos/subtitles/no/1.1.2_DigitalEnvironment_subtitles_NO.vtt' 
            },
            { label: 'Lithuanian', 
              srclang: 'lt', 
              src: '/materials/digital-citizenship/part1/videos/subtitles/lt/1.1.2_DigitalEnvironment_subtitles_LT.vtt' 
            },
            { label: 'German', 
              srclang: 'de', 
              src: '/materials/digital-citizenship/part1/videos/subtitles/de/1.1.2_DigitalEnvironment_subtitles_DE.vtt' 
            },
          ],
        },
      },
    },
    {
      anchorId: 'digital-citizen',
      assets: {
        bundle: {
          href: '/materials/digital-citizenship/part2/part2.zip'
        },
        materials: [
          // Image: Responsible Citizen
          { id: '1.2.1',
            href: '/materials/placeholder.txt'
          },
          // Worksheet A: Rights, Responsibilities and Respect
          { id: '1.2.2a',
            href: '/materials/placeholder.txt'
          },
          // Worksheet B: Rights, Responsibilities and Respect
          { id: '1.2.2b',
            href: '/materials/placeholder.txt'
          },
        ],
      },
    },
    {
      anchorId: 'privacy-settings',
      assets: {
        bundle: {
          href: '/materials/digital-citizenship/part3/part3.zip'
        },
        materials: [
          // Image: Feeling Safe
          { id: '1.3.1',
            href: '/materials/placeholder.txt'
          },
          // Image: Feeling Unsafe
          { id: '1.3.2',
            href: '/materials/placeholder.txt'
          },
          // Image: Application Privacy Settings
          { id: '1.3.4',
            href: '/materials/placeholder.txt'
          },
          // Image: Privacy Settings Strategy
          { id: '1.3.5',
            href: '/materials/placeholder.txt'
          },
        ],
        featuredVideo: {
          // What Are Privacy Settings?
          id: '1.3.3',
          posterSrc: '',
          videoSrc: '/materials/digital-citizenship/part3/videos/1.3.3_PrivacySettings_video.mp4',
          downloads: {
            video:
            { href: '/materials/digital-citizenship/part3/videos/1.3.3_PrivacySettings_video.mp4'
            },
            subtitles:
            { href: '/materials/digital-citizenship/part3/videos/subtitles/subtitles.zip'
            },
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/digital-citizenship/part3/videos/subtitles/en/1.3.3_PrivacySettings_subtitles_EN.vtt'
            },
            { label: 'Czech',
              srclang: 'cs',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Norwegian',
              srclang: 'no',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Lithuanian',
              srclang: 'lt',
              src: '/materials/placeholder.vtt'
            },
            { label: 'German',
              srclang: 'de',
              src: '/materials/placeholder.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'wise-and-resilient',
      assets: {
        bundle: {
          href: '/materials/digital-citizenship/part4/part4.zip'
        },
        featuredVideo: {
          // Resilience in Digital Environments
          id: '1.4.1',
          posterSrc: '',
          videoSrc: '/materials/digital-citizenship/part4/videos/1.4.1_Resilience_video.mp4',
          downloads: {
            video:
            { href: '/materials/digital-citizenship/part4/videos/1.4.1_Resilience_video.mp4'
            },
            subtitles:
            { href: '/materials/digital-citizenship/part4/videos/subtitles/subtitles.zip'
            },
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/digital-citizenship/part4/videos/subtitles/en/1.4.1_Resilience_subtitles_EN.vtt'
            },
            { label: 'Czech',
              srclang: 'cs',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Norwegian',
              srclang: 'no',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Lithuanian',
              srclang: 'lt',
              src: '/materials/placeholder.vtt'
            },
            { label: 'German',
              srclang: 'de',
              src: '/materials/placeholder.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'act-responsibly',
      assets: {
        bundle: {
          href: '/materials/digital-citizenship/part5/part5.zip'
        },
        materials: [
          // Image: Digital Footprint
          { id: '1.5.1',
            href: '/materials/placeholder.txt'
          },
          // Scenario Cards: Good and Bad to Post
          { id: '1.5.2',
            href: '/materials/placeholder.txt'
          },
          // Scenario Cards: Social Media Posts
          { id: '1.5.3',
            href: '/materials/placeholder.txt'
          },
        ],
      },
    },
  ],

  // ── Attacker Perspective ───────────────────────────────────────────────────
  ap: [
    {
      anchorId: 'circle-of-trustees',
      assets: {
        bundle: {
          href: '/materials/attacker-perspective/part1/part1.zip'
        },
        materials: [
          // Worksheet: Trusteees: People Around Me
          { id: '2.1.1',
            href: '/materials/placeholder.txt'
          },
          // Worksheet: Circles of Trust
          { id: '2.1.2',
            href: '/materials/placeholder.txt'
          },
        ],
      },
    },
    {
      anchorId: 'what-is-an-adversary',
      assets: {
        bundle: {
          href: '/materials/attacker-perspective/part2/part2.zip'
        },
        materials: [
          // Cards: Identify the Behaviour
          { id: '2.2.1',
            href: '/materials/placeholder.txt'
          },
          // Cards: Recognise the Characters
          { id: '2.2.2',
            href: '/materials/placeholder.txt'
          },
          // Image: Attacker Motivations
          { id: '2.2.4',
            href: '/materials/placeholder.txt'
          },
          // Worksheet: Attack Analysis
          { id: '2.2.5',
            href: '/materials/placeholder.txt'
          },
        ],
        featuredVideo: {
          // Who is Behind Cyber Attacks?
          id: '2.2.3',
          posterSrc: '',
          videoSrc: '/materials/attacker-perspective/part2/videos/2.2.3_WhoIsBehindCyberAttacks_video.mp4',
          downloads: {
            video:
            { href: '/materials/attacker-perspective/part2/videos/2.2.3_WhoIsBehindCyberAttacks_video.mp4'
            },
            subtitles:
            { href: '/materials/attacker-perspective/part2/videos/subtitles/subtitles.zip'
            },
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Czech',
              srclang: 'cs',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Norwegian',
              srclang: 'no',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Lithuanian',
              srclang: 'lt',
              src: '/materials/placeholder.vtt'
            },
            { label: 'German',
              srclang: 'de',
              src: '/materials/placeholder.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'attacker-techniques',
      assets: {
        bundle: {
          href: '/materials/attacker-perspective/part3/part3.zip'
        },
        materials: [
          // Situation: Smishing and Impersonation
          { id: '2.3.1',
            href: '/materials/placeholder.txt'
          },
          // Image: Common Adversary Techniques
          { id: '2.3.2',
            href: '/materials/placeholder.txt'
          },
        ],
      },
    },
  ],

  // ── Authentication ─────────────────────────────────────────────────────────
  at: [
    {
      anchorId: 'identity-and-digital-assets',
      assets: {
        bundle: {
          href: '/materials/authentication/part1/part1.zip'
        },
        materials: [
          // Image: Online Identity
          { id: '3.1.1',
            href: '/materials/placeholder.txt'
          },
          // Images: Examples of Personal Digital Assets
          { id: '3.1.2',
            href: '/materials/placeholder.txt'
          },
          // Worksheet: What Would Happen if ...?
          { id: '3.1.4',
            href: '/materials/placeholder.txt'
          },
          // Worksheet: My Digital Assets
          { id: '3.1.5',
            href: '/materials/placeholder.txt'
          },
        ],
        featuredVideo: {
          // What is Digital Identity?
          id: '3.1.2',
          posterSrc: '',
          videoSrc: '/materials/authentication/part1/videos/3.1.2_WhatIsDigitalIdentity_video.mp4',
          downloads: {
            video:
            { href: '/materials/authentication/part1/videos/3.1.2_WhatIsDigitalIdentity_video.mp4'
            },
            subtitles:
            { href: '/materials/authentication/part1/videos/subtitles/subtitles.zip'
            },
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Czech',
              srclang: 'cs',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Norwegian',
              srclang: 'no',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Lithuanian',
              srclang: 'lt',
              src: '/materials/placeholder.vtt'
            },
            { label: 'German',
              srclang: 'de',
              src: '/materials/placeholder.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'what-is-authentication',
      assets: {
        bundle: {
          href: '/materials/authentication/part2/part2.zip'
        },
        materials: [
          // Images: Real-world Authentication Examples
          { id: '3.2.1',
            href: '/materials/placeholder.txt'
          },
          // Image: Logging Into a Digital System
          { id: '3.2.3',
            href: '/materials/placeholder.txt'
          },
          // Worksheet: Authentication in Everday Life
          { id: '3.2.4',
            href: '/materials/placeholder.txt'
          },
        ],
        featuredVideo: {
          // What is Authentication and Why is It Important?
          id: '3.2.2',
          posterSrc: '',
          videoSrc: '/materials/authentication/part2/videos/3.2.2_WhatIsAuthentication_video.mp4',
          downloads: {
            video:
            { href: '/materials/authentication/part2/videos/3.2.2_WhatIsAuthentication_video.mp4'
            },
            subtitles:
            { href: '/materials/authentication/part2/videos/subtitles/subtitles.zip'
            },
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Czech',
              srclang: 'cs',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Norwegian',
              srclang: 'no',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Lithuanian',
              srclang: 'lt',
              src: '/materials/placeholder.vtt'
            },
            { label: 'German',
              srclang: 'de',
              src: '/materials/placeholder.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'strong-usernames-and-passwords',
      assets: {
        bundle: {
          href: '/materials/authentication/part3/part3.zip'
        },
        materials: [
          // Image: Examples of Weak Passwords
          { id: '3.3.2',
            href: '/materials/placeholder.txt'
          },
          // Image: Examples of Strong Passwords
          { id: '3.3.3',
            href: '/materials/placeholder.txt'
          },
          // Cards: Create a Strong Password
          { id: '3.3.4',
            href: '/materials/placeholder.txt'
          },
          // Image: Check your Password
          { id: '3.3.5',
            href: '/materials/placeholder.txt'
          },
          // Worksheet: My Strong Password Rules
          { id: '3.3.6',
            href: '/materials/placeholder.txt'
          },
        ],
        featuredVideo: {
          // Strong and Weak Passwords
          id: '3.3.1',
          posterSrc: '',
          videoSrc: '/materials/authentication/part3/videos/3.3.1_StrongAndWeakPasswords_video.mp4',
          downloads: {
            video:
            { href: '/materials/authentication/part3/videos/3.3.1_StrongAndWeakPasswords_video.mp4'
            },
            subtitles:
            { href: '/materials/authentication/part3/videos/subtitles/subtitles.zip'
            },
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Czech',
              srclang: 'cs',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Norwegian',
              srclang: 'no',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Lithuanian',
              srclang: 'lt',
              src: '/materials/placeholder.vtt'
            },
            { label: 'German',
              srclang: 'de',
              src: '/materials/placeholder.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'how-to-manage-passwords-securely',
      assets: {
        bundle: {
          href: '/materials/authentication/part4/part4.zip'
        },
        materials: [
          // Image: Two Different Types of Authentication Used Together
          { id: '3.4.1',
            href: '/materials/placeholder.txt'
          },
          // Schema: Set of Money Coins
          { id: '3.4.2',
            href: '/materials/placeholder.txt'
          },
          // Schema: Set of Groups
          { id: '3.4.3',
            href: '/materials/placeholder.txt'
          },
          // Schema: PIN Cards
          { id: '3.4.4',
            href: '/materials/placeholder.txt'
          },
          // Images: How to Use a Password Manager
          { id: '3.4.6',
            href: '/materials/placeholder.txt'
          },
          // Image: Password Manager Vault
          { id: '3.4.7',
            href: '/materials/placeholder.txt'
          },
          // Image: Password Manager as a Digital Keyring
          { id: '3.4.8',
            href: '/materials/placeholder.txt'
          },
          // Image: Steps of Saving Passwords
          { id: '3.4.9',
            href: '/materials/placeholder.txt'
          },
          // Worksheet: Password Problems and Solutions
          { id: '3.4.10',
            href: '/materials/placeholder.txt'
          },
        ],
        featuredVideo: {
          // What Is a Password Manager?
          id: '3.4.5',
          posterSrc: '',
          videoSrc: '/materials/authentication/part4/videos/3.4.5_WhatIsPasswordManager_video.mp4',
          downloads: {
            video:
            { href: '/materials/authentication/part4/videos/3.4.5_WhatIsPasswordManager_video.mp4'
            },
            subtitles:
            { href: '/materials/authentication/part4/videos/subtitles/subtitles.zip'
            },
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Czech',
              srclang: 'cs',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Norwegian',
              srclang: 'no',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Lithuanian',
              srclang: 'lt',
              src: '/materials/placeholder.vtt'
            },
            { label: 'German',
              srclang: 'de',
              src: '/materials/placeholder.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'how-to-protect-your-digital-identity',
      assets: {
        bundle: {
          href: '/materials/authentication/part5/part5.zip'
        },
        materials: [
          // Image: Safe and Unsafe Online Behaviours
          { id: '3.5.1',
            href: '/materials/placeholder.txt'
          },
          // Worksheet: Digital Identity and Authentication Scenarios
          { id: '3.5.3',
            href: '/materials/placeholder.txt'
          },
          // Worksheet: How I Protect My Digital Identity
          { id: '3.5.4',
            href: '/materials/placeholder.txt'
          },
        ],
        featuredVideo: {
          // Protecting Your Digital Identity
          id: '3.5.2',
          posterSrc: '',
          videoSrc: '/materials/authentication/part5/videos/3.5.2_ProtectingYourDigitalIdentity_video.mp4',
          downloads: {
            video:
            { href: '/materials/authentication/part5/videos/3.5.2_ProtectingYourDigitalIdentity_video.mp4'
            },
            subtitles:
            { href: '/materials/authentication/part5/videos/subtitles/subtitles.zip'
            },
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Czech',
              srclang: 'cs',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Norwegian',
              srclang: 'no',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Lithuanian',
              srclang: 'lt',
              src: '/materials/placeholder.vtt'
            },
            { label: 'German',
              srclang: 'de',
              src: '/materials/placeholder.vtt'
            },
          ],
        },
      },
    },
  ],

  // ── Data Privacy ───────────────────────────────────────────────────────────
  dp: [
    {
      anchorId: 'what-is-private-data',
      assets: {
        bundle: {
          href: '/materials/data-privacy/part1/part1.zip'
        },
        materials: [
          // Sorting Cards: Public or Private
          { id: '4.1.3',
            href: '/materials/placeholder.txt'
          },
          // Worksheet: Reflection on Public vs Private Data
          { id: '4.1.5',
            href: '/materials/placeholder.txt'
          },
        ],
        featuredVideo: {
          // What Is Private Data?
          id: '4.1.2',
          posterSrc: '',
          videoSrc: '/materials/data-privacy/part1/videos/4.1.2_WhatIsPrivateData_video.mp4',
          downloads: {
            video:
            { href: '/materials/data-privacy/part1/videos/4.1.2_WhatIsPrivateData_video.mp4'
            },
            subtitles:
            { href: '/materials/data-privacy/part1/videos/subtitles/subtitles.zip'
            },
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Czech',
              srclang: 'cs',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Norwegian',
              srclang: 'no',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Lithuanian',
              srclang: 'lt',
              src: '/materials/placeholder.vtt'
            },
            { label: 'German',
              srclang: 'de',
              src: '/materials/placeholder.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'data-sharing',
      assets: {
        bundle: {
          href: '/materials/data-privacy/part2/part2.zip'
        },
        materials: [
          // Scenario Cards: Roleplay
          { id: '4.2.2',
            href: '/materials/placeholder.txt'
          },
          // Image: Sharing Online: Safe vs Risky
          { id: '4.2.3',
            href: '/materials/placeholder.txt'
          },
          // Worksheet: Share or Don't Share?
          { id: '4.2.4',
            href: '/materials/placeholder.txt'
          },
        ],
      },
    },
    {
      anchorId: 'digital-footprints',
      assets: {
        bundle: {
          href: '/materials/data-privacy/part3/part3.zip'
        },
        materials: [
          // Comic Story: A Day in the Life of Sam Online
          { id: '4.3.3',
            href: '/materials/placeholder.txt'
          },
          // Worksheet: Track Sam's Footprint
          { id: '4.3.4',
            href: '/materials/placeholder.txt'
          },
        ],
        featuredVideo: {
          // What Is a Digital Footprint?
          id: '4.3.1',
          posterSrc: '',
          videoSrc: '/materials/data-privacy/part3/videos/4.3.1_WhatIsDigitalFootprint_video.mp4',
          downloads: {
            video:
            { href: '/materials/data-privacy/part3/videos/4.3.1_WhatIsDigitalFootprint_video.mp4'
            },
            subtitles:
            { href: '/materials/data-privacy/part3/videos/subtitles/subtitles.zip'
            },
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Czech',
              srclang: 'cs',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Norwegian',
              srclang: 'no',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Lithuanian',
              srclang: 'lt',
              src: '/materials/placeholder.vtt'
            },
            { label: 'German',
              srclang: 'de',
              src: '/materials/placeholder.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'clean-up-digital-footprint',
      assets: {
        bundle: {
          href: '/materials/data-privacy/part4/part4.zip'
        },
        materials: [
          // Checklist: Digital Footprint Cleanup Checklist
          { id: '4.4.1',
            href: '/materials/placeholder.txt'
          },
          // Worksheet: Privacy Settings Guide
          { id: '4.4.2',
            href: '/materials/placeholder.txt'
          },
        ],
        featuredVideo: {
          // Protecting Your Personal Data Online
          id: '4.4.4',
          posterSrc: '',
          videoSrc: '/materials/data-privacy/part4/videos/4.4.4_ProtectingYourPersonalDataOnline_video.mp4',
          downloads: {
            video:
            { href: '/materials/data-privacy/part4/videos/4.4.4_ProtectingYourPersonalDataOnline_video.mp4'
            },
            subtitles:
            { href: '/materials/data-privacy/part4/videos/subtitles/subtitles.zip'
            },
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Czech',
              srclang: 'cs',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Norwegian',
              srclang: 'no',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Lithuanian',
              srclang: 'lt',
              src: '/materials/placeholder.vtt'
            },
            { label: 'German',
              srclang: 'de',
              src: '/materials/placeholder.vtt'
            },
          ],
        },
      },
    },
  ],

  // ── Social Engineering ─────────────────────────────────────────────────────
  se: [
    {
      anchorId: 'what-is-social-engineering',
      assets: {
        bundle: {
          href: '/materials/social-engineering/part1/part1.zip'
        },
        materials: [
          // Image: Tricking People vs Hacking Systems
          { id: '5.1.4',
            href: '/materials/placeholder.txt'
          },
          // Image: Examples of Social Engineering Messages
          { id: '5.1.4',
            href: '/materials/placeholder.txt'
          },
          // Situation Assessment: What Does an Attacker Want?
          { id: '5.1.3',
            href: '/materials/placeholder.txt'
          },
          // Worksheet: Understanding Social Engineering
          { id: '5.1.5',
            href: '/materials/placeholder.txt'
          },
        ],
        featuredVideo: {
          // What Is Social Engineering?
          id: '5.1.2',
          posterSrc: '',
          videoSrc: '/materials/social-engineering/part1/videos/5.1.1_WhatIsSocialEngineering_video.mp4',
          downloads: {
            video:
            { href: '/materials/social-engineering/part1/videos/5.1.1_WhatIsSocialEngineering_video.mp4'
            },
            subtitles:
            { href: '/materials/social-engineering/part1/videos/subtitles/subtitles.zip'
            },
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Czech',
              srclang: 'cs',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Norwegian',
              srclang: 'no',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Lithuanian',
              srclang: 'lt',
              src: '/materials/placeholder.vtt'
            },
            { label: 'German',
              srclang: 'de',
              src: '/materials/placeholder.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'why-is-social-engineering-used',
      assets: {
        bundle: {
          href: '/materials/social-engineering/part2/part2.zip'
        },
        materials: [
          // Image: Human Decision-making vs Computer Decision-making
          { id: '5.2.1',
            href: '/materials/placeholder.txt'
          },
          // Scenario Cards: Emotional Manipulation Examples
          { id: '5.2.4',
            href: '/materials/placeholder.txt'
          },
          // Game Cards: Attacker Tactics
          { id: '5.2.3',
            href: '/materials/placeholder.txt'
          },
          // Worksheet: Why Social Engineering Works
          { id: '5.2.5',
            href: '/materials/placeholder.txt'
          },
        ],
      },
    },
    {
      anchorId: 'recognising-social-engineering',
      assets: {
        bundle: {
          href: '/materials/social-engineering/part3/part3.zip'
        },
        materials: [
          // Image: Examples of Social Engineering Messages
          { id: '5.3.2',
            href: '/materials/placeholder.txt'
          },
          // Scenario Cards: Social Engineering Situations
          { id: '5.3.4',
            href: '/materials/placeholder.txt'
          },
          // Worksheet: Spot the Social Engineering
          { id: '5.3.5',
            href: '/materials/placeholder.txt'
          },
        ],
        featuredVideo: {
          // Types of Social Engineering
          id: '5.3.3',
          posterSrc: '',
          videoSrc: '/materials/social-engineering/part3/videos/5.3.1_TypesOfSocialEngineering_video.mp4',
          downloads: {
            video:
            { href: '/materials/social-engineering/part3/videos/5.3.1_TypesOfSocialEngineering_video.mp4'
            },
            subtitles:
            { href: '/materials/social-engineering/part3/videos/subtitles/subtitles.zip'
            },
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Czech',
              srclang: 'cs',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Norwegian',
              srclang: 'no',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Lithuanian',
              srclang: 'lt',
              src: '/materials/placeholder.vtt'
            },
            { label: 'German',
              srclang: 'de',
              src: '/materials/placeholder.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'protecting-from-social-engineering',
      assets: {
        bundle: {
          href: '/materials/social-engineering/part4/part4.zip'
        },
        materials: [
          // Scenario Cards: What Would You Do?
          { id: '5.4.3',
            href: '/materials/placeholder.txt'
          },
          // Checklist: Stop, Think, Check, Ask
          { id: '5.4.2',
            href: '/materials/placeholder.txt'
          },
          // Worksheet: Stop, Think, Check, Ask
          { id: '5.4.2',
            href: '/materials/placeholder.txt'
          },
          // Role Cards: Target, Helper, Bystander
          { id: '5.4.4',
            href: '/materials/placeholder.txt'
          },
          // Worksheet: Protecting Myself and Others
          { id: '5.4.5',
            href: '/materials/placeholder.txt'
          },
        ],
      },
    },
  ],

  // ── Malware ────────────────────────────────────────────────────────────────
  mw: [
    {
      anchorId: 'what-is-malware',
      assets: {
        bundle: {
          href: '/materials/malware/part1/part1.zip'
        },
        materials: [
          // Image: Malicious + Software = Malware
          { id: '6.1.1',
            href: '/materials/placeholder.txt'
          },
          // Worksheet: Related to Malware or Not?
          { id: '6.1.3',
            href: '/materials/placeholder.txt'
          },
        ],
        featuredVideo: {
          // What is Malware?
          id: '6.1.2',
          posterSrc: '',
          videoSrc: '/materials/malware/part1/videos/6.1.2_WhatIsMalware_video.mp4',
          downloads: {
            video:
            { href: '/materials/malware/part1/videos/6.1.2_WhatIsMalware_video.mp4'
            },
            subtitles:
            { href: '/materials/malware/part1/videos/subtitles/subtitles.zip'
            },
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Czech',
              srclang: 'cs',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Norwegian',
              srclang: 'no',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Lithuanian',
              srclang: 'lt',
              src: '/materials/placeholder.vtt'
            },
            { label: 'German',
              srclang: 'de',
              src: '/materials/placeholder.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'malware-types',
      assets: {
        bundle: {
          href: '/materials/malware/part2/part2.zip'
        },
        materials: [
          // Schema: Set of Coins
          { id: '6.2.2',
            href: '/materials/placeholder.txt'
          },
          // Schema: Knot Ties Board
          { id: '6.2.3',
            href: '/materials/placeholder.txt'
          },
          // Sheet: Malware Properties
          { id: '6.2.4',
            href: '/materials/placeholder.txt'
          },
        ],
        featuredVideo: {
          // Introducing Malware Types
          id: '6.2.1',
          posterSrc: '',
          videoSrc: '/materials/malware/part2/videos/6.2.1_IntroducingMalwareTypes_video.mp4',
          downloads: {
            video:
            { href: '/materials/malware/part2/videos/6.2.1_IntroducingMalwareTypes_video.mp4'
            },
            subtitles:
            { href: '/materials/malware/part2/videos/subtitles/subtitles.zip'
            },
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Czech',
              srclang: 'cs',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Norwegian',
              srclang: 'no',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Lithuanian',
              srclang: 'lt',
              src: '/materials/placeholder.vtt'
            },
            { label: 'German',
              srclang: 'de',
              src: '/materials/placeholder.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'recognising-malware',
      assets: {
        bundle: {
          href: '/materials/malware/part3/part3.zip'
        },
        materials: [
          // Worksheet: List of Indicators
          { id: '6.3.1',
            href: '/materials/placeholder.txt'
          },
          // Reading: Recognising Malware
          { id: '6.3.2',
            href: '/materials/placeholder.txt'
          },
          // Poster: Seven Indicators
          { id: '6.3.3',
            href: '/materials/placeholder.txt'
          },
          // Table: Situation and Indicators
          { id: '6.3.4',
            href: '/materials/placeholder.txt'
          },
        ],
      },
    },
    {
      anchorId: 'protection-measures',
      assets: {
        bundle: {
          href: '/materials/malware/part4/part4.zip'
        },
        materials: [
          // Situation: Malware and Data Theft?
          { id: '6.4.1',
            href: '/materials/placeholder.txt'
          },
          // Poster: DOs and DON'Ts
          { id: '6.4.2',
            href: '/materials/placeholder.txt'
          },
          // Worksheet: A Shield Against Malware
          { id: '6.4.3',
            href: '/materials/placeholder.txt'
          },
        ],
      },
    },
  ],

  // ── Digital Abuse ──────────────────────────────────────────────────────────
  da: [
    {
      anchorId: 'misinformation',
      assets: {
        bundle: {
          href: '/materials/digital-abuse/part1/part1.zip'
        },
        materials: [
          // Game: Truth Detectives
          { id: '7.1.2',
            href: '/materials/placeholder.txt'
          },
        ],
        featuredVideo: {
          // What is Misinformation?
          id: '7.1.1',
          posterSrc: '',
          videoSrc: '/materials/digital-abuse/part1/videos/7.1.1_WhatIsMisinformation_video.mp4',
          downloads: {
            video:
            { href: '/materials/digital-abuse/part1/videos/7.1.1_WhatIsMisinformation_video.mp4'
            },
            subtitles:
            { href: '/materials/digital-abuse/part1/videos/subtitles/subtitles.zip'
            },
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Czech',
              srclang: 'cs',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Norwegian',
              srclang: 'no',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Lithuanian',
              srclang: 'lt',
              src: '/materials/placeholder.vtt'
            },
            { label: 'German',
              srclang: 'de',
              src: '/materials/placeholder.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'disinformation',
      assets: {
        bundle: {
          href: '/materials/digital-abuse/part2/part2.zip'
        },
        materials: [],
        featuredVideo: {
          // What is Disinformation?
          id: '7.2.1',
          posterSrc: '',
          videoSrc: '/materials/digital-abuse/part2/videos/7.2.2_WhatIsDisinformation_video.mp4',
          downloads: {
            video:
            { href: '/materials/digital-abuse/part2/videos/7.2.2_WhatIsDisinformation_video.mp4'
            },
            subtitles:
            { href: '/materials/digital-abuse/part2/videos/subtitles/subtitles.zip'
            },
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Czech',
              srclang: 'cs',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Norwegian',
              srclang: 'no',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Lithuanian',
              srclang: 'lt',
              src: '/materials/placeholder.vtt'
            },
            { label: 'German',
              srclang: 'de',
              src: '/materials/placeholder.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'cyber-bullying',
      assets: {
        bundle: {
          href: '/materials/digital-abuse/part3/part3.zip'
        },
        materials: [
          // Game: Act it Out!
          { id: '7.3.1',
            href: '/materials/placeholder.txt'
          },
        ],
        featuredVideo: {
          // What is Cyber Bullying?
          id: '7.3.2',
          posterSrc: '',
          videoSrc: '/materials/digital-abuse/part3/videos/7.3.2_WhatIsCyberbullying_video.mp4',
          downloads: {
            video:
            { href: '/materials/digital-abuse/part3/videos/7.3.2_WhatIsCyberbullying_video.mp4'
            },
            subtitles:
            { href: '/materials/digital-abuse/part3/videos/subtitles/subtitles.zip'
            },
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Czech',
              srclang: 'cs',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Norwegian',
              srclang: 'no',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Lithuanian',
              srclang: 'lt',
              src: '/materials/placeholder.vtt'
            },
            { label: 'German',
              srclang: 'de',
              src: '/materials/placeholder.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'stranger-danger',
      assets: {
        bundle: {
          href: '/materials/digital-abuse/part4/part4.zip'
        },
        materials: [
          // Game: Real or Fake?
          { id: '7.4.1',
            href: '/materials/placeholder.txt'
          },
        ],
      },
    },
    {
      anchorId: 'influencers',
      assets: {
        bundle: {
          href: '/materials/digital-abuse/part5/part5.zip'
        },
        materials: [
          // Scenarios: Examples of Influencers Posts That Are Potentially Harmful and Not Harmful
          { id: '7.5.2',
            href: '/materials/placeholder.txt'
          },
        ],
        featuredVideo: {
          // Social Media Influencers
          id: '7.5.1',
          posterSrc: '',
          videoSrc: '/materials/digital-abuse/part5/videos/7.5.1_SocialMediaInfluencers_video.mp4',
          downloads: {
            video:
            { href: '/materials/digital-abuse/part5/videos/7.5.1_SocialMediaInfluencers_video.mp4'
            },
            subtitles:
            { href: '/materials/digital-abuse/part5/videos/subtitles/subtitles.zip'
            },
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Czech',
              srclang: 'cs',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Norwegian',
              srclang: 'no',
              src: '/materials/placeholder.vtt'
            },
            { label: 'Lithuanian',
              srclang: 'lt',
              src: '/materials/placeholder.vtt'
            },
            { label: 'German',
              srclang: 'de',
              src: '/materials/placeholder.vtt'
            },
          ],
        },
      },
    },
    {
      anchorId: 'deal-with-digital-abusers',
      assets: {
        bundle: {
          href: '/materials/digital-abuse/part6/part6.zip'
        },
        materials: [
          // Activity: Safety Superhero Suggestion Pack
          { id: '7.6.1',
            href: '/materials/placeholder.txt'
          },
        ],
      },
    },
  ],
}

// ── Count helpers (derived from modulePartsData) ──────────────────────────────

export function getModuleMaterialCount(id: ModuleId): number {
  return (modulePartsData[id] ?? []).reduce(
    (sum, p) => sum + (p.assets?.materials?.filter(m => m.href !== '' && !m.isGuide).length ?? 0),
    0
  )
}

export function getModuleVideoCount(id: ModuleId): number {
  return (modulePartsData[id] ?? []).filter(
    p => !!p.assets?.featuredVideo?.videoSrc
  ).length
}
