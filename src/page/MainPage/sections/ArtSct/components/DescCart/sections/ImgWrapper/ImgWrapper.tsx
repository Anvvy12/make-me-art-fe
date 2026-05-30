import React from 'react';

import cn from 'classnames';

import s from './ImgWrapper.module.scss';

interface TProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  className?: string;
  src: string;
  desc?: string;
}

export default function ImgWrapper({
  className = '',
  src,
  desc,
  ...props
}: TProps) {
  return (
    <div className={cn(s.ImgWrapper, className)} {...props}>
      <img
        loading={'lazy'}
        src={src}
        className={s.img}
        alt={'Description Art'}
      />
      <p className={s.desc}>{desc}</p>
    </div>
  );
}
