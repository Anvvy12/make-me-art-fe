import cn from 'classnames';
import s from './Header.module.scss';
import Logo from 'ui/Logo';
import BurgerMenu from './ui/BurgerMenu';
import { SECTIONS_CONSTANTS } from 'constants/SECTIONS_CONSTANTS';
import { useTranslation } from 'react-i18next';
import { LOCAL_STORAGE_LANGUAGE_KEY } from 'constants/LANGUAGES_CONSTANTS';
import { LANGUAGE_CODES, type TLanguageCode } from '../../translation/i18';

export default function Header() {
  const { t, i18n } = useTranslation(undefined, { keyPrefix: 'common' });

  const handleLanguageChange = (language: TLanguageCode) => {
    localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, language);
    void i18n.changeLanguage(language);
  };

  const renderLanguageSelect = () => (
    <div className={s.languageSelect}>
      <span className={s.languageLabel}>{t('language.label')}</span>
      <div
        className={s.languageOptions}
        role='group'
        aria-label={t('language.label')}
      >
        {LANGUAGE_CODES.map((language) => {
          const isActive = i18n.language.startsWith(language);

          return (
            <button
              className={cn(s.languageOption, {
                [s.activeLanguage]: isActive,
              })}
              type='button'
              aria-pressed={isActive}
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

  return (
    <section className={cn(s.Header)}>
      <div className={s.inner}>
        <Logo />
        <nav className={s.nav}>
          <a className={s.link} href={SECTIONS_CONSTANTS.MAIN_SCT}>
            {t('nav.main')}
          </a>
          <a className={s.link} href={SECTIONS_CONSTANTS.GALLERY_SCT}>
            {t('nav.gallery')}
          </a>
          <a className={s.link} href={SECTIONS_CONSTANTS.ABOUT_SCT}>
            {t('nav.about')}
          </a>
        </nav>
        <div className={s.actions}>{renderLanguageSelect()}</div>
        <BurgerMenu.Wrapper className={s.burgerMenu}>
          <BurgerMenu.MenuBtn />
          <BurgerMenu.Menu>
            <BurgerMenu.MenuItem>
              <a className={s.link} href={SECTIONS_CONSTANTS.MAIN_SCT}>
                {t('nav.main')}
              </a>
            </BurgerMenu.MenuItem>
            <BurgerMenu.MenuItem>
              <a className={s.link} href={SECTIONS_CONSTANTS.GALLERY_SCT}>
                {t('nav.gallery')}
              </a>
            </BurgerMenu.MenuItem>
            <BurgerMenu.MenuItem>
              <a className={s.link} href={SECTIONS_CONSTANTS.ABOUT_SCT}>
                {t('nav.about')}
              </a>
            </BurgerMenu.MenuItem>
            <BurgerMenu.MenuItem>{renderLanguageSelect()}</BurgerMenu.MenuItem>
          </BurgerMenu.Menu>
        </BurgerMenu.Wrapper>
      </div>
    </section>
  );
}
