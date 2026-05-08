import en from './en/translation';
import es from './es/translation';
import ua from './ua/translation';
import i18n from 'i18next';
import { LOCAL_STORAGE_LANGUAGE_KEY } from 'constants/LANGUAGES_CONSTANTS';

export type Language = typeof en;
export type TLanguageCode = 'en' | 'ua' | 'es';

export const LANGUAGE_CODES: TLanguageCode[] = ['en', 'ua', 'es'];

const resources = {
  en: {
    translation: en,
  },
  ua: {
    translation: ua,
  },
  es: {
    translation: es,
  },
};

function getSavedLanguage(): TLanguageCode {
  const savedLanguage = localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY);

  if (LANGUAGE_CODES.includes(savedLanguage as TLanguageCode)) {
    return savedLanguage as TLanguageCode;
  }

  return 'en';
}

i18n.init({
  resources,
  lng: getSavedLanguage(),
  fallbackLng: 'en',
  ns: ['translation'],
  defaultNS: 'translation',
  returnObjects: true,
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
    skipOnVariables: false,
  },
  appendNamespaceToMissingKey: true,
});

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
    nsSeparator: '';
    resources: Record<string, Language>;
  }
}

export default i18n;