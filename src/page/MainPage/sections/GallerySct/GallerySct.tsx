import cn from 'classnames';

import s from './GallerySct.module.scss';
import { useTranslation } from 'react-i18next';
import { ART_TITLES, type TArtSeries } from '../../../../data/artSeries';
import { SECTIONS_CONSTANTS } from 'constants/SECTIONS_CONSTANTS';
import GroupCart from './components/GroupCart';

type TLocale = keyof TArtSeries['translations'];

function getLocale(language: string): TLocale {
  if (language.startsWith('ua')) return 'ua';
  if (language.startsWith('es')) return 'es';
  return 'en';
}

export default function GallerySct() {
  const { t, i18n } = useTranslation(undefined, {
    keyPrefix: 'page.main.gallery_sct',
  });
  const locale = getLocale(i18n.language);

  return (
    <section
      className={cn(s.GallerySct)}
      id={SECTIONS_CONSTANTS.GALLERY_SCT.slice(1)}
    >
      <h2 className={s.sectionTitle}>{t('title')}</h2>
      <div className={s.galleryContent}>
        {ART_TITLES.map((series) => (
          <GroupCart
            key={series.slug}
            src={series.cover}
            count={1}
            title={series.translations[locale].title}
            type={{
              slug: series.slug,
              title: series.translations[locale].title,
              description: series.translations[locale].description,
            }}
          />
        ))}
      </div>
    </section>
  );
}
