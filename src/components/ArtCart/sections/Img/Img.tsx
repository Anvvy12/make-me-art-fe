import React from 'react';

import cn from 'classnames';

import s from './Img.module.scss';

interface TProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  children?: React.ReactNode;
  src?: string;
}

export default function Img({ className = '', src, ...props }: TProps) {
  return (
    <div className={s.wrapper} {...props}>
      <img
        loading={'lazy'}
        src={src}
        className={cn(s.Img, className)}
        {...props}
        alt={'alt'}
      />
    </div>
  );
}
