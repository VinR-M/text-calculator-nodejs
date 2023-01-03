import { handleWords } from './utils/handleWords'

export const calculateNumbers = (userInput: string): number => {
  const inputItems = userInput.split(' ')
  const result = parseInt(inputItems[0]) + parseInt(inputItems[2])

  if(!isNaN(result)) 
    return result
  else 
    return handleWords(inputItems)
}
