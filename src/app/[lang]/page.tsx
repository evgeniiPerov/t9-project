import locale from '@/locale/content/content'
import { AvailableLocales } from '@/types/types'
import { DigitalButtons } from '@/components/digital-buttons/digital-buttons'

function Page({ params }: { params: { lang: AvailableLocales } }) {
    return (
        <>
            <div>
                <h1>{locale[params.lang]?.header}</h1>
                <p>{locale[params.lang]?.content}</p>
            </div>
            <section className="body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">T9 project</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">BE by next actions</p>
                    </div>
                    <DigitalButtons />
                </div>
            </section>
        </>
    )
}

export default Page
