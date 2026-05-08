import type { CSSProperties, MouseEvent } from 'react';
import { useEffect, useState } from 'react';

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
  const [selectedArtwork, setSelectedArtwork] =
    useState<TGalleryArtwork | null>(null);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const locale = getLocale(i18n.language);

  useEffect(() => {
    if (!selectedArtwork) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedArtwork(null);
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedArtwork]);

  const handleZoomMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setZoomPosition({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  const selectedArtworkText = selectedArtwork?.artwork.translations[locale];
  const selectedSeriesText = selectedArtwork?.series.translations[locale];

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
              <button
                className={s.imageWrapper}
                type='button'
                aria-label={`${t('open_artwork')} ${artworkText.title}`}
                onClick={() => setSelectedArtwork({ artwork, series })}
              >
                <img src={artwork.image} alt={artworkText.title} />
                <span className={s.viewHint}>{t('view_details')}</span>
              </button>
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

      {selectedArtwork && selectedArtworkText && selectedSeriesText && (
        <div
          className={s.modalOverlay}
          role='presentation'
          onMouseDown={() => setSelectedArtwork(null)}
        >
          <div
            className={s.modal}
            role='dialog'
            aria-modal='true'
            aria-label={selectedArtworkText.title}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className={s.closeBtn}
              type='button'
              aria-label={t('close')}
              onClick={() => setSelectedArtwork(null)}
            >
              x
            </button>
            <div
              className={s.zoomArea}
              style={
                {
                  '--zoom-x': `${zoomPosition.x}%`,
                  '--zoom-y': `${zoomPosition.y}%`,
                } as CSSProperties
              }
              onMouseMove={handleZoomMove}
            >
              <img
                src={selectedArtwork.artwork.image}
                alt={selectedArtworkText.title}
              />
            </div>
            <div className={s.modalInfo}>
              <p>{selectedArtworkText.series ?? selectedSeriesText.title}</p>
              <h2>{selectedArtworkText.title}</h2>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
