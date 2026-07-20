import React, { useState } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import InstagramIcon from 'svg/instagram-logo.svg?react';
import MailIcon from 'svg/mail-to.svg?react';
import s from './Footer.module.scss';
import Logo from 'ui/Logo';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS } from 'constants/SECTIONS_CONSTANTS';
import { IconButton } from '@mui/material';
import ContactAuthorModal from 'modals/ContactAuthorModal';
import { trackContact } from 'services/analytics';
import type { TContactModalState } from 'modals/ContactAuthorModal/types';

interface TProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  className?: string;
  children?: React.ReactNode;
}

export default function Footer({ className = '', ...props }: TProps) {
  const { t } = useTranslation(undefined, { keyPrefix: 'common.nav' });

  const [isModalOpen, setIsModalOpen] = useState<TContactModalState>({
    open: false,
    message: '',
    title: '',
  });

  const handleClose = () => {
    setIsModalOpen((prev) => {
      return { ...prev, open: false, message: '', title: '' };
    });
  };

  return (
    <div className={cn(s.Footer, className)} {...props}>
      <div className={s.inner}>
        <Logo />
        <nav className={s.navList}>
          <Link className={s.link} to={NAVIGATION_LINKS.MAIN}>
            {t('main')}
          </Link>
          <Link className={s.link} to={NAVIGATION_LINKS.GALLERY}>
            {t('gallery')}
          </Link>
        </nav>
        <div className={s.contacts}>
          <IconButton
            className={s.iconButton}
            onClick={() => {
              trackContact('contact_form');
              setIsModalOpen((prev) => ({ ...prev, open: true }));
            }}
          >
            <MailIcon className={s.svg} />
          </IconButton>
          <IconButton
            className={s.iconButton}
            component='a'
            href={
              'https://www.instagram.com/sofyromann?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
            }
            target='_blank'
            rel='noopener noreferrer'
            onClick={() => trackContact('instagram')}
          >
            <InstagramIcon className={s.svg} />
          </IconButton>
        </div>
      </div>
      <ContactAuthorModal isOpen={isModalOpen} onClose={handleClose} />
    </div>
  );
}
