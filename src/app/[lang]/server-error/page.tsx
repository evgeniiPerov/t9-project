'use client'

import { AvailableLocales } from '@/types/types'
import Link from 'next/link'
import locale from '@/locale/errors/errors'

export default function ServerError({ params }: { params: { lang: AvailableLocales } }) {
    return (
        <div className={'flex flex-col justify-center items-center gap-4 h-[calc(100dvh-300px)]'}>
            <p className={'text-center text-7xl font-thin tracking-widest'}>{locale[params.lang]?.error500}</p>
            <h1 className={'uppercase text-white text-center text-3xl font-light tracking-widest'}>
                {locale[params.lang]?.serverErrorTitle}
            </h1>
            <p className={'text-grayBg text-center text-lg'}>
                {locale[params.lang]?.homeText}
                <span className={'cursor-pointer'}>
                    <Link
                        href={`/${params.lang}`}
                        className={'text-red-500 text-lg'}
                    >
                        {' '}
                        {locale[params.lang]?.homeUrl}
                    </Link>
                </span>
            </p>
        </div>
    )
}
