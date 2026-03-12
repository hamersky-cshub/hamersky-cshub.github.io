type PageLoader = () => Promise<{ default: unknown }>

const pageModules = import.meta.glob('../pages/**/*.{astro,md,mdx}') as Record<string, PageLoader>

const toRoute = (filePath: string): string => {
  const relativePath = filePath.replace('../pages/', '')
  const routePath = relativePath.replace(/\.(astro|md|mdx)$/, '')

  if (routePath === 'index') {
    return ''
  }

  return routePath.endsWith('/index') ? routePath.slice(0, -'/index'.length) : routePath
}

const isLocalizedWrapper = (filePath: string): boolean => {
  const relativePath = filePath.replace('../pages/', '')
  const firstSegment = relativePath.split('/')[0]

  return ['cs', 'de', 'lt', 'no'].includes(firstSegment)
}

const isRoutableSourcePage = (filePath: string): boolean => {
  if (isLocalizedWrapper(filePath)) {
    return false
  }

  const route = toRoute(filePath)

  if (route === '404') {
    return false
  }

  return !route.split('/').some((segment) => segment.startsWith('[') && segment.endsWith(']'))
}

const localizedPageEntries = Object.entries(pageModules)
  .filter(([filePath]) => isRoutableSourcePage(filePath))
  .map(([filePath, loadPage]) => [toRoute(filePath), loadPage] as const)

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
