import { IconButton } from '@mui/material';
import cn from 'classnames';
import useZoom from 'modals/DetailsMdl/hooks/useZoom';
import { type CSSProperties, useState } from 'react';
import CloseIcon from 'svg/close-icon.svg?react';
import type { TArtwork, TArtworkLocale } from '../../data/artSeries/types';
import { Skeleton } from '../../ui/Skeleton';
import s from './DetailsMdl.module.scss';

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
    // biome-ignore lint/a11y/noStaticElementInteractions: backdrop dismissal intentionally uses pointer interaction; the dialog has a dedicated accessible close button.
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

        {/* biome-ignore lint/a11y/noStaticElementInteractions: image zoom is an optional pointer enhancement and is not required to access the artwork. */}
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: image zoom is an optional pointer enhancement and is not required to access the artwork. */}
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
