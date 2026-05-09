import React from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import s from './Footer.module.scss';
import Logo from 'ui/Logo';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS } from 'constants/SECTIONS_CONSTANTS';

interface TProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  className?: string;
  children?: React.ReactNode;
}

export default function Footer({ className = '', ...props }: TProps) {
  const { t } = useTranslation(undefined, { keyPrefix: 'common.nav' });

  return (
    <div className={cn(s.Footer, className)} {...props}>
      <Logo />
      <nav className={s.navList}>
        <Link className={s.link} to={NAVIGATION_LINKS.MAIN}>
          {t('main')}
        </Link>
        <Link className={s.link} to={NAVIGATION_LINKS.GALLERY}>
          {t('gallery')}
        </Link>
        <Link className={s.link} to={NAVIGATION_LINKS.ABOUT}>
          {t('about')}
        </Link>
      </nav>
      <a href={'mailTo:Sofyreign22@gmail.com'}>Sofyreign22@gmail.com</a>
    </div>
  );
}
