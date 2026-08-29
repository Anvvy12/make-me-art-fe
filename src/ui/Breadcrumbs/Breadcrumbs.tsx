import cn from 'classnames';
import React, { Children } from 'react';
import Arrow from '../../assets/svg/arrow.svg?react';

import s from './Breadcrumbs.module.scss';

interface TProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children?: React.ReactNode;
}

export default function Breadcrumbs({
  className = '',
  children,
  ...props
}: TProps) {
  const childrenArray = Children.toArray(children);

  return (
    <div className={cn(s.Breadcrumbs, className)} {...props}>
      {childrenArray.map((child, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: breadcrumbs are static, ordered children without independent state.
        <React.Fragment key={index}>
          {child}
          {index < childrenArray.length - 1 && <Arrow width={24} />}
        </React.Fragment>
      ))}
    </div>
  );
}
