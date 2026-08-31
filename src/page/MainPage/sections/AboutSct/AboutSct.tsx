import ArtistImg from 'assets/lowImg/main-photo.webp';
import cn from 'classnames';
import Img from 'components/ArtCart/sections/Img';
import { useTranslation } from 'react-i18next';
import s from './AboutSct.module.scss';

export default function AboutSct() {
  const { t } = useTranslation(undefined, { keyPrefix: 'page.main.about_sct' });

  return (
    <section className={cn(s.AboutSct)} id='about-sct'>
      <div className={s.imgWrapper}>
        <Img className={s.img} src={ArtistImg} alt={t('img_alt')} />
      </div>
      <div className={s.description}>
        <h3>{t('name')}</h3>
        <p className={s.lead}>{t('description')}</p>
        <p className={s.bio}>{t('bio')}</p>
      </div>
    </section>
  );
}
