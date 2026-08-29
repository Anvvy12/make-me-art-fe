import cn from 'classnames';
import type React from 'react';

import s from './Title.module.scss';

interface TProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children?: React.ReactNode;
}

export default function Title({ className = '', children, ...props }: TProps) {
  return (
    <div className={cn(s.Title, className)} {...props}>
      {children}
    </div>
  );
}
