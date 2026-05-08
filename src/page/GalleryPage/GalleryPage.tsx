import cn from 'classnames';

import s from './GalleryPage.module.scss';
import { useTranslation } from 'react-i18next';
import { ART_SERIES, type TArtSeries } from '../../data/artSeries';

type TLocale = keyof TArtSeries['translations'];

type TGalleryArtwork = {
  artwork: TArtSeries['artworks'][number];
  series: TArtSeries;
};

function getLocale(language: string): TLocale {
  if (language.startsWith('ua')) return 'ua';
  if (language.startsWith('es')) return 'es';
  return 'en';
}

const ALL_ARTWORKS: TGalleryArtwork[] = ART_SERIES.flatMap((series) =>
  series.artworks.map((artwork) => ({ artwork, series }))
);

export default function GalleryPage() {
  const { t, i18n } = useTranslation(undefined, { keyPrefix: 'page.gallery' });
  const locale = getLocale(i18n.language);

  return (
    <section className={cn(s.GalleryPage)}>
      <div className={s.header}>
        <p className={s.eyebrow}>
          {ALL_ARTWORKS.length} {t('works')}
        </p>
        <h1>{t('title')}</h1>
      </div>

      <div className={s.grid}>
        {ALL_ARTWORKS.map(({ artwork, series }) => {
          const artworkText = artwork.translations[locale];
          const seriesText = series.translations[locale];

          return (
            <article className={s.card} key={`${series.slug}-${artwork.id}`}>
              <div className={s.imageWrapper}>
                <img src={artwork.image} alt={artworkText.title} />
              </div>
              <div className={s.content}>
                <div className={s.heading}>
                  <p className={s.series}>
                    {artworkText.series ?? seriesText.title}
                  </p>
                  <h2>{artworkText.title}</h2>
                </div>
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
