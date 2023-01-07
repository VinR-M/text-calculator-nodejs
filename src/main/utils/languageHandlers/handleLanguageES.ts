import { Response } from '../../models'
import { validateAllowedSpanishWords, validateRange } from '../../validations'
import { convertSpanishToInteger } from '../convertSpanishToInteger'
const NumeroPalabra = require('numero-palabra')
 
export const handleLanguageES = (firstNumber: string[], secondNumber: string[]): Response => {
  const allowedWordsValidation = validateAllowedSpanishWords(firstNumber, secondNumber)
  if (allowedWordsValidation?.error)
    return allowedWordsValidation

  const convertedFirstNumber = convertSpanishToInteger(firstNumber)
  const convertedSecondNumber = convertSpanishToInteger(secondNumber)

  const validation = validateRange(convertedFirstNumber, convertedSecondNumber)
  if(validation?.error) 
    return validation
  const convertedResult = NumeroPalabra(`${convertedFirstNumber + convertedSecondNumber}`)

  const data: Response = {
    error: false,
    result: convertedResult
  }

  return data
}
