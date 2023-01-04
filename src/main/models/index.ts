export interface Data {
  error: Boolean,
  result?: string | number,
  message?: string,
}

export interface Response extends Data {
  language?: 'en' | 'fr'
}
