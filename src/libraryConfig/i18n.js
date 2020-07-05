import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from '../languages/en.json'
import translationVI from '../languages/vn.json'

const resources = {
    en: {
        translation: translationEN,
    },
    vi: {
        translation: translationVI,
    },
}

i18n
.use(initReactI18next)
.init({
    resources,
    lng: "en",
    fallbackLng: 'en',
    debug: false,
    interpolation: {
        escapeValue: false,
    }
})

export default i18n
