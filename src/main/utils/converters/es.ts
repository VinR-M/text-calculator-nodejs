import * as es from '../../utils/languages/es.json'

export const convertSingleES = (number: string): number => {
  return es.base[number]
}

export const convertTensWithSeparator = (number: string[]): number => {
  return es.base[number[0]] + es.base[number[2]]
}

export const convertHundredsES = (number: string[]): number => {
  return es.base[number[0]] + es.base[number[1]]
}
