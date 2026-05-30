import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import studioFloorColor from 'assets/lowImg/exhibition/smile_photo.webp';
import galleryInstallation from 'assets/lowImg/exhibition/photo1_sct1.webp';
import studioFloorMono from 'assets/lowImg/exhibition/krov-sohne.webp';

import s from './ExhibitionSct.module.scss';

export default function ExhibitionSct() {
  const { t } = useTranslation();

  const statements = t('page.main.exhibition_sct.statements', {
    returnObjects: true,
  }) as {
    title: string;
    text: string;
  }[];

  return (
    <section className={cn(s.ExhibitionSct)} aria-labelledby='exhibition-title'>
      <div className={s.header}>
        <p className={s.eyebrow}>{t('page.main.exhibition_sct.eyebrow')}</p>

        <h2 id='exhibition-title'>{t('page.main.exhibition_sct.title')}</h2>
      </div>

      <div className={s.introGrid}>
        <div className={s.lead}>
          <p>{t('page.main.exhibition_sct.lead')}</p>
        </div>

        <div
          className={s.photoStack}
          aria-label={t('page.main.exhibition_sct.photos_aria')}
        >
          <figure className={cn(s.photo, s.photoLarge)}>
            <img
              loading={'lazy'}
              src={galleryInstallation}
              alt={t('page.main.exhibition_sct.gallery_alt')}
            />
          </figure>

          <figure className={cn(s.photo, s.photoSmall)}>
            <img
              loading={'lazy'}
              src={studioFloorColor}
              alt={t('page.main.exhibition_sct.studio_alt')}
            />
          </figure>
        </div>
      </div>

      <div className={s.statementGrid}>
        {statements.map((item) => (
          <article className={s.statement} key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className={s.finalBlock}>
        <figure className={s.monoPhoto}>
          <img
            loading={'lazy'}
            src={studioFloorMono}
            alt={t('page.main.exhibition_sct.mono_alt')}
          />
        </figure>

        <div className={s.finalText}>
          <span>{t('page.main.exhibition_sct.final.label')}</span>

          <h3>{t('page.main.exhibition_sct.final.title')}</h3>

          <p>{t('page.main.exhibition_sct.final.text_1')}</p>

          <p>{t('page.main.exhibition_sct.final.text_2')}</p>
        </div>
      </div>
    </section>
  );
}
