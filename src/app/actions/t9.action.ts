import { generateCombinations } from '@/services/combination.service'

export const genCombinationAction = async (input: string): Promise<string[]> => {
    return await generateCombinations(input)
}
