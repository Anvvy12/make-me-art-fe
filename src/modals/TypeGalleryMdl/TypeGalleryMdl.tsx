import type { CSSProperties, MouseEvent, TouchEvent } from 'react';
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
  const [zoomPosition, setZoomPosition] = useState({
    x: 50,
    y: 50,
  });

  const [isZoomed, setIsZoomed] = useState(false);

  const updateZoomPosition = (
    clientX: number,
    clientY: number,
    rect: DOMRect
  ) => {
    setZoomPosition({
      x: ((clientX - rect.left) / rect.width) * 100,
      y: ((clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth <= 768) return;

    const rect = event.currentTarget.getBoundingClientRect();

    updateZoomPosition(event.clientX, event.clientY, rect);
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (!isZoomed) return;

    const touch = event.touches[0];

    const rect = event.currentTarget.getBoundingClientRect();

    updateZoomPosition(touch.clientX, touch.clientY, rect);
  };

  const handleToggleZoom = () => {
    if (window.innerWidth > 768) return;

    setIsZoomed((prev) => !prev);
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
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onClick={handleToggleZoom}
          data-zoomed={isZoomed}
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
