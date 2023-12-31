import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { DEFAULT_LOCALE } from '@/constants/constants'
import '@/app/globals.css'
import ThemeProvider from '@/components/providers/theme-provider/theme.provider'
import AppBar from '@/components/ui/app-bar/app-bar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 't9 small project',
    description: 'create t9 small project with next :)',
}

export default function RootLayout({ children, params }: { children: ReactNode; params: { lang: string } }) {
    return (
        <html
            lang={params.lang ?? DEFAULT_LOCALE}
            suppressHydrationWarning
        >
            <head />

            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <AppBar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
