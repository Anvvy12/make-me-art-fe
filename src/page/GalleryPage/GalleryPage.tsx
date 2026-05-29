import { useEffect, useState } from 'react';

import cn from 'classnames';
import s from './GalleryPage.module.scss';
import { useTranslation } from 'react-i18next';
import { ART_SERIES, type TArtSeries } from '../../data/artSeries';
import TypeGalleryCard from '../../components/TypeGalleryCard';
import TypeGalleryMdl from '../../modals/TypeGalleryMdl';

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
          return (
            <TypeGalleryCard
              key={`${series.slug}-${artwork.id}`}
              artwork={artwork}
              artworkText={artworkText}
              index={ALL_ARTWORKS.findIndex(
                (item) => item.artwork.id === artwork.id
              )}
              labels={{
                openArtwork: t('open_artwork'),
                viewDetails: t('view_details'),
                medium: t('medium'),
                year: t('year'),
                size: t('size'),
                price: t('price'),
              }}
              onOpen={() => setSelectedArtwork({ artwork, series })}
            />
          );
        })}
      </div>

      {selectedArtwork && selectedArtworkText && selectedSeriesText && (
        <TypeGalleryMdl
          artwork={selectedArtwork.artwork}
          artworkText={selectedArtworkText}
          fallbackSeriesTitle={selectedSeriesText.title}
          onClose={() => setSelectedArtwork(null)}
        />
      )}
    </section>
  );
}
