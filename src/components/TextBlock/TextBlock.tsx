import React from 'react';

import cn from 'classnames';

import s from './TextBlock.module.scss';

interface TProps extends React.DetailedHTMLProps<
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
