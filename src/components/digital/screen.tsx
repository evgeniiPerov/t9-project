'use client'
interface ScreenProps {
    displayedWord: string
}
export const Screen = (arg: ScreenProps) => {
    return (
        <div className="screen border-solid border border-sky-500 p-3 rounded-xl min-h-[200px] ">
            <span>{arg.displayedWord && <pre>{arg.displayedWord}</pre>}</span>
        </div>
    )
}
