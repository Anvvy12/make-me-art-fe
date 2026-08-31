import cn from 'classnames';
import type React from 'react';

import s from './Label.module.scss';
import type { TLabelColor } from './types';

interface TProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  className?: string;
  text?: string;
  color?: TLabelColor;
}

export default function Label({
  className = '',
  text,
  color = 'accent',
  ...props
}: TProps) {
  if (!text) return null;

  return (
    <span className={cn(s.Label, s[color], className)} {...props}>
      {text}
    </span>
  );
}
