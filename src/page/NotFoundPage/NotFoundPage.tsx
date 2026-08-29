import { Button } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import s from './NotFoundPage.module.scss';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const { t } = useTranslation(undefined, {
    keyPrefix: 'page.not_found',
  });

  return (
    <>
      <Helmet>
        <title>Page Not Found | Roman Sophie</title>

        <meta
          name='description'
          content='The page you are looking for could not be found.'
        />
      </Helmet>
      <section className={s.NotFoundPage}>
        <p className={s.code}>404</p>
        <h2 className={s.title}>{t('title')}</h2>
        <p className={s.description}>{t('description')}</p>
        <Button onClick={() => navigate('/')}>{t('home_btn')}</Button>
      </section>
    </>
  );
}
