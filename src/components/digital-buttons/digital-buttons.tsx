'use client'
import { Button } from '@/components/ui/button'
import { genCombinationAction } from '@/app/actions/t9.action'
import { useState } from 'react'
import { Bubbles } from '@/components/digital-buttons/bubbles'

export const DigitalButtons = () => {
    const [inputString, setInputString] = useState<string>('')
    const [messages, setMessages] = useState<string[] | null>(null)

    const handleClick = async (digit: string) => {
        let newInputString

        // Reset the inputString if '1' or '0' is pressed
        if (digit === '1' || digit === '0') {
            newInputString = ''
            setMessages(null)
        } else {
            newInputString = inputString + digit
        }

        setInputString(newInputString)
        const combined = await genCombinationAction(newInputString)
        setMessages(combined)
    }

    return (
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-col w-full gap-3 justify-center items-center">
                {messages !== null && <Bubbles messages={messages} />}
                <div className="flex gap-4 justify-center items-center">
                    <Button
                        onClick={() => handleClick('1')}
                        className={'flex flex-col p-7 button'}
                    >
                        1 <span>&apos; &apos;</span>
                    </Button>
                    <Button
                        onClick={() => handleClick('2')}
                        className={'flex flex-col p-7 button'}
                    >
                        2 <span>a b c</span>
                    </Button>
                    <Button
                        onClick={() => handleClick('3')}
                        className={'flex flex-col p-7 button'}
                    >
                        3 <span>d e f</span>
                    </Button>
                </div>
                <div className="flex gap-4 justify-center items-center">
                    <Button
                        onClick={() => handleClick('4')}
                        className={'flex flex-col p-7 button'}
                    >
                        4 <span>g h i</span>
                    </Button>
                    <Button
                        onClick={() => handleClick('5')}
                        className={'flex flex-col p-7 button'}
                    >
                        5 <span>j k l</span>
                    </Button>
                    <Button
                        onClick={() => handleClick('6')}
                        className={'flex flex-col p-7 button'}
                    >
                        6 <span>m n o</span>
                    </Button>
                </div>
                <div className="flex gap-4 justify-center items-center">
                    <Button
                        onClick={() => handleClick('7')}
                        className={'flex flex-col p-7 button'}
                    >
                        7 <span>m n o</span>
                    </Button>
                    <Button
                        onClick={() => handleClick('8')}
                        className={'flex flex-col p-7 button'}
                    >
                        8 <span>p q r s</span>
                    </Button>
                    <Button
                        onClick={() => handleClick('9')}
                        className={'flex flex-col p-7 button'}
                    >
                        9 <span>w x y z</span>
                    </Button>
                </div>
                <div className="flex justify-center items-center">
                    <Button
                        onClick={() => handleClick('0')}
                        className={'flex flex-col p-7 button'}
                    >
                        0 <span>&apos; &apos;</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}
