import type { CSSProperties, MouseEvent } from 'react';
import { useState } from 'react';

import type { TArtwork, TArtworkLocale } from '../../data/artSeries';
import CloseIcon from 'svg/close-icon.svg?react';
import s from './TypeGalleryMdl.module.scss';
import Button from '../../ui/Button';

type TProps = {
  artwork: TArtwork;
  artworkText: TArtworkLocale;
  fallbackSeriesTitle: string;
  closeLabel: string;
  onClose: () => void;
};

export default function TypeGalleryMdl({
  artwork,
  artworkText,
  fallbackSeriesTitle,
  closeLabel,
  onClose,
}: TProps) {
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });

  const handleZoomMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setZoomPosition({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div className={s.modalOverlay} role='presentation' onMouseDown={onClose}>
      <div
        className={s.modal}
        role='dialog'
        aria-modal='true'
        aria-label={artworkText.title}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <Button
          className={s.closeBtn}
          aria-label={closeLabel}
          onClick={onClose}
        >
          <CloseIcon className={s.closeIcon} />
        </Button>
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
          <img src={artwork.image} alt={artworkText.title} />
        </div>
        <div className={s.modalInfo}>
          <p>{artworkText.series ?? fallbackSeriesTitle}</p>
          <h2>{artworkText.title}</h2>
        </div>
      </div>
    </div>
  );
}
