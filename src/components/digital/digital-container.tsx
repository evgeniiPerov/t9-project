'use client'
import { useState } from 'react'
import { DigitalButtons } from '@/components/digital/digital-buttons/digital-buttons'
import { Bubbles } from '@/components/digital/digital-buttons/bubbles'
import { genCombinationAction } from '@/app/actions/t9.action'

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

    const handleClick = async (digit: string) => {
        let newInputString

        if (digit === '1' || digit === '0') {
            newInputString = ''
            setMessages([])
        } else {
            newInputString = inputString + digit
            const combined = await genCombinationAction(newInputString)
            setMessages(combined)
        }

        setInputString(newInputString)
    }

    return (
        <div className={'lg:w-1/2 md:w-2/3 mx-auto'}>
            {displayedWord && <div className="displayed-word mt-3">{displayedWord}</div>}
            <DigitalButtons handleClick={handleClick} />
            <Bubbles
                messages={messages}
                onBubbleClick={onBubbleClick}
            />
        </div>
    )
}
