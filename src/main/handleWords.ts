import { Response } from './models';
import { defineLanguage } from './utils';
import { handleLanguageEN } from './utils/languageHandlers/handleLanguageEN';
import { handleLanguageES } from './utils/languageHandlers/handleLanguageES';

export const handleWords = (inputItems: string[]): Response => {
  const totalWords = inputItems.length

  const languageDefinition = defineLanguage(inputItems)

  const firstNumber = inputItems.slice(0, languageDefinition.operatorPosition)
  const secondNumber = inputItems.slice(languageDefinition.operatorPosition +1, totalWords)

  if (languageDefinition.language == 'en')
    return handleLanguageEN(firstNumber, secondNumber)
  else 
    return handleLanguageES(firstNumber, secondNumber)
}
