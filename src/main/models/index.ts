export interface Response {
  error: Boolean,
  result?: string | number,
  message?: string,
}

export type language = 'en' | 'es'
export interface LanguageSetting {
  language: language,
  operatorPosition: number
}
