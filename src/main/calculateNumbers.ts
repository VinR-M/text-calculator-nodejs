import { ToWords } from 'to-words';
import { handleWords } from './utils/handleWords'

export const calculateNumbers = (userInput: string): number | string => {
  const inputItems = userInput.split(' ')
  const result = parseInt(inputItems[0]) + parseInt(inputItems[2])

  const toWords = new ToWords({localeCode: 'en-GB'})

  if(!isNaN(result)) 
    return result
  else 
    return toWords.convert(handleWords(inputItems))
}
