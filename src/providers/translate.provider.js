import i18n from 'i18n'

const setupTranslate = (directory, defaultLocale) => i18n.configure({
  directory,
  locales: ['en', 'es'],
  defaultLocale
})

export default setupTranslate
