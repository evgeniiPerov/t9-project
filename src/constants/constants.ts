export const AVAILABLE_LOCALES = ['en', 'cs'] as const
export const DEFAULT_LOCALE = 'cs'

if (!AVAILABLE_LOCALES.includes(DEFAULT_LOCALE)) {
    throw new Error(`DEFAULT_LOCALE ${DEFAULT_LOCALE} is not in AVAILABLE_LOCALES`)
}

export const LOCAL_STORAGE_KEYS = {}
