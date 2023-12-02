import { LocaleRecord } from '@/types/types'
import { cs } from './cs'
import { en } from './en'

interface LocaleKeys {
    notFoundTitle: string
    homeText: string
    homeUrl: string
    serverErrorTitle: string
    error404: string
    error500: string
}

const locale: LocaleRecord<LocaleKeys> = {
    cs,
    en,
}

export type { LocaleKeys as NotFoundLocaleKeys }
export default locale
