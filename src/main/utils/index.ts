import { language, LanguageSetting } from '../models'


export const defineLanguage = (inputItems: string[]): LanguageSetting => {
  let operatorPosition: number
  let language: language = 'en'

  if(inputItems.indexOf('plus') !== -1) 
    operatorPosition = inputItems.indexOf('plus')
  else {
    operatorPosition = inputItems.indexOf('mas')
    language = 'es'
  }

  return { operatorPosition, language }
}
