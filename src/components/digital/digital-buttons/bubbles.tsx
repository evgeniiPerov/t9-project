'use client'
import { useState } from 'react'

interface BubblesProps {
    messages: string[]
    onBubbleClick: (word: string) => void
}

export const Bubbles = ({ messages, onBubbleClick }: BubblesProps) => {
    const [showAll, setShowAll] = useState(false)
    const allMessagesEmpty = messages.every((msg) => msg.trim() === '')

    if (messages.length === 0 || allMessagesEmpty) return null

    const displayedMessages = showAll ? messages : messages.slice(0, 6)

    return (
        <div>
            <div className="bubbles-container flex flex-wrap gap-2">
                {displayedMessages.map((str, index) => (
                    <div
                        key={index}
                        className="bubble p-4 border-red-200 border-solid border rounded-xl hover:bg-red-200 cursor-pointer"
                        onClick={() => onBubbleClick(str)}
                    >
                        {str}
                    </div>
                ))}
                {messages.length > 6 && !showAll && (
                    <div
                        onClick={() => setShowAll(true)}
                        className="bubble p-4 border-red-200 border-solid border rounded-xl hover:bg-red-200 cursor-pointer"
                    >
                        ...
                    </div>
                )}
            </div>
        </div>
    )
}
