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
    const [lastDeletedChar, setLastDeletedChar] = useState('')

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

    const onDeleteLastWord = () => {
        if (displayedWord.length === 0) return

        if (lastDeletedChar === ' ' && displayedWord[displayedWord.length - 1] === ' ') {
            const words = displayedWord.trim().split(' ')
            words.pop()
            setDisplayedWord(words.join(' ') + (words.length > 0 ? ' ' : ''))
        } else {
            const newDisplayedWord = displayedWord.slice(0, -1)
            setDisplayedWord(newDisplayedWord)
            setLastDeletedChar(displayedWord[displayedWord.length - 1])
        }
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
            setLastDeletedChar('')
        }
    }

    return (
        <div className={'lg:w-1/2 md:w-2/3 mx-auto flex flex-col gap-4'}>
            <Screen displayedWord={displayedWord} />
            <DigitalButtons
                handleClick={handleClick}
                onReset={onReset}
                onDeleteLastWord={onDeleteLastWord}
            />
            <Bubbles
                messages={messages}
                onBubbleClick={onBubbleClick}
            />
        </div>
    )
}
