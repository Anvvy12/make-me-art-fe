import { IconButton } from '@mui/material';
import cn from 'classnames';
import { NAVIGATION_LINKS } from 'constants/SECTIONS_CONSTANTS';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import ArrowIcon from 'svg/arrow.svg?react';
import Logo from 'ui/Logo';
import s from './Header.module.scss';
import BurgerMenu from './ui/BurgerMenu';
import LanguageSelect from './ui/LanguageSelect';

export default function Header() {
  const n = useNavigate();

  const { t } = useTranslation(undefined, { keyPrefix: 'common' });

  return (
    <section className={cn(s.Header)}>
      <div className={s.inner}>
        <IconButton className={s.backButton} onClick={() => n(-1)}>
          <ArrowIcon className={s.arrowIcon} />
        </IconButton>
        <Logo />
        <nav className={s.nav}>
          <Link className={s.link} to={NAVIGATION_LINKS.MAIN}>
            {t('nav.main')}
          </Link>
          <Link className={s.link} to={NAVIGATION_LINKS.GALLERY}>
            {t('nav.gallery')}
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
          </BurgerMenu.Menu>
        </BurgerMenu.Wrapper>
      </div>
    </section>
  );
}
