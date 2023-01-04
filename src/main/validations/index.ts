import { Response } from '../models'
import { checkIfWordExists, checkIfWordsInArrayExist } from './utils'


export const validateRange = (firstNumber: number, secondNumber: number): Response => {
  if( (firstNumber > 999 || firstNumber < 0) || (secondNumber > 999 || secondNumber < 0) ) {
    const data: Response = {
      error: true,
      message: 'Please use only numbers between 0 and 999.'
    }
  
    return data
  }
}

export const validateNegativeNumber = (userInput :string): Response => {
  if(userInput.includes('minus')) {
    const data: Response = {
      error: true,
      message: 'Please use only numbers between 0 and 999.'
    }
  
    return data
  }
}

export const validateOperator = (userInput :string): Response => {
  if(!userInput.includes('+') && !userInput.includes('plus')) {
    const data: Response = {
      error: true,
      message: 'Please include Operator ("+" or "plus").'
    }
  
    return data
  }
}


export const validateAllowedWords = (firstWord: string[], secondWord: string[]): Response => {
  let firstValidation = false

  if(validateHyphenatedWords(firstWord) && validateHyphenatedWords(secondWord))
    firstValidation = true

  if((!checkIfWordsInArrayExist(firstWord) || !checkIfWordsInArrayExist(secondWord)) || !firstValidation) {
    const data: Response = {
      error: true,
      message: 'Please only include Numbers (e.g., "52" or "Fifty-Two" ) and Operator ("+" or "plus").'
    }
  
    return data
  }
}

export const validateHyphenatedWords = (hyphenatedWords: string[]) => {
  let wordExists = true
  for(const word of hyphenatedWords) {
    if(word.includes('-')) {
      const separatedNumber = word.split('-')

      const wordOneExists = checkIfWordExists(separatedNumber[0])
      const wordTwoExists = checkIfWordExists(separatedNumber[1])

      if(!wordOneExists || !wordTwoExists) {
        wordExists = false
      }
    }
  }

  return wordExists
}
