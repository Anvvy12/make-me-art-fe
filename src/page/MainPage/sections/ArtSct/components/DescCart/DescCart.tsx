import cn from 'classnames';
import type React from 'react';

import s from './DescCart.module.scss';

interface TProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children?: React.ReactNode;
  descTemplate?: 'art-left' | 'art-right';
}

export default function DescCart({
  className = '',
  children,
  descTemplate = 'art-left',
  ...props
}: TProps) {
  return (
    <div className={cn(s.DescCart, s[descTemplate], className)} {...props}>
      {children}
    </div>
  );
}
