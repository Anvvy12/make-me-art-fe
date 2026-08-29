import cn from 'classnames';
import type React from 'react';

import s from './Button.module.scss';

interface TProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  variant?: 'outline' | 'primary';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  className = '',
  variant = 'primary',
  children,
  size = 'md',
  ...props
}: TProps) {
  return (
    <button className={cn(s.Button, s[variant], s[size], className)} {...props}>
      {children}
    </button>
  );
}
