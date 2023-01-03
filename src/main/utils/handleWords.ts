import { convertToInteger } from './convertToInteger'

export const handleWords = (inputItems) => {
  const totalWords = inputItems.length
  const operatorPosition = inputItems.indexOf('plus')

  const firstNumber = inputItems.slice(0, operatorPosition)
  const secondNumber = inputItems.slice(operatorPosition +1, totalWords)

  return convertToInteger(firstNumber) + convertToInteger(secondNumber)
}
