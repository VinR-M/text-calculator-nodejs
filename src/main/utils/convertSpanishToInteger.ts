import { convertHundredsES, convertSingleES, convertTensWithSeparator } from './converters/es'

export const convertSpanishToInteger = (writtenNumbers: string[]): number => {
    if (writtenNumbers.length == 1 ) {
      return convertSingleES(writtenNumbers[0])
    }
    else if(writtenNumbers.length == 2) {
      return convertHundredsES(writtenNumbers)
    } 
    else if(writtenNumbers.length === 3 ) {
      return convertTensWithSeparator(writtenNumbers)
    }
    else if(writtenNumbers.length === 4 ) {
      const tens = convertTensWithSeparator(writtenNumbers.slice(1))
      return convertSingleES(writtenNumbers[0]) + tens
    }
}
