import type { TArtwork, TArtworkLocale } from '../../data/artSeries';
import { useState } from 'react';

import { Button } from '@mui/material';
import ContactAuthorModal from 'modals/ContactAuthorModal';
import { useTranslation } from 'react-i18next';
import s from './TypeGalleryCard.module.scss';

type TProps = {
  artwork: TArtwork;
  artworkText: TArtworkLocale;
  index: number;
  labels: {
    openArtwork: string;
    viewDetails: string;
    materials: string;
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
  const [isModalOpen, setIsModalOpen] = useState<{
    open: boolean;
    message: string;
    title: string;
  }>({
    open: false,
    message: '',
    title: '',
  });
  const { t } = useTranslation(undefined, {
    keyPrefix: 'common.contact_modal',
  });
  const handleClose = () => {
    setIsModalOpen((prev) => {
      return { ...prev, open: false, message: '', title: '' };
    });
  };
  return (
    <article className={s.card}>
      <button
        className={s.imageWrapper}
        type='button'
        aria-label={`${labels.openArtwork} ${artworkText.title}`}
        onClick={() => onOpen(artwork)}
      >
        <img loading={'lazy'} src={artwork.lowImg} alt={artworkText.title} />
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
            <dt>{labels.materials}</dt>
            <dd>{artworkText.materials}</dd>
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
          size='small'
          onClick={() => {
            setIsModalOpen({
              message: t('message_default', {
                artworkTitle: artworkText.title,
              }),
              title: artworkText.title,
              open: true,
            });
          }}
        >
          {t('contact_author')}
        </Button>
      </div>

      <ContactAuthorModal isOpen={isModalOpen} onClose={handleClose} />
    </article>
  );
}
