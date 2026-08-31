import { IconButton } from '@mui/material';
import cn from 'classnames';
import { NAVIGATION_LINKS } from 'constants/SECTIONS_CONSTANTS';
import ContactAuthorModal from 'modals/ContactAuthorModal';
import type { TContactModalState } from 'modals/ContactAuthorModal/types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { trackContact } from 'services/analytics';
import ArrowIcon from 'svg/arrow.svg?react';
import Logo from 'ui/Logo';
import s from './Header.module.scss';
import BurgerMenu from './ui/BurgerMenu';
import LanguageSelect from './ui/LanguageSelect';

const CLOSED_CONTACT_MODAL: TContactModalState = {
  open: false,
  message: '',
  title: '',
};

export default function Header() {
  const n = useNavigate();

  const { t } = useTranslation(undefined, { keyPrefix: 'common' });

  const [contactModal, setContactModal] =
    useState<TContactModalState>(CLOSED_CONTACT_MODAL);

  const handleOpenContact = () => {
    trackContact('header_contact_form');
    setContactModal({ ...CLOSED_CONTACT_MODAL, open: true });
  };

  const handleCloseContact = () => setContactModal(CLOSED_CONTACT_MODAL);

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
          <Link className={s.link} to={NAVIGATION_LINKS.PROJECTS}>
            {t('nav.projects')}
          </Link>
        </nav>
        <div className={s.actions}>
          <button
            className={cn(s.link, s.contactLink)}
            type='button'
            onClick={handleOpenContact}
          >
            {t('contact_modal.contact_author')}
          </button>
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
              <Link className={s.link} to={NAVIGATION_LINKS.PROJECTS}>
                {t('nav.projects')}
              </Link>
            </BurgerMenu.MenuItem>
            <BurgerMenu.MenuItem onClick={handleOpenContact}>
              <span className={s.link}>
                {t('contact_modal.contact_author')}
              </span>
            </BurgerMenu.MenuItem>
          </BurgerMenu.Menu>
        </BurgerMenu.Wrapper>
      </div>

      <ContactAuthorModal isOpen={contactModal} onClose={handleCloseContact} />
    </section>
  );
}
