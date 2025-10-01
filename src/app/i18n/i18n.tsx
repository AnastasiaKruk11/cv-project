import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import * as enTranslation from '../locales/enTranslation.json';
import * as ruTranslation from '../locales/ruTranslation.json';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                ...enTranslation,
            }
        },
        ru: {
            translation: {
                ...ruTranslation,
            }
        }
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
        escapeValue: false,
    }
});

export default i18n;