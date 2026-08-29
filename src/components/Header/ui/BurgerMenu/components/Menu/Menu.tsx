import cn from 'classnames';
import type React from 'react';
import { useBurgerMenuCtx } from '../../useBurgerMenuCtx';
import s from './Menu.module.scss';

interface TProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children?: React.ReactNode;
}

export default function Menu({ className = '', children, ...props }: TProps) {
  const { open } = useBurgerMenuCtx();

  return (
    <div className={cn(s.Menu, { [s.open]: open }, className)} {...props}>
      {children}
    </div>
  );
}
