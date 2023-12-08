const loc = (locale: string) => {
  return locale === 'ru' || locale === 'de' || locale === 'en' ? locale : 'de'
}

export default loc