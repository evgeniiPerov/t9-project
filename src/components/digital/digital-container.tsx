'use client'
import { useState } from 'react'
import { DigitalButtons } from '@/components/digital/digital-buttons/digital-buttons'
import { Bubbles } from '@/components/digital/digital-buttons/bubbles'
import { genCombinationAction } from '@/app/actions/t9.action'
import { Screen } from '@/components/digital/screen'

export const DigitalContainer = () => {
    const [inputString, setInputString] = useState<string>('')
    const [displayedWord, setDisplayedWord] = useState<string>('')
    const [messages, setMessages] = useState<string[]>([])

    const onBubbleClick = (word: string) => {
        const newDisplayedWord = displayedWord ? displayedWord + ' ' + word : word
        setDisplayedWord(newDisplayedWord)

        setInputString('')
        setMessages([])
    }

    const onReset = () => {
        setInputString('')
        setDisplayedWord('')
        setMessages([])
    }

    const handleClick = async (digit: string) => {
        let newInputString = inputString

        if (digit === '0' || digit === '1') {
            setDisplayedWord(displayedWord + ' ')
        } else {
            newInputString = inputString + digit
            setInputString(newInputString)
            const combined = await genCombinationAction(newInputString)
            setMessages(combined)
        }
    }

    return (
        <div className={'lg:w-1/2 md:w-2/3 mx-auto flex flex-col gap-4'}>
            <Screen displayedWord={displayedWord} />
            <DigitalButtons
                handleClick={handleClick}
                onReset={onReset}
            />
            <Bubbles
                messages={messages}
                onBubbleClick={onBubbleClick}
            />
        </div>
    )
}
