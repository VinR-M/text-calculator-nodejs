import { convertToInteger } from './utils/convertToInteger'
import { ToWords } from 'to-words';
import { validateRange } from './validations';
import { Data } from './models';

export const handleWords = (inputItems: string[]): Data => {
  const totalWords = inputItems.length
  const operatorPosition = inputItems.indexOf('plus')

  const firstNumber = inputItems.slice(0, operatorPosition)
  const secondNumber = inputItems.slice(operatorPosition +1, totalWords)

  const convertedFirstNumber = convertToInteger(firstNumber)
  const convertedSecondNumber = convertToInteger(secondNumber)

  
  const toWords = new ToWords({localeCode: 'en-GB'})
  const convertedResult = toWords.convert(convertedFirstNumber + convertedSecondNumber)

  const validation = validateRange(convertedFirstNumber, convertedSecondNumber)

    if(validation?.error) 
      return validation

  const data: Data = {
    error: false,
    result: convertedResult
  }

  return data
}
