import { AVAILABLE_LOCALES } from '@/constants/constants'

export type AvailableLocales = (typeof AVAILABLE_LOCALES)[number]
export type LocaleRecord<T> = Partial<Record<AvailableLocales, T>>
