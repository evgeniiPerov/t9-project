'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from '@/constants/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LocaleSwitch = () => {
    const pathName = usePathname()
    const currentLocale = pathName.split('/')[1] ?? DEFAULT_LOCALE

    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                >
                    {currentLocale.toUpperCase()}
                    <span className="sr-only">Toggle Locale</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {AVAILABLE_LOCALES.map((locale) => (
                    <Link
                        href={redirectedPathName(locale)}
                        key={locale}
                    >
                        <DropdownMenuItem key={locale}>{locale.toUpperCase()}</DropdownMenuItem>
                    </Link>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LocaleSwitch
