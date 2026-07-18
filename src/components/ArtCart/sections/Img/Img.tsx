import React, { useState } from 'react';

import cn from 'classnames';

import { Skeleton } from 'ui/Skeleton';

import s from './Img.module.scss';

interface TProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  children?: React.ReactNode;
  src?: string;
}

export default function Img({ className = '', src, ...props }: TProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={s.wrapper} {...props}>
      {!isLoaded && <Skeleton className={s.skeleton} />}
      <img
        loading={'lazy'}
        src={src}
        className={cn(s.Img, className, { [s.hidden]: !isLoaded })}
        {...props}
        alt={'alt'}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
