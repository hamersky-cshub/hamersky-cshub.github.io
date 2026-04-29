import { en } from './translations/en/index'
import { cs } from './translations/cs/index'
import { de } from './translations/de/index'
import { lt } from './translations/lt/index'
import { no } from './translations/no/index'

type DeepString<T> =
  T extends string ? string :
  T extends number ? number :
  T extends boolean ? boolean :
  T extends ReadonlyArray<infer U> ? DeepString<U>[] :
  T extends object ? { [K in keyof T]: DeepString<T[K]> } :
  T
export type Translations = DeepString<typeof en>

// Locales may be partially translated; `t()` will fall back to English per-key.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const translationMap: Record<string, Partial<Translations>> = { en, cs, de, lt, no } as any

function resolve(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((cur, key) => {
    if (cur !== null && typeof cur === 'object' && key in (cur as Record<string, unknown>)) {
      return (cur as Record<string, unknown>)[key]
    }
    return undefined
  }, obj)
}

/**
 * Return a translator bound to the given locale.
 *
 * Usage in an Astro component:
 * ```
 * const { t, locale, translations } = useTranslations(Astro.currentLocale)
 * t('nav.home')  // "Home"
 * ```
 */
export function useTranslations(currentLocale: string | undefined) {
  const locale = currentLocale && currentLocale in translationMap ? currentLocale : 'en'
  const translations = translationMap[locale]

  function v<T = unknown>(key: string): T | undefined {
    const value = resolve(translations, key)
    if (value !== undefined) return value as T
    // Fallback to English if the key is missing in the current locale
    const fallback = resolve(en, key)
    if (fallback !== undefined) return fallback as T
    return undefined
  }

  function t(key: string): string {
    const value = v(key)
    if (typeof value === 'string') return value
    return key
  }

  return { t, v, locale, translations }
}
