import * as en from '../utils/languages/en.json'

export const convertHyphenatedNumbers = (hyphenatedNumber: string): number => {
  const separatedNumber = hyphenatedNumber.split('-')

  return en.base[separatedNumber[0]] + en.base[separatedNumber[1]]
}

export const convertNonHyphenatedNumbers = (nonHyphenatedNumbers : string[]): number => {
  return en.base[nonHyphenatedNumbers[0]] + en.base[nonHyphenatedNumbers[1]]
}

export const convertTens = (number: string): number => {
  if(number.includes('-')) {
    return convertHyphenatedNumbers(number)
  }

  return en.base[number]
}

export const convertHundreds = (number: string[]): number => {
  return en.base[number[0]] * en.units[number[1]]
}
