import { Button } from '@mui/material';
import cn from 'classnames';
import ContactAuthorModal from 'modals/ContactAuthorModal';
import type { TContactModalState } from 'modals/ContactAuthorModal/types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { trackArtworkView, trackContact } from 'services/analytics';
import Label from 'ui/Label';
import type { TArtwork, TArtworkLocale } from '../../data/artSeries/types';
import { Skeleton } from '../../ui/Skeleton';
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
  const [isModalOpen, setIsModalOpen] = useState<TContactModalState>({
    open: false,
    message: '',
    title: '',
  });
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { t } = useTranslation(undefined, {
    keyPrefix: 'common.contact_modal',
  });
  const handleClose = () => {
    setIsModalOpen((prev) => {
      return { ...prev, open: false, message: '', title: '' };
    });
  };
  return (
    <article className={cn(s.card, { [s.sold]: artwork.isSold })}>
      <button
        className={s.imageWrapper}
        type='button'
        aria-label={`${labels.openArtwork} ${artworkText.title}`}
        onClick={() => {
          trackArtworkView({
            id: artwork.id,
            name: artworkText.title,
            price: artworkText.price,
          });
          onOpen(artwork);
        }}
      >
        {!isImageLoaded && <Skeleton className={s.skeleton} />}
        <img
          loading={'lazy'}
          src={artwork.lowImg}
          alt={artworkText.title}
          className={cn({ [s.hidden]: !isImageLoaded })}
          onLoad={() => setIsImageLoaded(true)}
        />
        <Label
          className={s.label}
          text={artworkText.label}
          color={artwork.labelColor}
        />
        <span className={s.viewHint}>{labels.viewDetails}</span>
      </button>
      <div className={s.content}>
        <div className={s.titleRow}>
          <span className={s.number}>{index + 1}</span>
          <h2>{artworkText.title}</h2>
        </div>

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
            <dd className={cn({ [s.soldPrice]: artwork.isSold })}>
              {artworkText.price}
            </dd>
          </div>
        </dl>

        <Button
          className={s.contactBtn}
          type='button'
          variant='outlined'
          size='small'
          onClick={() => {
            trackContact('artwork_contact_form');
            setIsModalOpen({
              message: t(
                artwork.isSold ? 'message_sold_default' : 'message_default',
                { artworkTitle: artworkText.title }
              ),
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
