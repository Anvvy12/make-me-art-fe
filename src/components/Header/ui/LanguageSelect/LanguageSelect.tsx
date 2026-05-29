import { useEffect, useRef, useState } from 'react';

import cn from 'classnames';
import s from './LanguageSelect.module.scss';
import { LOCAL_STORAGE_LANGUAGE_KEY } from 'constants/LANGUAGES_CONSTANTS';
import { useTranslation } from 'react-i18next';
import { LANGUAGE_CODES, type TLanguageCode } from 'translation/i18';

export default function LanguageSelect() {
  const { t, i18n } = useTranslation(undefined, { keyPrefix: 'common' });
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const currentLanguage =
    LANGUAGE_CODES.find((language) => i18n.language.startsWith(language)) ??
    'en';

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleDocumentClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleLanguageChange = (language: TLanguageCode) => {
    localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, language);
    void i18n.changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className={s.LanguageSelect} ref={rootRef}>
      <button
        className={cn(s.trigger, { [s.open]: isOpen })}
        type='button'
        aria-label={t('language.label')}
        aria-haspopup='listbox'
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {t(`language.${currentLanguage}`)}
      </button>
      <div className={cn(s.menu, { [s.open]: isOpen })} role='listbox'>
        {LANGUAGE_CODES.map((language) => {
          const isSelected = language === currentLanguage;

          return (
            <button
              className={cn(s.option, { [s.selected]: isSelected })}
              type='button'
              role='option'
              aria-selected={isSelected}
              onClick={() => handleLanguageChange(language)}
              key={language}
            >
              {t(`language.${language}`)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
