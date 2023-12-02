import { IDigitalMap } from '@/services/combination.interface'

export const generateCombinations = async (input: string): Promise<string[]> => {
    if (input.length === 0) return ['']
    const firstDigit: string = input[0]
    const remainingDigits: string = input.slice(1)
    const firstDigitLetters: string[] = digitToLetters[firstDigit]
    const combinationsForRemaining: string[] = await generateCombinations(remainingDigits)

    const combinations: string[] = []
    firstDigitLetters.forEach((letter) => {
        combinationsForRemaining.forEach((combination) => {
            combinations.push(letter + combination)
        })
    })

    return combinations
}

const digitToLetters: IDigitalMap = {
    '1': [' '],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
    '0': [' '],
}
