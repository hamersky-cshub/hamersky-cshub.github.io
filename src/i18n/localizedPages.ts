// ---------------------------------------------------------------------------
// Localized routing helper
//
// English pages in src/pages/ are the canonical source — they are written
// once and served at their natural URL (e.g. /learning-hub/malware/content).
// Every non-English locale gets a catch-all route (pages/cs/[...slug].astro,
// pages/de/[...slug].astro, etc.) that dynamically renders the matching
// English source component while Astro supplies the correct locale context.
//
// This file builds the map that makes that handoff work:
//   route string  →  lazy page loader function
// ---------------------------------------------------------------------------

import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from './i18n'

type PageLoader = () => Promise<{ default: unknown }>

const pageModules = import.meta.glob('../pages/**/*.{astro,md,mdx}') as Record<string, PageLoader>

// Locales that have their own pages/ subdirectory acting as a catch-all wrapper.
// Derived from SUPPORTED_LOCALES so adding a new locale only requires updating i18n.ts.
const LOCALE_WRAPPER_SEGMENTS = new Set(SUPPORTED_LOCALES.filter((l) => l !== DEFAULT_LOCALE))

const toRoute = (filePath: string): string => {
  const relativePath = filePath.replace('../pages/', '')
  const routePath = relativePath.replace(/\.(astro|md|mdx)$/, '')

  if (routePath === 'index') {
    return ''
  }

  return routePath.endsWith('/index') ? routePath.slice(0, -'/index'.length) : routePath
}

// Pages under pages/cs/, pages/de/, etc. ARE the locale wrappers themselves —
// they must not be registered as source pages or we'd get infinite recursion.
const isLocalizedWrapper = (filePath: string): boolean => {
  const relativePath = filePath.replace('../pages/', '')
  const firstSegment = relativePath.split('/')[0]

  return LOCALE_WRAPPER_SEGMENTS.has(firstSegment as Exclude<typeof SUPPORTED_LOCALES[number], typeof DEFAULT_LOCALE>)
}

const isRoutableSourcePage = (filePath: string): boolean => {
  if (isLocalizedWrapper(filePath)) {
    return false
  }

  const route = toRoute(filePath)

  // 404 is locale-independent; Astro handles it separately.
  if (route === '404') {
    return false
  }

  // Dynamic routes (e.g. [slug].astro) manage their own getStaticPaths —
  // registering them here would produce duplicate or conflicting entries.
  return !route.split('/').some((segment) => segment.startsWith('[') && segment.endsWith(']'))
}

const localizedPageEntries = Object.entries(pageModules)
  .filter(([filePath]) => isRoutableSourcePage(filePath))
  .map(([filePath, loadPage]) => [toRoute(filePath), loadPage] as const)

// Keyed by route string so LocalizedPageRoute.astro can look up a loader
// for any slug the catch-all receives at request time.
const localizedPageMap = new Map(localizedPageEntries)

export const getLocalizedPageLoader = (route: string) => localizedPageMap.get(route)

export const getLocalizedPageStaticPaths = () =>
  localizedPageEntries
    .map(([route]) => route)
    .filter((route) => route.length > 0)
    .sort((left, right) => left.localeCompare(right))
    .map((route) => ({
      params: {
        slug: route,
      },
    }))
