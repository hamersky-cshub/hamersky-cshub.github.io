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
/** Languages that translated materials can be provided in (same set as the site locales). */
export type MaterialLanguage = 'en' | 'cs' | 'no' | 'lt' | 'de'

/**
 * Native language names shown in the material "Download" dropdown.
 * (The options appear in the order they are listed in a material's `languages`.)
 */
export const MATERIAL_LANGUAGE_LABELS: Record<MaterialLanguage, string> = {
  en: 'English',
  cs: 'Čeština',
  no: 'Norsk',
  lt: 'Lietuvių',
  de: 'Deutsch',
}

/** One language version of a translated material. */
export interface MaterialLanguageFile { lang: MaterialLanguage; href: string }

/**
 * A downloadable material.
 * - `href` — the file for materials without translatable text (e.g. an image);
 *   for translated materials it is the default/fallback file.
 * - `languages` — set this for materials that exist in several languages. The
 *   page then shows a "Download" dropdown with one option per entry instead of
 *   a plain "Download" link.
 */
export interface PartMaterialAssets {
  id?: string
  href: string
  isGuide?: boolean
  languages?: MaterialLanguageFile[]
}
export interface VideoDownload { href: string; filename?: string }
export interface SubtitleTrack { label: string; srclang: string; src: string }

export interface FeaturedVideoAssets {
  id?: string
  posterSrc: string
  videoSrc: string
  downloads: { video: VideoDownload }
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
    const titleKey = `pages.hub.modules.${moduleId}.parts.p${number}.title`

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
            subtitles: { ...tp.featuredVideo?.downloads?.subtitles },
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
        // Materials with `languages` → "Download" shows a language dropdown;
        // without it (no translatable text) → plain "Download" button.
        // TODO: replace the placeholder files with the real materials.
        materials: [
          // Scenario Cards: Physical and Digital Worlds
          { id: '1.1.1',
            href: '/materials/digital-citizenship/part1/cards/1.1.1_Scenario_Cards.pdf',
            languages: [
              { lang: 'en', href: '/materials/digital-citizenship/part1/cards/1.1.1_Scenario_Cards.pdf' },
              { lang: 'cs', href: '/materials/digital-citizenship/part1/cards/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/digital-citizenship/part1/cards/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/digital-citizenship/part1/cards/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/digital-citizenship/part1/cards/de/placeholder.txt' },
            ],
          },
        ],
        featuredVideo: {
          // What Is a Digital Environment and Digital Systems?
          id: '1.1.2',
          posterSrc: '/images/learning-hub/video-posters/1.1.2_DigitalEnvironment_video_thumbnail.webp',
          videoSrc: '/materials/digital-citizenship/part1/videos/1.1.2. Digital Environment.mp4', 
          downloads: {
            video: 
            { href: '/materials/digital-citizenship/part1/videos/1.1.2. Digital Environment.mp4'
            }
          },
          tracks: [
            { label: 'English', 
              srclang: 'en',
              src: '/materials/digital-citizenship/part1/videos/subtitles/en/1.1.2. Digital Environment_EN.vtt' 
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/digital-citizenship/part1/videos/subtitles/cs/1.1.2. Digital Environment_CS.vtt' 
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/digital-citizenship/part1/videos/subtitles/no/1.1.2. Digital Environment_NO.vtt' 
            },
            { label: 'Lietuvių', 
              srclang: 'lt', 
              src: '/materials/digital-citizenship/part1/videos/subtitles/lt/1.1.2. Digital Environment_LT.vtt' 
            },
            { label: 'Deutsch', 
              srclang: 'de', 
              src: '/materials/digital-citizenship/part1/videos/subtitles/de/1.1.2. Digital Environment_DE.vtt' 
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
            href: '/materials/digital-citizenship/part2/images/placeholder.txt'
          },
          // Worksheet: Rights, Responsibilities and Respect
          { id: '1.2.2',
            href: '/materials/digital-citizenship/part2/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/digital-citizenship/part2/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/digital-citizenship/part2/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/digital-citizenship/part2/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/digital-citizenship/part2/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/digital-citizenship/part2/worksheets/de/placeholder.txt' },
            ],
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
            href: '/materials/digital-citizenship/part3/images/placeholder.txt'
          },
          // Image: Feeling Unsafe
          { id: '1.3.2',
            href: '/materials/digital-citizenship/part3/images/placeholder.txt'
          },
          // Image: Privacy Setting Strategy
          { id: '1.3.4',
            href: '/materials/digital-citizenship/part3/images/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/digital-citizenship/part3/images/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/digital-citizenship/part3/images/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/digital-citizenship/part3/images/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/digital-citizenship/part3/images/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/digital-citizenship/part3/images/de/placeholder.txt' },
            ],
          },
          // Image: App Privacy Settings
          { id: '1.3.5',
            href: '/materials/digital-citizenship/part3/images/placeholder.txt'
          },
        ],
        featuredVideo: {
          // What Are Privacy Settings?
          id: '1.3.3',
          posterSrc: '/images/learning-hub/video-posters/1.3.3_PrivacySettings_video_thumbnail.webp',
          videoSrc: '/materials/digital-citizenship/part3/videos/1.3.3. Privacy Settings.mp4',
          downloads: {
            video:
            { href: '/materials/digital-citizenship/part3/videos/1.3.3. Privacy Settings.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/digital-citizenship/part3/videos/subtitles/en/1.3.3. Privacy Settings_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/digital-citizenship/part3/videos/subtitles/cs/1.3.3. Privacy Settings_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/digital-citizenship/part3/videos/subtitles/no/1.3.3. Privacy Settings_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/digital-citizenship/part3/videos/subtitles/lt/1.3.3. Privacy Settings_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/digital-citizenship/part3/videos/subtitles/de/1.3.3. Privacy Settings_DE.vtt'
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
          posterSrc: '/images/learning-hub/video-posters/1.4.1_Resilience_video_thumbnail.webp',
          videoSrc: '/materials/digital-citizenship/part4/videos/1.4.1. Resilience.mp4',
          downloads: {
            video:
            { href: '/materials/digital-citizenship/part4/videos/1.4.1. Resilience.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/digital-citizenship/part4/videos/subtitles/en/1.4.1. Resilience_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/digital-citizenship/part4/videos/subtitles/cs/1.4.1. Resilience_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/digital-citizenship/part4/videos/subtitles/no/1.4.1. Resilience_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/digital-citizenship/part4/videos/subtitles/lt/1.4.1. Resilience_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/digital-citizenship/part4/videos/subtitles/de/1.4.1. Resilience_DE.vtt'
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
            href: '/materials/digital-citizenship/part5/images/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/digital-citizenship/part5/images/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/digital-citizenship/part5/images/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/digital-citizenship/part5/images/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/digital-citizenship/part5/images/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/digital-citizenship/part5/images/de/placeholder.txt' },
            ],
          },
          // Scenario Cards: Good and Bad to Post
          { id: '1.5.2',
            href: '/materials/digital-citizenship/part5/cards/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/digital-citizenship/part5/cards/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/digital-citizenship/part5/cards/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/digital-citizenship/part5/cards/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/digital-citizenship/part5/cards/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/digital-citizenship/part5/cards/de/placeholder.txt' },
            ],
          },
          // Scenario Cards: Social Media Posts
          { id: '1.5.3',
            href: '/materials/digital-citizenship/part5/cards/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/digital-citizenship/part5/cards/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/digital-citizenship/part5/cards/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/digital-citizenship/part5/cards/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/digital-citizenship/part5/cards/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/digital-citizenship/part5/cards/de/placeholder.txt' },
            ],
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
        // Materials with `languages` → "Download" shows a language dropdown;
        // without it (no translatable text) → plain "Download" button.
        // TODO: replace the placeholder files with the real materials.
        materials: [
          // Worksheet: Trusteees: People Around Me
          { id: '2.1.1',
            href: '/materials/attacker-perspective/part1/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/attacker-perspective/part1/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/attacker-perspective/part1/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/attacker-perspective/part1/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/attacker-perspective/part1/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/attacker-perspective/part1/worksheets/de/placeholder.txt' },
            ],
          },
          // Worksheet: Circles of Trust
          { id: '2.1.2',
            href: '/materials/attacker-perspective/part1/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/attacker-perspective/part1/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/attacker-perspective/part1/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/attacker-perspective/part1/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/attacker-perspective/part1/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/attacker-perspective/part1/worksheets/de/placeholder.txt' },
            ],
          },
          // Image: Situation: Found Money
          { id: '2.1.3',
            href: '/materials/attacker-perspective/part1/images/placeholder.txt'
          },
          // Image: Situation: Saw a Photo
          { id: '2.1.4',
            href: '/materials/attacker-perspective/part1/images/placeholder.txt'
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
          // Scenario Cards: Identify the Behaviour
          { id: '2.2.1',
            href: '/materials/attacker-perspective/part2/cards/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/attacker-perspective/part2/cards/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/attacker-perspective/part2/cards/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/attacker-perspective/part2/cards/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/attacker-perspective/part2/cards/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/attacker-perspective/part2/cards/de/placeholder.txt' },
            ],
          },
          // Scenario Cards: Recognise the Characters
          { id: '2.2.2',
            href: '/materials/attacker-perspective/part2/cards/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/attacker-perspective/part2/cards/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/attacker-perspective/part2/cards/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/attacker-perspective/part2/cards/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/attacker-perspective/part2/cards/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/attacker-perspective/part2/cards/de/placeholder.txt' },
            ],
          },
          // Image: Attacker Motivations
          { id: '2.2.4',
            href: '/materials/attacker-perspective/part2/images/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/attacker-perspective/part2/images/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/attacker-perspective/part2/images/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/attacker-perspective/part2/images/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/attacker-perspective/part2/images/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/attacker-perspective/part2/images/de/placeholder.txt' },
            ],
          },
          // Image: Looking Into the Fairytale: Attacker Motivation and Means
          { id: '2.2.5',
            href: '/materials/attacker-perspective/part2/images/placeholder.txt'
          },
          // Worksheet: Attack Analysis
          { id: '2.2.6',
            href: '/materials/attacker-perspective/part2/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/attacker-perspective/part2/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/attacker-perspective/part2/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/attacker-perspective/part2/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/attacker-perspective/part2/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/attacker-perspective/part2/worksheets/de/placeholder.txt' },
            ],
          },
        ],
        featuredVideo: {
          // Who is Behind Cyber Attacks?
          id: '2.2.3',
          posterSrc: '/images/learning-hub/video-posters/2.2.3_WhoIsBehindCyberAttacks_video_thumbnail.webp',
          videoSrc: '/materials/attacker-perspective/part2/videos/2.2.3. Who is Behind Cyber Attacks.mp4',
          downloads: {
            video:
            { href: '/materials/attacker-perspective/part2/videos/2.2.3. Who is Behind Cyber Attacks.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/attacker-perspective/part2/videos/subtitles/en/2.2.3. Who is Behind Cyber Attacks_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/attacker-perspective/part2/videos/subtitles/cs/2.2.3. Who is Behind Cyber Attacks_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/attacker-perspective/part2/videos/subtitles/no/2.2.3. Who is Behind Cyber Attacks_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/attacker-perspective/part2/videos/subtitles/lt/2.2.3. Who is Behind Cyber Attacks_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/attacker-perspective/part2/videos/subtitles/de/2.2.3. Who is Behind Cyber Attacks_DE.vtt'
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
          // Reading: Smishing and Impersonation
          { id: '2.3.1',
            href: '/materials/attacker-perspective/part3/readings/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/attacker-perspective/part3/readings/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/attacker-perspective/part3/readings/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/attacker-perspective/part3/readings/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/attacker-perspective/part3/readings/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/attacker-perspective/part3/readings/de/placeholder.txt' },
            ],
          },
          // Reading: Vishing, Fraud, and Impersonation
          { id: '2.3.2',
            href: '/materials/attacker-perspective/part3/readings/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/attacker-perspective/part3/readings/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/attacker-perspective/part3/readings/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/attacker-perspective/part3/readings/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/attacker-perspective/part3/readings/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/attacker-perspective/part3/readings/de/placeholder.txt' },
            ],
          },
          // Reading: Most Common Cyber Threats
          { id: '2.3.3',
            href: '/materials/attacker-perspective/part3/readings/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/attacker-perspective/part3/readings/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/attacker-perspective/part3/readings/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/attacker-perspective/part3/readings/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/attacker-perspective/part3/readings/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/attacker-perspective/part3/readings/de/placeholder.txt' },
            ],
          },
          // Image: Common Adversary Techniques
          { id: '2.3.4',
            href: '/materials/attacker-perspective/part3/images/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/attacker-perspective/part3/images/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/attacker-perspective/part3/images/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/attacker-perspective/part3/images/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/attacker-perspective/part3/images/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/attacker-perspective/part3/images/de/placeholder.txt' },
            ],
          },
          // Cards: Attackers and Their Plans
          { id: '2.3.5',
            href: '/materials/attacker-perspective/part3/cards/placeholder.txt'
          },
          // Worksheet: Puzzle: Party of Attackers
          { id: '2.3.6',
            href: '/materials/attacker-perspective/part3/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/attacker-perspective/part3/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/attacker-perspective/part3/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/attacker-perspective/part3/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/attacker-perspective/part3/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/attacker-perspective/part3/worksheets/de/placeholder.txt' },
            ],
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
        // Materials with `languages` → "Download" shows a language dropdown;
        // without it (no translatable text) → plain "Download" button.
        // TODO: replace the placeholder files with the real materials.
        materials: [
          // Image: Online Identity
          { id: '3.1.1',
            href: '/materials/authentication/part1/images/placeholder.txt'
          },
          // Images: Examples of Personal Digital Assets
          { id: '3.1.3',
            href: '/materials/authentication/part1/images/placeholder.txt'
          },
          // Worksheet: What Would Happen If...?
          { id: '3.1.4',
            href: '/materials/authentication/part1/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/authentication/part1/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/authentication/part1/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/authentication/part1/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/authentication/part1/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/authentication/part1/worksheets/de/placeholder.txt' },
            ],
          },
          // Worksheet: My Digital Assets
          { id: '3.1.5',
            href: '/materials/authentication/part1/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/authentication/part1/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/authentication/part1/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/authentication/part1/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/authentication/part1/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/authentication/part1/worksheets/de/placeholder.txt' },
            ],
          },
        ],
        featuredVideo: {
          // What Is Digital Identity?
          id: '3.1.2',
          posterSrc: '/images/learning-hub/video-posters/3.1.2_WhatIsDigitalIdentity_video_thumbnail.webp',
          videoSrc: '/materials/authentication/part1/videos/3.1.2. What is Digital Identity.mp4',
          downloads: {
            video:
            { href: '/materials/authentication/part1/videos/3.1.2. What is Digital Identity.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/authentication/part1/videos/subtitles/en/3.1.2. What is Digital Identity_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/authentication/part1/videos/subtitles/cs/3.1.2. What is Digital Identity_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/authentication/part1/videos/subtitles/no/3.1.2. What is Digital Identity_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/authentication/part1/videos/subtitles/lt/3.1.2. What is Digital Identity_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/authentication/part1/videos/subtitles/de/3.1.2. What is Digital Identity_DE.vtt'
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
          // Images: Real-World Authentication Examples
          { id: '3.2.1',
            href: '/materials/authentication/part2/images/placeholder.txt'
          },
          // Image: Logging Into a Digital System
          { id: '3.2.3',
            href: '/materials/authentication/part2/images/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/authentication/part2/images/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/authentication/part2/images/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/authentication/part2/images/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/authentication/part2/images/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/authentication/part2/images/de/placeholder.txt' },
            ],
          },
          // Worksheet: Authentication in Everyday Life
          { id: '3.2.4',
            href: '/materials/authentication/part2/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/authentication/part2/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/authentication/part2/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/authentication/part2/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/authentication/part2/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/authentication/part2/worksheets/de/placeholder.txt' },
            ],
          },
        ],
        featuredVideo: {
          // What Is Authentication?
          id: '3.2.2',
          posterSrc: '/images/learning-hub/video-posters/3.2.2_WhatIsAuthentication_video_thumbnail.webp',
          videoSrc: '/materials/authentication/part2/videos/3.2.1. Authentication.mp4',
          downloads: {
            video:
            { href: '/materials/authentication/part2/videos/3.2.1. Authentication.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/authentication/part2/videos/subtitles/en/3.2.1. Authentication_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/authentication/part2/videos/subtitles/cs/3.2.1. Authentication_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/authentication/part2/videos/subtitles/no/3.2.1. Authentication_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/authentication/part2/videos/subtitles/lt/3.2.1. Authentication_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/authentication/part2/videos/subtitles/de/3.2.1. Authentication_DE.vtt'
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
            href: '/materials/authentication/part3/images/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/authentication/part3/images/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/authentication/part3/images/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/authentication/part3/images/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/authentication/part3/images/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/authentication/part3/images/de/placeholder.txt' },
            ],
          },
          // Image: Examples of Strong Passwords
          { id: '3.3.3',
            href: '/materials/authentication/part3/images/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/authentication/part3/images/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/authentication/part3/images/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/authentication/part3/images/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/authentication/part3/images/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/authentication/part3/images/de/placeholder.txt' },
            ],
          },
          // Cards: Create a Strong Password
          { id: '3.3.4',
            href: '/materials/authentication/part3/cards/placeholder.txt'
          },
          // Image: Check Your Password
          { id: '3.3.5',
            href: '/materials/authentication/part3/images/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/authentication/part3/images/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/authentication/part3/images/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/authentication/part3/images/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/authentication/part3/images/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/authentication/part3/images/de/placeholder.txt' },
            ],
          },
          // Worksheet: My Strong Password Rules
          { id: '3.3.6',
            href: '/materials/authentication/part3/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/authentication/part3/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/authentication/part3/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/authentication/part3/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/authentication/part3/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/authentication/part3/worksheets/de/placeholder.txt' },
            ],
          },
        ],
        featuredVideo: {
          // Strong and Weak Passwords
          id: '3.3.1',
          posterSrc: '/images/learning-hub/video-posters/3.3.1_StrongAndWeakPasswords_video_thumbnail.webp',
          videoSrc: '/materials/authentication/part3/videos/3.3.1. Strong and Weak Passwords.mp4',
          downloads: {
            video:
            { href: '/materials/authentication/part3/videos/3.3.1. Strong and Weak Passwords.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/authentication/part3/videos/subtitles/en/3.3.1. Strong and Weak Passwords_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/authentication/part3/videos/subtitles/cs/3.3.1. Strong and Weak Passwords_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/authentication/part3/videos/subtitles/no/3.3.1. Strong and Weak Passwords_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/authentication/part3/videos/subtitles/lt/3.3.1. Strong and Weak Passwords_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/authentication/part3/videos/subtitles/de/3.3.1. Strong and Weak Passwords_DE.vtt'
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
            href: '/materials/authentication/part4/images/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/authentication/part4/images/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/authentication/part4/images/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/authentication/part4/images/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/authentication/part4/images/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/authentication/part4/images/de/placeholder.txt' },
            ],
          },
          // Schema: Set of Money Coins
          { id: '3.4.2',
            href: '/materials/authentication/part4/schemas/placeholder.txt'
          },
          // Schema: Set of Groups
          { id: '3.4.3',
            href: '/materials/authentication/part4/schemas/placeholder.txt'
          },
          // Schema: PIN Cards
          { id: '3.4.4',
            href: '/materials/authentication/part4/schemas/placeholder.txt'
          },
          // Image: How to Use a Password Manager
          { id: '3.4.6',
            href: '/materials/authentication/part4/images/placeholder.txt'
          },
          // Image: Password Manager
          { id: '3.4.7',
            href: '/materials/authentication/part4/images/placeholder.txt'
          },
          // Image: Steps of Saving Passwords
          { id: '3.4.8',
            href: '/materials/authentication/part4/images/placeholder.txt'
          },
          // Worksheet: Password Problems and Solutions
          { id: '3.4.9',
            href: '/materials/authentication/part4/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/authentication/part4/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/authentication/part4/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/authentication/part4/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/authentication/part4/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/authentication/part4/worksheets/de/placeholder.txt' },
            ],
          },
        ],
        featuredVideo: {
          // What Is a Password Manager?
          id: '3.4.5',
          posterSrc: '/images/learning-hub/video-posters/3.4.1_WhatIsPasswordManager_video_thumbnail.webp',
          videoSrc: '/materials/authentication/part4/videos/3.4.1. Password Manager.mp4',
          downloads: {
            video:
            { href: '/materials/authentication/part4/videos/3.4.1. Password Manager.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/authentication/part4/videos/subtitles/en/3.4.1. Password Manager_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/authentication/part4/videos/subtitles/cs/3.4.1. Password Manager_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/authentication/part4/videos/subtitles/no/3.4.1. Password Manager_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/authentication/part4/videos/subtitles/lt/3.4.1. Password Manager_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/authentication/part4/videos/subtitles/de/3.4.1. Password Manager_DE.vtt'
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
            href: '/materials/authentication/part5/images/placeholder.txt'
          },
          // Worksheet: Digital Identity and Authentication Scenarios
          { id: '3.5.3',
            href: '/materials/authentication/part5/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/authentication/part5/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/authentication/part5/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/authentication/part5/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/authentication/part5/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/authentication/part5/worksheets/de/placeholder.txt' },
            ],
          },
          // Worksheet: How I Protect My Digital Identity
          { id: '3.5.4',
            href: '/materials/authentication/part5/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/authentication/part5/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/authentication/part5/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/authentication/part5/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/authentication/part5/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/authentication/part5/worksheets/de/placeholder.txt' },
            ],
          },
        ],
        featuredVideo: {
          // Protecting Your Digital Identity
          id: '3.5.2',
          posterSrc: '/images/learning-hub/video-posters/3.5.1_ProtectingYourDigitalIdentity_video_thumbnail.webp',
          videoSrc: '/materials/authentication/part5/videos/3.5.1. Protecting Your Digital Identity.mp4',
          downloads: {
            video:
            { href: '/materials/authentication/part5/videos/3.5.1. Protecting Your Digital Identity.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/authentication/part5/videos/subtitles/en/3.5.1. Protecting Your Digital Identity_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/authentication/part5/videos/subtitles/cs/3.5.1. Protecting Your Digital Identity_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/authentication/part5/videos/subtitles/no/3.5.1. Protecting Your Digital Identity_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/authentication/part5/videos/subtitles/lt/3.5.1. Protecting Your Digital Identity_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/authentication/part5/videos/subtitles/de/3.5.1. Protecting Your Digital Identity_DE.vtt'
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
        // Materials with `languages` → "Download" shows a language dropdown;
        // without it (no translatable text) → plain "Download" button.
        // TODO: replace the placeholder files with the real materials.
        materials: [
          // Sorting Cards: Private or Public
          { id: '4.1.2',
            href: '/materials/data-privacy/part1/cards/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/data-privacy/part1/cards/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/data-privacy/part1/cards/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/data-privacy/part1/cards/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/data-privacy/part1/cards/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/data-privacy/part1/cards/de/placeholder.txt' },
            ],
          },
          // Worksheet: Reflection: Public vs. Private Data
          { id: '4.1.3',
            href: '/materials/data-privacy/part1/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/data-privacy/part1/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/data-privacy/part1/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/data-privacy/part1/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/data-privacy/part1/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/data-privacy/part1/worksheets/de/placeholder.txt' },
            ],
          },
        ],
        featuredVideo: {
          // What Is Private Data?
          id: '4.1.1',
          posterSrc: '/images/learning-hub/video-posters/4.1.1_WhatIsPrivateData_video_thumbnail.webp',
          videoSrc: '/materials/data-privacy/part1/videos/4.1.1. What is Private Data.mp4',
          downloads: {
            video:
            { href: '/materials/data-privacy/part1/videos/4.1.1. What is Private Data.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/data-privacy/part1/videos/subtitles/en/4.1.1. What is Private Data_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/data-privacy/part1/videos/subtitles/cs/4.1.1. What is Private Data_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/data-privacy/part1/videos/subtitles/no/4.1.1. What is Private Data_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/data-privacy/part1/videos/subtitles/lt/4.1.1. What is Private Data_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/data-privacy/part1/videos/subtitles/de/4.1.1. What is Private Data_DE.vtt'
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
          // Image: Sharing Online: Safe vs. Risky
          { id: '4.2.1',
            href: '/materials/data-privacy/part2/images/placeholder.txt'
          },
          // Scenario Cards: Roleplay
          { id: '4.2.2',
            href: '/materials/data-privacy/part2/cards/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/data-privacy/part2/cards/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/data-privacy/part2/cards/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/data-privacy/part2/cards/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/data-privacy/part2/cards/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/data-privacy/part2/cards/de/placeholder.txt' },
            ],
          },
          // Worksheet: Share or Don't Share
          { id: '4.2.3',
            href: '/materials/data-privacy/part2/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/data-privacy/part2/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/data-privacy/part2/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/data-privacy/part2/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/data-privacy/part2/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/data-privacy/part2/worksheets/de/placeholder.txt' },
            ],
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
          // Image: Comic Story: A Day in the Life of Sam Online
          { id: '4.3.2',
            href: '/materials/data-privacy/part3/images/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/data-privacy/part3/images/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/data-privacy/part3/images/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/data-privacy/part3/images/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/data-privacy/part3/images/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/data-privacy/part3/images/de/placeholder.txt' },
            ],
          },
          // Worksheet: Track Sam's Footprint
          { id: '4.3.3',
            href: '/materials/data-privacy/part3/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/data-privacy/part3/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/data-privacy/part3/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/data-privacy/part3/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/data-privacy/part3/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/data-privacy/part3/worksheets/de/placeholder.txt' },
            ],
          },
          // Schema: Board Privacy Value
          { id: '4.3.4',
            href: '/materials/data-privacy/part3/schemas/placeholder.txt'
          },
          // Game Set: Cards Privacy Value
          { id: '4.3.5',
            href: '/materials/data-privacy/part3/cards/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/data-privacy/part3/cards/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/data-privacy/part3/cards/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/data-privacy/part3/cards/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/data-privacy/part3/cards/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/data-privacy/part3/cards/de/placeholder.txt' },
            ],
          },
        ],
        featuredVideo: {
          // What Is a Digital Footprint?
          id: '4.3.1',
          posterSrc: '/images/learning-hub/video-posters/4.3.1_WhatIsDigitalFootprint_video_thumbnail.webp',
          videoSrc: '/materials/data-privacy/part3/videos/4.3.1. What is a Digital Footprint.mp4',
          downloads: {
            video:
            { href: '/materials/data-privacy/part3/videos/4.3.1. What is a Digital Footprint.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/data-privacy/part3/videos/subtitles/en/4.3.1. What is a Digital Footprint_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/data-privacy/part3/videos/subtitles/cs/4.3.1. What is a Digital Footprint_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/data-privacy/part3/videos/subtitles/no/4.3.1. What is a Digital Footprint_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/data-privacy/part3/videos/subtitles/lt/4.3.1. What is a Digital Footprint_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/data-privacy/part3/videos/subtitles/de/4.3.1. What is a Digital Footprint_DE.vtt'
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
          // Image: An Example of Basic Settings
          { id: '4.4.1',
            href: '/materials/data-privacy/part4/images/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/data-privacy/part4/images/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/data-privacy/part4/images/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/data-privacy/part4/images/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/data-privacy/part4/images/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/data-privacy/part4/images/de/placeholder.txt' },
            ],
          },
          // Worksheet: Fix This Profile!
          { id: '4.4.2',
            href: '/materials/data-privacy/part4/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/data-privacy/part4/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/data-privacy/part4/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/data-privacy/part4/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/data-privacy/part4/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/data-privacy/part4/worksheets/de/placeholder.txt' },
            ],
          },
          // Worksheet: Privacy Tips for Kids
          { id: '4.4.3',
            href: '/materials/data-privacy/part4/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/data-privacy/part4/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/data-privacy/part4/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/data-privacy/part4/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/data-privacy/part4/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/data-privacy/part4/worksheets/de/placeholder.txt' },
            ],
          },
          // Worksheet: Poster Template
          { id: '4.4.4',
            href: '/materials/data-privacy/part4/worksheets/placeholder.txt'
          },
          // Worksheet: Puzzle: Using Digital Traces “Members of the Brain Fights Team”
          { id: '4.4.6',
            href: '/materials/data-privacy/part4/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/data-privacy/part4/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/data-privacy/part4/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/data-privacy/part4/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/data-privacy/part4/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/data-privacy/part4/worksheets/de/placeholder.txt' },
            ],
          },
        ],
        featuredVideo: {
          // Protecting Your Personal Data Online
          id: '4.4.5',
          posterSrc: '/images/learning-hub/video-posters/4.4.1_ProtectingYourPersonalDataOnline_video_thumbnail.webp',
          videoSrc: '/materials/data-privacy/part4/videos/4.4.1. Protecting Your Personal Data.mp4',
          downloads: {
            video:
            { href: '/materials/data-privacy/part4/videos/4.4.1. Protecting Your Personal Data.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/data-privacy/part4/videos/subtitles/en/4.4.1. Protecting Your Personal Data_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/data-privacy/part4/videos/subtitles/cs/4.4.1. Protecting Your Personal Data_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/data-privacy/part4/videos/subtitles/no/4.4.1. Protecting Your Personal Data_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/data-privacy/part4/videos/subtitles/lt/4.4.1. Protecting Your Personal Data_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/data-privacy/part4/videos/subtitles/de/4.4.1. Protecting Your Personal Data_DE.vtt'
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
        // Materials with `languages` → "Download" shows a language dropdown;
        // without it (no translatable text) → plain "Download" button.
        // TODO: replace the placeholder files with the real materials.
        materials: [
          // Image: Hacking Systems vs. Tricking People
          { id: '5.1.2',
            href: '/materials/social-engineering/part1/images/placeholder.txt'
          },
          // Image: Goals of an Attacker
          { id: '5.1.3',
            href: '/materials/social-engineering/part1/images/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/social-engineering/part1/images/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/social-engineering/part1/images/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/social-engineering/part1/images/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/social-engineering/part1/images/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/social-engineering/part1/images/de/placeholder.txt' },
            ],
          },
          // Scenario Cards: What Does an Attacker Want?
          { id: '5.1.4',
            href: '/materials/social-engineering/part1/cards/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/social-engineering/part1/cards/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/social-engineering/part1/cards/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/social-engineering/part1/cards/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/social-engineering/part1/cards/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/social-engineering/part1/cards/de/placeholder.txt' },
            ],
          },
          // Solution Cards: What Does an Attacker Want?
          { id: '5.1.5',
            href: '/materials/social-engineering/part1/cards/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/social-engineering/part1/cards/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/social-engineering/part1/cards/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/social-engineering/part1/cards/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/social-engineering/part1/cards/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/social-engineering/part1/cards/de/placeholder.txt' },
            ],
          },
          // Worksheet: Understanding Social Engineering
          { id: '5.1.6',
            href: '/materials/social-engineering/part1/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/social-engineering/part1/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/social-engineering/part1/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/social-engineering/part1/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/social-engineering/part1/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/social-engineering/part1/worksheets/de/placeholder.txt' },
            ],
          },
        ],
        featuredVideo: {
          // What Is Social Engineering?
          id: '5.1.1',
          posterSrc: '/images/learning-hub/video-posters/5.1.1_WhatIsSocialEngineering_video_thumbnail.webp',
          videoSrc: '/materials/social-engineering/part1/videos/5.1.1. What is Social Engineering.mp4',
          downloads: {
            video:
            { href: '/materials/social-engineering/part1/videos/5.1.1. What is Social Engineering.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/social-engineering/part1/videos/subtitles/en/5.1.1. What is Social Engineering_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/social-engineering/part1/videos/subtitles/cs/5.1.1. What is Social Engineering_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/social-engineering/part1/videos/subtitles/no/5.1.1. What is Social Engineering_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/social-engineering/part1/videos/subtitles/lt/5.1.1. What is Social Engineering_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/social-engineering/part1/videos/subtitles/de/5.1.1. What is Social Engineering_DE.vtt'
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
          // Scenario Cards: Attacker Tactics
          { id: '5.2.1',
            href: '/materials/social-engineering/part2/cards/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/social-engineering/part2/cards/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/social-engineering/part2/cards/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/social-engineering/part2/cards/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/social-engineering/part2/cards/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/social-engineering/part2/cards/de/placeholder.txt' },
            ],
          },
          // Scenario Cards: Emotional Manipulation Examples
          { id: '5.2.2',
            href: '/materials/social-engineering/part2/cards/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/social-engineering/part2/cards/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/social-engineering/part2/cards/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/social-engineering/part2/cards/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/social-engineering/part2/cards/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/social-engineering/part2/cards/de/placeholder.txt' },
            ],
          },
          // Worksheet: Why Social Engineering Works
          { id: '5.2.3',
            href: '/materials/social-engineering/part2/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/social-engineering/part2/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/social-engineering/part2/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/social-engineering/part2/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/social-engineering/part2/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/social-engineering/part2/worksheets/de/placeholder.txt' },
            ],
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
          // Worksheet: Dot-to-Dot Activity
          { id: '5.3.2',
            href: '/materials/social-engineering/part3/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/social-engineering/part3/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/social-engineering/part3/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/social-engineering/part3/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/social-engineering/part3/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/social-engineering/part3/worksheets/de/placeholder.txt' },
            ],
          },
        ],
        featuredVideo: {
          // Types of Social Engineering
          id: '5.3.1',
          posterSrc: '/images/learning-hub/video-posters/5.3.1_TypesOfSocialEngineering_video_thumbnail.webp',
          videoSrc: '/materials/social-engineering/part3/videos/5.3.1. Types of Social Engineering.mp4',
          downloads: {
            video:
            { href: '/materials/social-engineering/part3/videos/5.3.1. Types of Social Engineering.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/social-engineering/part3/videos/subtitles/en/5.3.1. Types of Social Engineering_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/social-engineering/part3/videos/subtitles/cs/5.3.1. Types of Social Engineering_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/social-engineering/part3/videos/subtitles/no/5.3.1. Types of Social Engineering_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/social-engineering/part3/videos/subtitles/lt/5.3.1. Types of Social Engineering_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/social-engineering/part3/videos/subtitles/de/5.3.1. Types of Social Engineering_DE.vtt'
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
          // Image: Stop, Think, Check, Ask
          { id: '5.4.1',
            href: '/materials/social-engineering/part4/images/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/social-engineering/part4/images/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/social-engineering/part4/images/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/social-engineering/part4/images/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/social-engineering/part4/images/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/social-engineering/part4/images/de/placeholder.txt' },
            ],
          },
          // Worksheet: Stop, Think, Check, Ask
          { id: '5.4.2',
            href: '/materials/social-engineering/part4/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/social-engineering/part4/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/social-engineering/part4/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/social-engineering/part4/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/social-engineering/part4/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/social-engineering/part4/worksheets/de/placeholder.txt' },
            ],
          },
          // Scenario Cards: What Would You Do?
          { id: '5.4.3',
            href: '/materials/social-engineering/part4/cards/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/social-engineering/part4/cards/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/social-engineering/part4/cards/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/social-engineering/part4/cards/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/social-engineering/part4/cards/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/social-engineering/part4/cards/de/placeholder.txt' },
            ],
          },
          // Role Cards: Prosocial Behaviour or Bystander Apathy
          { id: '5.4.4',
            href: '/materials/social-engineering/part4/cards/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/social-engineering/part4/cards/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/social-engineering/part4/cards/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/social-engineering/part4/cards/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/social-engineering/part4/cards/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/social-engineering/part4/cards/de/placeholder.txt' },
            ],
          },
          // Worksheet: Protecting Myself and Others
          { id: '5.4.5',
            href: '/materials/social-engineering/part4/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/social-engineering/part4/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/social-engineering/part4/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/social-engineering/part4/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/social-engineering/part4/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/social-engineering/part4/worksheets/de/placeholder.txt' },
            ],
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
        // Materials with `languages` → "Download" shows a language dropdown;
        // without it (no translatable text) → plain "Download" button.
        // TODO: replace the placeholder files with the real materials.
        materials: [
          // Image: Malicious + Software = Malware
          { id: '6.1.1',
            href: '/materials/malware/part1/images/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/malware/part1/images/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/malware/part1/images/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/malware/part1/images/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/malware/part1/images/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/malware/part1/images/de/placeholder.txt' },
            ],
          },
          // Image: What Is Malicious?
          { id: '6.1.2',
            href: '/materials/malware/part1/images/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/malware/part1/images/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/malware/part1/images/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/malware/part1/images/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/malware/part1/images/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/malware/part1/images/de/placeholder.txt' },
            ],
          },
          // Worksheet: Related to Malware or Not
          { id: '6.1.4',
            href: '/materials/malware/part1/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/malware/part1/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/malware/part1/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/malware/part1/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/malware/part1/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/malware/part1/worksheets/de/placeholder.txt' },
            ],
          },
        ],
        featuredVideo: {
          // What Is Malware?
          id: '6.1.3',
          posterSrc: '/images/learning-hub/video-posters/6.1.2_WhatIsMalware_video_thumbnail.webp',
          videoSrc: '/materials/malware/part1/videos/6.1.2. What is Malware.mp4',
          downloads: {
            video:
            { href: '/materials/malware/part1/videos/6.1.2. What is Malware.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/malware/part1/videos/subtitles/en/6.1.2. What is Malware_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/malware/part1/videos/subtitles/cs/6.1.2. What is Malware_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/malware/part1/videos/subtitles/no/6.1.2. What is Malware_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/malware/part1/videos/subtitles/lt/6.1.2. What is Malware_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/malware/part1/videos/subtitles/de/6.1.2. What is Malware_DE.vtt'
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
            href: '/materials/malware/part2/schemas/placeholder.txt'
          },
          // Schema: Knot the Ties Board
          { id: '6.2.3',
            href: '/materials/malware/part2/schemas/placeholder.txt'
          },
        ],
        featuredVideo: {
          // Introducing Malware Types
          id: '6.2.1',
          posterSrc: '/images/learning-hub/video-posters/6.2.1_IntroducingMalwareTypes_video_thumbnail.webp',
          videoSrc: '/materials/malware/part2/videos/6.2.1. Malware Types.mp4',
          downloads: {
            video:
            { href: '/materials/malware/part2/videos/6.2.1. Malware Types.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/malware/part2/videos/subtitles/en/6.2.1. Malware Types_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/malware/part2/videos/subtitles/cs/6.2.1. Malware Types_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/malware/part2/videos/subtitles/no/6.2.1. Malware Types_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/malware/part2/videos/subtitles/lt/6.2.1. Malware Types_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/malware/part2/videos/subtitles/de/6.2.1. Malware Types_DE.vtt'
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
          // Reading: Recognising Malware
          { id: '6.3.1',
            href: '/materials/malware/part3/readings/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/malware/part3/readings/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/malware/part3/readings/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/malware/part3/readings/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/malware/part3/readings/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/malware/part3/readings/de/placeholder.txt' },
            ],
          },
          // Poster: Seven Indicators
          { id: '6.3.2',
            href: '/materials/malware/part3/posters/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/malware/part3/posters/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/malware/part3/posters/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/malware/part3/posters/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/malware/part3/posters/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/malware/part3/posters/de/placeholder.txt' },
            ],
          },
          // Worksheet: List of Indicators
          { id: '6.3.3',
            href: '/materials/malware/part3/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/malware/part3/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/malware/part3/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/malware/part3/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/malware/part3/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/malware/part3/worksheets/de/placeholder.txt' },
            ],
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
          // Situation: Malware and Data Theft
          { id: '6.4.1',
            href: '/materials/malware/part4/situations/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/malware/part4/situations/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/malware/part4/situations/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/malware/part4/situations/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/malware/part4/situations/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/malware/part4/situations/de/placeholder.txt' },
            ],
          },
          // Poster: DOs and DON'Ts
          { id: '6.4.2',
            href: '/materials/malware/part4/posters/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/malware/part4/posters/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/malware/part4/posters/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/malware/part4/posters/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/malware/part4/posters/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/malware/part4/posters/de/placeholder.txt' },
            ],
          },
          // Images: Associative Pictures: Be Aware
          { id: '6.4.3',
            href: '/materials/malware/part4/images/placeholder.txt'
          },
          // Worksheet: A Shield Against Malware
          { id: '6.4.4',
            href: '/materials/malware/part4/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/malware/part4/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/malware/part4/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/malware/part4/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/malware/part4/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/malware/part4/worksheets/de/placeholder.txt' },
            ],
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
        // Materials with `languages` → "Download" shows a language dropdown;
        // without it (no translatable text) → plain "Download" button.
        // TODO: replace the placeholder files with the real materials.
        materials: [
          // Game: Truth Detectives
          { id: '7.1.2',
            href: '/materials/digital-abuse/part1/games/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/digital-abuse/part1/games/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/digital-abuse/part1/games/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/digital-abuse/part1/games/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/digital-abuse/part1/games/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/digital-abuse/part1/games/de/placeholder.txt' },
            ],
          },
          // Image: Cinnamon Challenge
          { id: '7.1.3',
            href: '/materials/digital-abuse/part1/images/placeholder.txt'
          },
        ],
        featuredVideo: {
          // What Is Misinformation?
          id: '7.1.1',
          posterSrc: '/images/learning-hub/video-posters/7.1.1_WhatIsMisinformation_video_thumbnail.webp',
          videoSrc: '/materials/digital-abuse/part1/videos/7.1.1. Misinformation.mp4',
          downloads: {
            video:
            { href: '/materials/digital-abuse/part1/videos/7.1.1. Misinformation.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/digital-abuse/part1/videos/subtitles/en/7.1.1. Misinformation_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/digital-abuse/part1/videos/subtitles/cs/7.1.1. Misinformation_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/digital-abuse/part1/videos/subtitles/no/7.1.1. Misinformation_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/digital-abuse/part1/videos/subtitles/lt/7.1.1. Misinformation_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/digital-abuse/part1/videos/subtitles/de/7.1.1. Misinformation_DE.vtt'
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
        materials: [
          // Worksheet: Newspaper Template “Sharing News”
          { id: '7.2.2',
            href: '/materials/digital-abuse/part2/worksheets/placeholder.txt'
          },
          // Image: Social Media Algorithms
          { id: '7.2.3',
            href: '/materials/digital-abuse/part2/images/placeholder.txt'
          },
        ],
        featuredVideo: {
          // What Is Disinformation?
          id: '7.2.1',
          posterSrc: '/images/learning-hub/video-posters/7.2.1_WhatIsDisinformation_video_thumbnail.webp',
          videoSrc: '/materials/digital-abuse/part2/videos/7.2.1. Disinformation.mp4',
          downloads: {
            video:
            { href: '/materials/digital-abuse/part2/videos/7.2.1. Disinformation.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/digital-abuse/part2/videos/subtitles/en/7.2.1. Disinformation_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/digital-abuse/part2/videos/subtitles/cs/7.2.1. Disinformation_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/digital-abuse/part2/videos/subtitles/no/7.2.1. Disinformation_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/digital-abuse/part2/videos/subtitles/lt/7.2.1. Disinformation_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/digital-abuse/part2/videos/subtitles/de/7.2.1. Disinformation_DE.vtt'
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
          // Scenario Cards: Act It Out!
          { id: '7.3.1',
            href: '/materials/digital-abuse/part3/cards/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/digital-abuse/part3/cards/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/digital-abuse/part3/cards/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/digital-abuse/part3/cards/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/digital-abuse/part3/cards/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/digital-abuse/part3/cards/de/placeholder.txt' },
            ],
          },
          // Scenario Cards: Is It Just Bad Manners?
          { id: '7.3.3',
            href: '/materials/digital-abuse/part3/cards/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/digital-abuse/part3/cards/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/digital-abuse/part3/cards/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/digital-abuse/part3/cards/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/digital-abuse/part3/cards/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/digital-abuse/part3/cards/de/placeholder.txt' },
            ],
          },
        ],
        featuredVideo: {
          // What Is Cyber Bullying?
          id: '7.3.2',
          posterSrc: '/images/learning-hub/video-posters/7.3.1_WhatIsCyberbullying_video_thumbnail.webp',
          videoSrc: '/materials/digital-abuse/part3/videos/7.3.1. Cyber Bullying.mp4',
          downloads: {
            video:
            { href: '/materials/digital-abuse/part3/videos/7.3.1. Cyber Bullying.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/digital-abuse/part3/videos/subtitles/en/7.3.1. Cyber Bullying_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/digital-abuse/part3/videos/subtitles/cs/7.3.1. Cyber Bullying_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/digital-abuse/part3/videos/subtitles/no/7.3.1. Cyber Bullying_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/digital-abuse/part3/videos/subtitles/lt/7.3.1. Cyber Bullying_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/digital-abuse/part3/videos/subtitles/de/7.3.1. Cyber Bullying_DE.vtt'
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
          // Poster: Stranger Danger
          { id: '7.4.1',
            href: '/materials/digital-abuse/part4/posters/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/digital-abuse/part4/posters/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/digital-abuse/part4/posters/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/digital-abuse/part4/posters/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/digital-abuse/part4/posters/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/digital-abuse/part4/posters/de/placeholder.txt' },
            ],
          },
          // Scenario Cards: Real or Fake? The Profile Detective Game
          { id: '7.4.2',
            href: '/materials/digital-abuse/part4/cards/placeholder.txt'
          },
          // Worksheet: Stranger Danger Champion
          { id: '7.4.3',
            href: '/materials/digital-abuse/part4/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/digital-abuse/part4/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/digital-abuse/part4/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/digital-abuse/part4/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/digital-abuse/part4/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/digital-abuse/part4/worksheets/de/placeholder.txt' },
            ],
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
          // Scenario Cards: Influencer Posts
          { id: '7.5.2',
            href: '/materials/digital-abuse/part5/cards/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/digital-abuse/part5/cards/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/digital-abuse/part5/cards/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/digital-abuse/part5/cards/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/digital-abuse/part5/cards/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/digital-abuse/part5/cards/de/placeholder.txt' },
            ],
          },
        ],
        featuredVideo: {
          // Social Media Influencers
          id: '7.5.1',
          posterSrc: '/images/learning-hub/video-posters/7.5.1_SocialMediaInfluencers_video_thumbnail.webp',
          videoSrc: '/materials/digital-abuse/part5/videos/7.5.1. Influencers.mp4',
          downloads: {
            video:
            { href: '/materials/digital-abuse/part5/videos/7.5.1. Influencers.mp4'
            }
          },
          tracks: [
            { label: 'English',
              srclang: 'en',
              src: '/materials/digital-abuse/part5/videos/subtitles/en/7.5.1. Influencers_EN.vtt'
            },
            { label: 'Čeština',
              srclang: 'cs',
              src: '/materials/digital-abuse/part5/videos/subtitles/cs/7.5.1. Influencers_CS.vtt'
            },
            { label: 'Norsk',
              srclang: 'no',
              src: '/materials/digital-abuse/part5/videos/subtitles/no/7.5.1. Influencers_NO.vtt'
            },
            { label: 'Lietuvių',
              srclang: 'lt',
              src: '/materials/digital-abuse/part5/videos/subtitles/lt/7.5.1. Influencers_LT.vtt'
            },
            { label: 'Deutsch',
              srclang: 'de',
              src: '/materials/digital-abuse/part5/videos/subtitles/de/7.5.1. Influencers_DE.vtt'
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
          // Worksheet: Digital Superhero
          { id: '7.6.1',
            href: '/materials/digital-abuse/part6/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/digital-abuse/part6/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/digital-abuse/part6/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/digital-abuse/part6/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/digital-abuse/part6/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/digital-abuse/part6/worksheets/de/placeholder.txt' },
            ],
          },
          // Worksheet: CyberDoku: Solving the Mystery
          { id: '7.6.2',
            href: '/materials/digital-abuse/part6/worksheets/en/placeholder.txt',
            languages: [
              { lang: 'en', href: '/materials/digital-abuse/part6/worksheets/en/placeholder.txt' },
              { lang: 'cs', href: '/materials/digital-abuse/part6/worksheets/cs/placeholder.txt' },
              { lang: 'no', href: '/materials/digital-abuse/part6/worksheets/no/placeholder.txt' },
              { lang: 'lt', href: '/materials/digital-abuse/part6/worksheets/lt/placeholder.txt' },
              { lang: 'de', href: '/materials/digital-abuse/part6/worksheets/de/placeholder.txt' },
            ],
          },
          // Image: CyberDoku: The Map of the Area
          { id: '7.6.3',
            href: '/materials/digital-abuse/part6/images/placeholder.txt'
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
