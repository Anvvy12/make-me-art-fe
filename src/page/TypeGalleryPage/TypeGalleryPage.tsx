import cn from 'classnames';

import s from './TypeGalleryPage.module.scss';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ART_SERIES_BY_SLUG, type TArtSeries } from '../../data/artSeries';

type TLocale = keyof TArtSeries['translations'];

function getLocale(language: string): TLocale {
  if (language.startsWith('ua')) return 'ua';
  if (language.startsWith('es')) return 'es';
  return 'en';
}

export default function TypeGalleryPage() {
  const { typeName = '' } = useParams();
  const { t, i18n } = useTranslation(undefined, {
    keyPrefix: 'page.type_gallery',
  });
  const locale = getLocale(i18n.language);
  const series = ART_SERIES_BY_SLUG[typeName];

  if (!series) {
    return (
      <section className={cn(s.TypeGalleryPage)}>
        <div className={s.header}>
          <h1>{t('not_found_title')}</h1>
          <p>{t('not_found_desc')}</p>
        </div>
      </section>
    );
  }

  const seriesText = series.translations[locale];

  return (
    <section className={cn(s.TypeGalleryPage)}>
      <div className={s.header}>
        <p className={s.eyebrow}>
          {series.artworks.length} {t('works')}
        </p>
        <h1>{seriesText.title}</h1>
        <p className={s.description}>{seriesText.description}</p>
        <p className={s.deliveryNote}>{seriesText.deliveryNote}</p>
      </div>

      <div className={s.grid}>
        {series.artworks.map((artwork, index) => {
          const artworkText = artwork.translations[locale];

          return (
            <article className={s.card} key={artwork.id}>
              <div className={s.imageWrapper}>
                <img src={artwork.image} alt={artworkText.title} />
              </div>
              <div className={s.content}>
                <div className={s.titleRow}>
                  <span className={s.number}>{index + 1}</span>
                  <h2>{artworkText.title}</h2>
                </div>
                {artworkText.series && (
                  <p className={s.seriesLabel}>{artworkText.series}</p>
                )}
                <dl className={s.metaList}>
                  <div>
                    <dt>{t('medium')}</dt>
                    <dd>{artworkText.medium}</dd>
                  </div>
                  <div>
                    <dt>{t('year')}</dt>
                    <dd>{artworkText.year}</dd>
                  </div>
                  <div>
                    <dt>{t('size')}</dt>
                    <dd>{artworkText.size}</dd>
                  </div>
                  <div>
                    <dt>{t('price')}</dt>
                    <dd>{artworkText.price}</dd>
                  </div>
                </dl>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}