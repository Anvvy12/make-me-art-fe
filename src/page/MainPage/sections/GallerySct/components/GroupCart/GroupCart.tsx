import { Button } from '@mui/material';
import cn from 'classnames';
import Img from 'components/ArtCart/sections/Img';
import type React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { trackEvent } from 'services/analytics';
import s from './GroupCart.module.scss';

interface TProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  src: string;
  count: number;
  title: string;
  type: {
    slug: string;
    title: string;
    description: string;
  };
}

export default function GroupCart({
  className = '',
  src,
  count,
  title,
  type,
  ...props
}: TProps) {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'page.main.gallery_sct.card',
  });
  const navigate = useNavigate();

  const handleClick = () => {
    trackEvent('select_content', {
      content_type: 'art_series',
      content_id: type.slug,
      item_name: type.title,
    });
    navigate(`/series/${type.slug}`, {
      state: {
        title: type.title,
        description: type.description,
      },
    });
  };

  return (
    <div className={cn(s.GroupCart, className)} {...props}>
      {/* biome-ignore lint/a11y/noStaticElementInteractions: the nested accessible button is the keyboard interaction target. */}
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: the nested accessible button is the keyboard interaction target. */}
      <div className={s.imgWrapper} onClick={handleClick}>
        <Img className={s.img} src={src} alt={t('img_alt')} />
        <Button variant='outlined' className={s.btn}>
          {t('view_btn')}
        </Button>
      </div>
      <h3 className={s.title}>{title}</h3>
      <p className={s.count}>{t('paintings_count', { count })}</p>
    </div>
  );
}
