import { handleWords } from './handleWords'
import { Response } from './models'
import { validateRange } from './validations'

export const calculate = (userInput: string): Response => {
  const inputItems = userInput.split(' ')
  const firstNumber = parseInt(inputItems[0])
  const secondNumber = parseInt(inputItems[2])

  const result = firstNumber + secondNumber

  console.log(userInput)

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
