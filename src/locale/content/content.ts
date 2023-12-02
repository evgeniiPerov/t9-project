import { LocaleRecord } from '@/types/types'
import { cs } from './cs'
import { en } from './en'

interface LocaleKeys {
    header: string
    content: string
    submitButtonLabel: string
}

const locale: LocaleRecord<LocaleKeys> = {
    cs,
    en,
}

export type { LocaleKeys as ContentLocaleKeys }
export default locale
