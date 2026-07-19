import { CSSProperties, useState } from 'react';

import { IconButton } from '@mui/material';
import type { TArtwork, TArtworkLocale } from '../../data/artSeries/types';
import CloseIcon from 'svg/close-icon.svg?react';
import s from './DetailsMdl.module.scss';
import useZoom from 'modals/DetailsMdl/hooks/useZoom';
import { Skeleton } from '../../ui/Skeleton';
import cn from 'classnames';

type TProps = {
  artwork: TArtwork;
  artworkText: TArtworkLocale;
  fallbackSeriesTitle: string;
  closeLabel?: string;
  onClose: () => void;
};

export default function DetailsMdl({
  artwork,
  artworkText,
  fallbackSeriesTitle,
  closeLabel = 'Close',
  onClose,
}: TProps) {
  const {
    handleToggleZoom,
    handleTouchMove,
    handleMouseMove,
    zoomPosition,
    isZoomed,
  } = useZoom();

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className={s.modalOverlay} role='presentation' onMouseDown={onClose}>
      <div
        className={s.modal}
        role='dialog'
        aria-modal='true'
        aria-label={artworkText.title}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <IconButton
          className={s.closeBtn}
          type='button'
          aria-label={closeLabel}
          onClick={onClose}
        >
          <CloseIcon className={s.closeIcon} />
        </IconButton>

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
          {!isImageLoaded && <Skeleton className={s.skeleton} />}
          <img
            className={cn(s.img, { [s.hidden]: !isImageLoaded })}
            loading={'lazy'}
            src={artwork.image}
            alt={artworkText.title}
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>

        <div className={s.modalInfo}>
          <p>{fallbackSeriesTitle}</p>
          <h2>{artworkText.title}</h2>
        </div>
      </div>
    </div>
  );
}
