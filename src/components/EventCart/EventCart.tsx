import cn from 'classnames';
import type React from 'react';

import s from './EventCart.module.scss';

interface TProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children?: React.ReactNode;
}

export default function EventCart({
  className = '',
  children,
  ...props
}: TProps) {
  return (
    <div className={cn(s.EventCart, className)} {...props}>
      {children}
    </div>
  );
}
