'use client'
import { Button } from '@/components/ui/button'
import { Space } from 'lucide-react'

interface DigitalButtonsProps {
    handleClick: (digit: string) => Promise<void>
    onReset: () => void
}

export const DigitalButtons = ({ handleClick, onReset }: DigitalButtonsProps) => {
    return (
        <div className="">
            <div className="flex flex-col w-full gap-3 justify-center items-center">
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
                        7 <span>p q r s</span>
                    </Button>
                    <Button
                        onClick={() => handleClick('8')}
                        className={'flex flex-col p-7 button'}
                    >
                        8 <span>t u v</span>
                    </Button>
                    <Button
                        onClick={() => handleClick('9')}
                        className={'flex flex-col p-7 button'}
                    >
                        9 <span>w x y z</span>
                    </Button>
                </div>
                <div className="flex gap-4 justify-center items-center">
                    <Button
                        onClick={() => handleClick('0')}
                        className={'flex flex-col p-7 button'}
                    >
                        0
                        <span>
                            <Space />
                        </span>
                    </Button>
                    <Button
                        onClick={onReset}
                        className={'flex flex-col p-7 button'}
                    >
                        Reset
                    </Button>
                </div>
            </div>
        </div>
    )
}
