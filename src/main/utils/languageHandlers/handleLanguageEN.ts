import { ToWords } from 'to-words'
import { Response } from '../../models'
import { validateAllowedEnglishWords, validateRange } from '../../validations'
import { convertEnglishToInteger } from '../convertEnglishToInteger'

export const handleLanguageEN = (firstNumber: string[], secondNumber: string[]): Response => {
  const allowedWordsValidation = validateAllowedEnglishWords(firstNumber, secondNumber)
  if (allowedWordsValidation?.error)
    return allowedWordsValidation

  const convertedFirstNumber = convertEnglishToInteger(firstNumber)
  const convertedSecondNumber = convertEnglishToInteger(secondNumber)

  const validation = validateRange(convertedFirstNumber, convertedSecondNumber)
  if(validation?.error) 
    return validation

  const toWords = new ToWords({localeCode: 'en-GB'})
  const convertedResult = toWords.convert(convertedFirstNumber + convertedSecondNumber)

  const data: Response = {
    error: false,
    result: convertedResult
  }

  return data
}