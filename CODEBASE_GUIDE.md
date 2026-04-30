# Codebase Guide

## Project Overview

**KidCy / Wise Web Wanderers** — an Astro-based multilingual e-learning platform teaching cybersecurity to upper-elementary students. Built on the [Accessible Astro Starter](https://accessible-astro.netlify.app/) template; strong WCAG accessibility focus throughout.

Stack: **Astro 6**, **TypeScript**, **Tailwind CSS v4**, **SCSS**, **Zod** (runtime validation), **astro-icon** (Lucide icons), **jszip** (download bundles).

---

## Directory Structure

```
src/
├── assets/scss/          # Global SCSS — reset, fonts, buttons, dark mode, module color vars
│   └── base/
│       ├── _root.scss    # CSS custom properties (brand colors, spacing, elevation)
│       ├── _modules.scss # Per-module brand color overrides (--brand-DC, --brand-AT, …)
│       ├── _dark.scss    # Dark mode token overrides
│       └── …
├── components/           # Reusable Astro components
├── data/                 # Module registry and part/asset data
├── i18n/                 # Translation system
├── layouts/              # Page shell (DefaultLayout)
├── pages/                # File-system routes
│   ├── index.astro       # Home page
│   ├── about.astro       # About page
│   ├── 404.astro         # Custom 404
│   ├── learning-hub/     # Module content, challenge, and game pages (English default)
│   ├── cs/[...slug].astro  # Czech locale wrapper
│   ├── de/[...slug].astro  # German locale wrapper
│   ├── lt/[...slug].astro  # Lithuanian locale wrapper
│   └── no/[...slug].astro  # Norwegian locale wrapper
├── styles/tailwind.css   # Tailwind entry point
└── utils/navigation.ts   # Navigation keyboard/ARIA interaction logic
```

---

## i18n System

### Locales
`src/i18n/i18n.ts` — `DEFAULT_LOCALE = 'en'`, `SUPPORTED_LOCALES = ['en', 'cs', 'de', 'lt', 'no']`.

### Translation files
`src/i18n/translations/<locale>/`
- `shared.ts` — all UI strings: nav, footer, hero, home, about, hub labels, module titles, content page labels, game page, 404.
- `contentDC.ts`, `contentAP.ts`, `contentAT.ts`, `contentDP.ts`, `contentSE.ts`, `contentMW.ts`, `contentDA.ts` — per-module content: aim, objectives, outcomes, parts (translatable text only — no file paths).
- `index.ts` — re-exports everything as a single namespace object.

### `useTranslations(locale)` — `src/i18n/index.ts`
Returns `{ t, v, locale, translations }`:
- `t(key)` — dot-path lookup, returns `string`. Falls back to English if key is missing in locale.
- `v<T>(key)` — same but returns `T | undefined` (used for arrays and nested objects).

Usage in every `.astro` page:
```ts
const { t, v } = useTranslations(Astro.currentLocale)
t('nav.home')                                     // → "Home"
v<string[]>('contentDC.objectives')              // → string[]
```

### Localized routing
Each non-English locale has a catch-all `pages/<locale>/[...slug].astro`. It calls `getLocalizedPageStaticPaths()` (from `src/i18n/localizedPages.ts`) to generate one route per English source page, then renders the same source component via `LocalizedPageRoute.astro`. Result: every English page is available at `/<locale>/<same-slug>` with no duplication of page source files.

`localizePath(locale, href)` — converts an internal `/path` to the locale-prefixed version. Use everywhere a link targets an internal page.

---

## Module Data System

### Module registry — `src/data/modules.ts`

Defines `modules: ModuleData[]` — one entry per learning module:

| ID | Slug | Color |
|----|------|-------|
| `dc` | `digital-citizenship` | `#22C55E` |
| `ap` | `attacker-perspective` | `#8850DF` |
| `at` | `authentication` | `#F59E0B` |
| `dp` | `data-privacy` | `#14B8A6` |
| `se` | `social-engineering` | `#D946EF` |
| `mw` | `malware` | `#93CC16` |
| `da` | `digital-abuse` | `#EF4444` |

Each `ModuleData` holds: `id`, `slug`, `color`, `materials` (count), `videos` (count), `challenges` (0 or 1), `games` (0 or 1), `teachersGuide.href`.

Counts are **derived automatically** from `modulePartsData` at build time — do not hard-code them.

### Part asset data — `src/data/moduleParts.ts`

`modulePartsData: Record<ModuleId, PartDefinition[]>` — the single source of truth for all file paths and structural data. Each `PartDefinition` has:
- `anchorId` — URL hash for deep-linking to a part (e.g. `digital-environments`).
- `assets.bundle.href` — ZIP download path for the whole part.
- `assets.materials[]` — array of `{ id, href, isGuide? }` asset entries.
- `assets.featuredVideo` — `{ id, posterSrc, videoSrc, downloads, tracks[] }`.

**Editors do not touch this file for text** — all displayed text comes from translation files.

### Merge function — `mergeParts(moduleId, translationParts)`

Called in each `content.astro` page. Combines `modulePartsData[moduleId]` (structural) with the locale's `contentXX.parts` array (text). Returns `MergedPart[]` ready for rendering.

Key behaviors:
- Activity plan steps are **auto-numbered** from array index.
- In `DEV` mode: warns if material counts mismatch between assets and translation, and validates translation shape via Zod.
- Video `tracks` (subtitle VTT paths) come from assets only — never from translation files.

### Zod schema — `src/data/moduleParts.schema.ts`

`TranslationPartSchema` validates each element of `contentXX.parts` in dev/build. Extra fields are stripped silently (strip mode). Used only for early error detection — does not block rendering.

---

## Content Pages Pattern

Every learning module has pages at `src/pages/learning-hub/<slug>/`:

| File | Purpose |
|------|---------|
| `content.astro` | Main module page: aim/objectives/outcomes tabs, expandable parts with materials/video/activity-plan tabs, related modules list |
| `challenge.astro` | Interactive challenge embed |
| `game.astro` | Roblox game link + instructions (optional — not all modules have this) |

All content pages follow the same structure:
1. `useTranslations(Astro.currentLocale)` to get `t` and `v`.
2. `v<TranslationPart[]>('contentXX.parts')` to get locale translation array.
3. `mergeParts('xx', translationParts)` to get `MergedPart[]`.
4. Render using `DefaultLayout` + `PageHeader`.

CSS classes in `content.astro` use the `dc-*` prefix namespace. Module brand color is applied via CSS custom property `var(--brand-DC)` (or `--brand-AT`, `--brand-DP`, etc.) defined in `_modules.scss`.

---

## Key Components

| Component | Description |
|-----------|-------------|
| `DefaultLayout.astro` | Root shell: `<html lang>`, CSP header, font preload, sticky footer via CSS grid, skip-link target `#main-content`. |
| `Header.astro` | Site header with navigation and language switcher. |
| `Navigation.astro` | Main nav markup; keyboard logic lives in `utils/navigation.ts`. |
| `LanguageSwitcher.astro` | Renders locale links using `localizePath` for each supported locale. |
| `Hero.astro` | Home page hero with floating robot image and CTA buttons. |
| `PageHeader.astro` | Module page header: title, subtitle, colored underline, optional download buttons. |
| `Footer.astro` | Site footer with navigation links and partner logos. |
| `SiteMeta.astro` | `<head>` SEO meta tags (title, description, OG, author). |
| `LocalizedPageRoute.astro` | Dynamically loads and renders an English source page component for localized catch-all routes. |

---

## Navigation Keyboard Logic — `src/utils/navigation.ts`

Extracted from the component for testability. `initializeNavigation()` must be called on `DOMContentLoaded` and on every `astro:page-load` (view transitions). Uses `data-nav-bound` guard to prevent duplicate listener registration.

`matchesMenuItem` supports four match strategies via `data-nav-match` attribute: `root`, `section`, `prefix`, `exact` (default).

---

## SCSS Architecture

`src/assets/scss/index.scss` imports all partials. Key partials:

| File | Contents |
|------|---------|
| `_root.scss` | CSS variables: colors, spacing scale (`--space-xs` … `--space-2xl`), elevation shadows, border radii |
| `_modules.scss` | `--brand-DC`, `--brand-AP`, `--brand-AT`, `--brand-DP`, `--brand-SE`, `--brand-MW`, `--brand-DA` color tokens used by module pages |
| `_dark.scss` | Dark mode surface/border/fg tokens (`--dm-surface-*`, `--dm-border-*`, `--dm-fg*`) |
| `_general.scss` | Base typography, container, section spacing |
| `_button.scss` | `.button`, `.has-icon`, `.is-outline` button styles |
| `_font.scss` | `@font-face` for Atkinson Hyperlegible Next (preloaded in DefaultLayout) |

Module page component styles (e.g. `.dc-*` classes in `content.astro`) live inline in each page's `<style>` block, not in the global SCSS.

---

## Adding a New Module

1. Add a `ModuleId` literal to the union in `src/data/modules.ts`.
2. Add a `ModuleData` entry to the `modules` array.
3. Add a `PartDefinition[]` array under the new ID in `modulePartsData` in `src/data/moduleParts.ts`.
4. Create `src/pages/learning-hub/<slug>/content.astro` (copy an existing one and change the module ID).
5. Optionally add `challenge.astro` and `game.astro`.
6. Add translation content files (`contentXX.ts`) in each locale folder, following the existing structure.
7. Export the new translation from each locale's `index.ts`.
8. Add a `--brand-XX` CSS variable in `_modules.scss`.

---

## Adding or Editing Translations

- **UI text** (nav, buttons, labels): edit `src/i18n/translations/<locale>/shared.ts`.
- **Module content** (aim, objectives, outcomes, parts text): edit `src/i18n/translations/<locale>/contentXX.ts`.
- **Part title keys** follow the pattern `hub.moduleParts.<id>.p<N>Title` and are resolved via `t(part.titleKey)` — add them to `shared.ts` under `hub.moduleParts`.
- **Never put file paths or asset hrefs in translation files** — those belong in `modulePartsData`.
- English (`en`) is the fallback — if a key is missing in another locale, `t()` returns the English value automatically.

---

## Public Assets Convention

```
public/
├── fonts/               # Woff2 fonts (Atkinson Hyperlegible Next)
├── images/              # UI images, module posters, video thumbnails
│   ├── index/           # Home page illustrations
│   └── learning-hub/    # Module poster images
├── materials/           # Downloadable teaching materials
│   └── <module-slug>/
│       ├── part<N>/
│       │   ├── part<N>.zip       # Bundle for the part
│       │   ├── <asset-id>.pdf    # Individual materials
│       │   └── videos/
│       │       ├── <id>_video.mp4
│       │       ├── subtitles.zip
│       │       └── subtitles/<locale>/<id>_subtitles_<LOCALE>.vtt
│       ├── teaching-guide/teaching-guide.zip
│       └── <module-slug>.zip     # Full module bundle
└── placeholder.txt / placeholder.vtt   # Used for not-yet-available assets
```

Asset IDs follow the pattern `<moduleNum>.<partNum>.<assetNum>` (e.g. `1.1.2`, `3.4.5`).
