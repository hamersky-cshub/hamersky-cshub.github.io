// ---------------------------------------------------------------------------
// Zod schemas for TranslationPart validation
// ---------------------------------------------------------------------------
//
// These schemas mirror the TranslationPart interfaces in moduleParts.ts.
// Used by mergeParts() to validate translation input at dev/build time,
// catching shape mismatches before they silently corrupt rendered content.
//
// NOTE: Zod uses "strip" mode by default — extra fields (e.g. legacy `href`,
// `filename` in older locale files) are allowed and simply ignored during
// validation. This keeps validation non-breaking during migrations.
// ---------------------------------------------------------------------------

import { z } from 'zod'

export const TranslationVideoDownloadSchema = z.object({
  ariaLabel: z.string(),
})

export const TranslationFeaturedVideoSchema = z.object({
  title:       z.string(),
  supportText: z.string().optional(),
  downloads: z.object({
    video:     TranslationVideoDownloadSchema,
    subtitles: TranslationVideoDownloadSchema,
  }).optional(),
})

export const TranslationActivityStepSchema = z.object({
  title: z.string(),
})

export const TranslationMaterialSchema = z.object({
  kind:      z.string(),
  name:      z.string(),
  filename:  z.string(),
  ariaLabel: z.string(),
})

export const TranslationPartIncludedSchema = z.object({
  materials:    z.array(TranslationMaterialSchema).optional(),
  activityPlan: z.array(TranslationActivityStepSchema).optional(),
})

/**
 * Schema for a single part entry in a locale translation file.
 *
 * Extra fields (e.g. `href`, `filename`) are stripped silently — this allows
 * older locale files that haven't been fully migrated to still pass validation.
 */
export const TranslationPartSchema = z.object({
  goal:          z.string().optional(),
  bundle:        z.object({ filename: z.string().optional() }).optional(),
  included:      TranslationPartIncludedSchema.optional(),
  featuredVideo: TranslationFeaturedVideoSchema.optional(),
})

export type TranslationPartInput = z.input<typeof TranslationPartSchema>
