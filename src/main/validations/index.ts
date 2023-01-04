import { Data } from '../models'

export const validateRange = (firstNumber: number, secondNumber: number): Data => {
  if ( (firstNumber > 999 || firstNumber < 0) || (secondNumber > 999 || secondNumber < 0) ) {
    const data: Data = {
      error: true,
      message: 'Please use only numbers between 0 and 999.'
    }
  
    return data
  }
}

// Forbidden words (minus)
// Only when Plus
// Normalize Caps
