import i18n from 'i18next';
import en from './en/translation';
import es from './es/translation';
import ua from './ua/translation';

type Language = typeof en;
export type TLanguageCode = 'en' | 'ua' | 'es';

export const LANGUAGE_CODES: TLanguageCode[] = ['en', 'ua', 'es'];
const FALLBACK_LANGUAGE: TLanguageCode = 'en';

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

function normalizeLanguage(language?: string | null): TLanguageCode | null {
  if (LANGUAGE_CODES.includes(language as TLanguageCode)) {
    return language as TLanguageCode;
  }

  return null;
}

function getDefaultLanguage(): TLanguageCode {
  return (
    normalizeLanguage(import.meta.env.VITE_DEFAULT_LANGUAGE) ??
    FALLBACK_LANGUAGE
  );
}

function getInitialLanguage(): TLanguageCode {
  const savedLanguage = localStorage.getItem(
    import.meta.env.VITE_LOCAL_STORAGE_LANGUAGE_KEY
  );

  return normalizeLanguage(savedLanguage) ?? getDefaultLanguage();
}

i18n.init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: getDefaultLanguage(),
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
