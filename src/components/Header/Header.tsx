import cn from 'classnames';
import s from './Header.module.scss';
import Logo from 'ui/Logo';
import BurgerMenu from './ui/BurgerMenu';
import { NAVIGATION_LINKS } from 'constants/SECTIONS_CONSTANTS';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSelect from './ui/LanguageSelect';

export default function Header() {
  const { t } = useTranslation(undefined, { keyPrefix: 'common' });

  return (
    <section className={cn(s.Header)}>
      <div className={s.inner}>
        <Logo />
        <nav className={s.nav}>
          <Link className={s.link} to={NAVIGATION_LINKS.MAIN}>
            {t('nav.main')}
          </Link>
          <Link className={s.link} to={NAVIGATION_LINKS.GALLERY}>
            {t('nav.gallery')}
          </Link>
          <Link className={s.link} to={NAVIGATION_LINKS.ABOUT}>
            {t('nav.about')}
          </Link>
        </nav>
        <div className={s.actions}>
          <LanguageSelect />
        </div>
        <BurgerMenu.Wrapper className={s.burgerMenu}>
          <BurgerMenu.MenuBtn />
          <BurgerMenu.Menu>
            <BurgerMenu.MenuItem>
              <Link className={s.link} to={NAVIGATION_LINKS.MAIN}>
                {t('nav.main')}
              </Link>
            </BurgerMenu.MenuItem>
            <BurgerMenu.MenuItem>
              <Link className={s.link} to={NAVIGATION_LINKS.GALLERY}>
                {t('nav.gallery')}
              </Link>
            </BurgerMenu.MenuItem>
            <BurgerMenu.MenuItem>
              <Link className={s.link} to={NAVIGATION_LINKS.ABOUT}>
                {t('nav.about')}
              </Link>
            </BurgerMenu.MenuItem>
          </BurgerMenu.Menu>
        </BurgerMenu.Wrapper>
      </div>
    </section>
  );
}
