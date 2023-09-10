import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { GetLanguage } from 'helpers/SystemHelper.js';
import {
    en, enError, enWarn,
    tr, trError, trWarn
} from 'locales';

const language = GetLanguage();

i18n.use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: { ...en, ...enError, ...enWarn  },
            },
            tr: {
                translation: { ...tr, ...trError, ...trWarn },
            },
        },
        fallbackLng: language,
        debug: true,
        loadPath: 'locales/{{lng}}/{{ns}}.json',
    });

export default i18n;


