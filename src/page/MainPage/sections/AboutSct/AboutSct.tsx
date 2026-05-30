import cn from 'classnames';
import ArtistImg from 'assets/lowImg/main-photo.webp';
import s from './AboutSct.module.scss';
import { useTranslation } from 'react-i18next';

export default function AboutSct() {
  const { t } = useTranslation(undefined, { keyPrefix: 'page.main.about_sct' });

  return (
    <section className={cn(s.AboutSct)} id='about-sct'>
      <div className={s.imgWrapper}>
        <img className={s.img} src={ArtistImg} alt={t('img_alt')} />
      </div>
      <div className={s.description}>
        <h3>{t('name')}</h3>
        <p>{t('description')}</p>
      </div>
    </section>
  );
}
