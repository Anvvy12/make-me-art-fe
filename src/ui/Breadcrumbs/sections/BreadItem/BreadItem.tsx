import cn from 'classnames';
import type React from 'react';
import s from './BreadItem.module.scss';

interface TProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  className?: string;
  children?: React.ReactNode;
}

export default function BreadItem({ className, children, ...props }: TProps) {
  return (
    <a className={cn(s.BreadItem, className)} {...props}>
      {children}
    </a>
  );
}
