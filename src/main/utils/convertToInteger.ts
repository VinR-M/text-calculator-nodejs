import { convertHundreds, convertTens } from '.'

export const convertToInteger = (writtenNumbers: string[]): number => {
    if (writtenNumbers.length == 1 ) {
      const number = writtenNumbers[0]

      return convertTens(number)
    }
    else if(writtenNumbers.length == 2) {
      return convertHundreds(writtenNumbers)
    } 
    else if(writtenNumbers.length === 3 ) {
      const hundreds = convertHundreds(writtenNumbers)
      const tens = convertTens(writtenNumbers[2])

      return hundreds + tens
    }
}
