import cn from 'classnames';
import TextBlock from 'components/TextBlock';
import DetailsMdl from 'modals/DetailsMdl';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { trackGalleryView } from 'services/analytics';
import TypeGalleryCard from '../../components/TypeGalleryCard';
import { SERIES_SEO } from '../../constants/SEO';
import { ART_TITLES, ARTWORKS_BY_SERIES } from '../../data/artSeries';
import type { TArtLocale, TArtwork } from '../../data/artSeries/types';
import s from './SeriesGalleryPage.module.scss';

function getLocale(language: string): TArtLocale {
  if (language.startsWith('ua')) return 'ua';
  if (language.startsWith('es')) return 'es';
  return 'en';
}

export default function SeriesGalleryPage() {
  const { seriesName = '' } = useParams();

  const { t, i18n } = useTranslation(undefined, {
    keyPrefix: 'page.type_gallery',
  });

  const seo = Object.hasOwn(SERIES_SEO, seriesName)
    ? SERIES_SEO[seriesName as keyof typeof SERIES_SEO]
    : undefined;
  const [selectedArtwork, setSelectedArtwork] = useState<TArtwork | null>(null);

  const locale = getLocale(i18n.language);

  const series = ART_TITLES.find((item) => item.slug === seriesName);

  const artworks = ARTWORKS_BY_SERIES[seriesName];

  useEffect(() => {
    if (series && artworks) {
      trackGalleryView(series.slug, artworks.length);
    }
  }, [series, artworks]);

  if (!series || !artworks) {
    return (
      <section className={cn(s.SeriesGalleryPage)}>
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
    <>
      <Helmet>
        <title>{seo?.title ?? 'Roman Sophie'}</title>

        <meta
          name='description'
          content={seo?.description ?? 'Contemporary artworks by Roman Sophie.'}
        />
      </Helmet>
      <section className={cn(s.SeriesGalleryPage)}>
        <div className={s.header}>
          <p className={s.eyebrow}>
            {artworks.length} {t('works')}
          </p>

          <h1>{seriesText.title}</h1>

          <p className={s.description}>{seriesText.description}</p>

          <TextBlock>
            <p className={s.deliveryNote}>{t('common.not_include_delivery')}</p>
          </TextBlock>
        </div>

        <div className={s.grid}>
          {artworks.map((artwork, index) => {
            const artworkText = artwork.translations[locale];

            return (
              <TypeGalleryCard
                key={artwork.id}
                artwork={artwork}
                artworkText={artworkText}
                index={index}
                labels={{
                  openArtwork: t('open_artwork'),
                  viewDetails: t('view_details'),
                  materials: t('materials'),
                  year: t('year'),
                  size: t('size'),
                  price: t('price'),
                }}
                onOpen={() => setSelectedArtwork(artwork)}
              />
            );
          })}
        </div>

        {selectedArtwork && selectedArtworkText && (
          <DetailsMdl
            artwork={selectedArtwork}
            artworkText={selectedArtworkText}
            closeLabel={t('close')}
            fallbackSeriesTitle={seriesText.title}
            onClose={() => setSelectedArtwork(null)}
          />
        )}
      </section>
    </>
  );
}
