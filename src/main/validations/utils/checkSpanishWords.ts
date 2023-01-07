import * as es from '../../utils/languages/es.json'

export const checkIfWordsInArrayExistES = (words: string[]) => {
  let wordExists = false

  for(const word of words) {
    if(!!es.base[word] || word === 'mas' || word === 'cero') 
    wordExists = true
  }

  return wordExists
}

export const checkIfWordExistsES = (word: string) => {
  let wordExists = false

    if(!!es.base[word] || word === 'mas' || word === 'cero') 
      wordExists = true

  return wordExists
}