import cn from 'classnames';
import type React from 'react';

import s from './Description.module.scss';

interface TProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children?: React.ReactNode;
}

export default function Description({
  className = '',
  children,
  ...props
}: TProps) {
  return (
    <div className={cn(s.Description, className)} {...props}>
      {children}
    </div>
  );
}
