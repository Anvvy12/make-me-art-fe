import { useEffect, useState } from 'react';

import cn from 'classnames';

import s from './TypeGalleryPage.module.scss';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TypeGalleryCard from '../../components/TypeGalleryCard';
import { ART_SERIES_BY_SLUG, type TArtSeries } from '../../data/artSeries';
import TypeGalleryMdl from '../../modals/TypeGalleryMdl';

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
            <TypeGalleryCard
              artwork={artwork}
              artworkText={artworkText}
              index={index}
              key={artwork.id}
              labels={{
                openArtwork: t('open_artwork'),
                viewDetails: t('view_details'),
                medium: t('medium'),
                year: t('year'),
                size: t('size'),
                price: t('price'),
              }}
              onOpen={setSelectedArtwork}
            />
          );
        })}
      </div>

      {selectedArtwork && selectedArtworkText && (
        <TypeGalleryMdl
          artwork={selectedArtwork}
          artworkText={selectedArtworkText}
          closeLabel={t('close')}
          fallbackSeriesTitle={seriesText.title}
          onClose={() => setSelectedArtwork(null)}
        />
      )}
    </section>
  );
}
