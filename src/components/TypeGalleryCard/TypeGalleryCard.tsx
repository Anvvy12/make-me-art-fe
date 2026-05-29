import type { TArtwork, TArtworkLocale } from '../../data/artSeries';
import { useState } from 'react';

import { Button } from '@mui/material';
import ContactAuthorModal from 'modals/ContactAuthorModal';
import s from './TypeGalleryCard.module.scss';

type TProps = {
  artwork: TArtwork;
  artworkText: TArtworkLocale;
  index: number;
  labels: {
    openArtwork: string;
    viewDetails: string;
    medium: string;
    year: string;
    size: string;
    price: string;
  };
  onOpen: (artwork: TArtwork) => void;
};

export default function TypeGalleryCard({
  artwork,
  artworkText,
  index,
  labels,
  onOpen,
}: TProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <article className={s.card}>
      <button
        className={s.imageWrapper}
        type='button'
        aria-label={`${labels.openArtwork} ${artworkText.title}`}
        onClick={() => onOpen(artwork)}
      >
        <img src={artwork.image} alt={artworkText.title} />
        <span className={s.viewHint}>{labels.viewDetails}</span>
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
            <dt>{labels.medium}</dt>
            <dd>{artworkText.medium}</dd>
          </div>
          <div>
            <dt>{labels.year}</dt>
            <dd>{artworkText.year}</dd>
          </div>
          <div>
            <dt>{labels.size}</dt>
            <dd>{artworkText.size}</dd>
          </div>
          <div>
            <dt>{labels.price}</dt>
            <dd>{artworkText.price}</dd>
          </div>
        </dl>

        <Button
          className={s.contactBtn}
          type='button'
          variant='outlined'
          onClick={() => setIsContactModalOpen(true)}
        >
          Contact with author
        </Button>
      </div>

      <ContactAuthorModal
        artworkTitle={artworkText.title}
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </article>
  );
}
