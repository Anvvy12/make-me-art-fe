import type { CSSProperties, MouseEvent } from 'react';
import { useEffect, useState } from 'react';

import cn from 'classnames';

import s from './TypeGalleryPage.module.scss';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ART_SERIES_BY_SLUG, type TArtSeries } from '../../data/artSeries';

type TLocale = keyof TArtSeries['translations'];
type TArtwork = TArtSeries['artworks'][number];

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
  const [selectedArtwork, setSelectedArtwork] = useState<TArtwork | null>(null);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const locale = getLocale(i18n.language);
  const series = ART_SERIES_BY_SLUG[typeName];

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
  const selectedArtworkText = selectedArtwork?.translations[locale];

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
              <button
                className={s.imageWrapper}
                type='button'
                aria-label={`${t('open_artwork')} ${artworkText.title}`}
                onClick={() => setSelectedArtwork(artwork)}
              >
                <img src={artwork.image} alt={artworkText.title} />
                <span className={s.viewHint}>{t('view_details')}</span>
              </button>
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

      {selectedArtwork && selectedArtworkText && (
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
                src={selectedArtwork.image}
                alt={selectedArtworkText.title}
              />
            </div>
            <div className={s.modalInfo}>
              <p>{selectedArtworkText.series ?? seriesText.title}</p>
              <h2>{selectedArtworkText.title}</h2>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
