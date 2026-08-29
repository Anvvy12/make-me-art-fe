import cn from 'classnames';
import type React from 'react';

import s from './TextBlock.module.scss';

interface TProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children?: React.ReactNode;
}

export default function TextBlock({
  className = '',
  children,
  ...props
}: TProps) {
  return (
    <div className={cn(s.TextBlock, className)} {...props}>
      {children}
    </div>
  );
}
