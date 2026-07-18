import React from 'react';
import cn from 'classnames';
import s from './Skeleton.module.scss';

interface TProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
}

export default function Skeleton({
  className,
  width,
  height,
  borderRadius,
}: TProps) {
  return (
    <div
      className={cn(s.Skeleton, className)}
      style={{
        width,
        height,
        borderRadius,
      }}
    />
  );
}
