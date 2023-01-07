import { convertHundredsEN, convertNonHyphenatedNumbers, convertTensEN } from './converters/en'

export const convertEnglishToInteger = (writtenNumbers: string[]): number => {
    if (writtenNumbers.length == 1 ) {
      return convertTensEN(writtenNumbers[0])
    }
    else if(writtenNumbers.length == 2) {
      if(writtenNumbers[1] !== 'hundred' && writtenNumbers[1] !== 'thousand')
        return convertNonHyphenatedNumbers(writtenNumbers)

      return convertHundredsEN(writtenNumbers)
    } 
    else if(writtenNumbers.length === 3 ) {
      const hundreds = convertHundredsEN(writtenNumbers)
      const tens = convertTensEN(writtenNumbers[2])

      return hundreds + tens
    }
    else if(writtenNumbers.length === 4 ) {
      const hundreds = convertHundredsEN(writtenNumbers)
      const tens = convertNonHyphenatedNumbers(writtenNumbers.slice(2))

      return hundreds + tens
    }
}
