import { handleWords } from './handleWords'
import { Response } from './models'
import { validateNegativeNumber, validateOperator, validateRange } from './validations'

export const calculate = (userInput: string): Response => {
  if (userInput === '') 
    return { error: false, result: ''}

  const operatorValidation = validateOperator(userInput)
  if (operatorValidation?.error)
    return operatorValidation

  const normalizedInput = userInput.toLowerCase() 

  const negativeNumberValidation = validateNegativeNumber(normalizedInput)
  if (negativeNumberValidation?.error)
    return negativeNumberValidation

  const inputItems = normalizedInput.split(' ')

  const firstNumber = parseInt(inputItems[0])
  const secondNumber = parseInt(inputItems[2])

  const result = firstNumber + secondNumber

  if(!isNaN(result)) {
    const validation = validateRange(firstNumber, secondNumber)
    if(validation?.error) 
      return validation

    const response: Response = {
      error: false,
      result
    }

    return response
  }
  else 
    return handleWords(inputItems) 
}
