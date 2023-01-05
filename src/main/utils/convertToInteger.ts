import { convertHundreds, convertNonHyphenatedNumbers, convertTens } from '.'

export const convertToInteger = (writtenNumbers: string[]): number => {
    if (writtenNumbers.length == 1 ) {
      return convertTens(writtenNumbers[0])
    }
    else if(writtenNumbers.length == 2) {
      if(writtenNumbers[1] !== 'hundred' && writtenNumbers[1] !== 'thousand')
        return convertNonHyphenatedNumbers(writtenNumbers)

      return convertHundreds(writtenNumbers)
    } 
    else if(writtenNumbers.length === 3 ) {
      const hundreds = convertHundreds(writtenNumbers)
      const tens = convertTens(writtenNumbers[2])

      return hundreds + tens
    }
    else if(writtenNumbers.length === 4 ) {
      const hundreds = convertHundreds(writtenNumbers)
      const tens = convertNonHyphenatedNumbers(writtenNumbers.slice(2))

      return hundreds + tens
    }
}
