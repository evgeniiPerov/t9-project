import { NextRequest, NextResponse } from 'next/server'
import Cookies from 'cookie'
import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from './constants/constants'

export function middleware(request: NextRequest) {
    const cookies = Cookies.parse(request.headers.get('Cookie') || '')

    const { pathname } = request.nextUrl
    const pathnameHasLocale = AVAILABLE_LOCALES.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    )

    if (pathname === '/robots.txt' || pathname === '/sitemap.xml') {
        return NextResponse.next()
    }

    if (pathnameHasLocale) return

    let locale = DEFAULT_LOCALE
    if (cookies.locale) {
        locale = cookies.locale
    }

    request.nextUrl.pathname = `/${locale}${pathname}`

    return Response.redirect(request.nextUrl)
}
export const config = {
    matcher: ['/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)'],
}
