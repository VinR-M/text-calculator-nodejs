import * as en from '../../utils/languages/en.json'

export const checkIfWordsInArrayExist = (words: string[]) => {
  let wordExists = false

  for(const word of words) {
    if(!!en.base[word] || !!en.units[word] || word === 'plus' || word === 'zero') 
    wordExists = true
  }

  return wordExists
}

export const checkIfWordExists = (word: string) => {
  let wordExists = false

    if(!!en.base[word] || !!en.units[word] || word === 'plus' || word === 'zero') 
      wordExists = true

  return wordExists
}