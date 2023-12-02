import locale from '@/locale/content/content'
import { AvailableLocales } from '@/types/types'
import { DigitalContainer } from '@/components/digital/digital-container'

function Page({ params }: { params: { lang: AvailableLocales } }) {
    return (
        <>
            <section className="body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
                            {locale[params.lang]?.header}
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{locale[params.lang]?.content}</p>
                    </div>
                    <DigitalContainer />
                </div>
            </section>
        </>
    )
}

export default Page
