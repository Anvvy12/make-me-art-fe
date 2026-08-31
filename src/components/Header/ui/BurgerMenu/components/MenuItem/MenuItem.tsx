import cn from 'classnames';
import { useBurgerMenuCtx } from 'components/Header/ui/BurgerMenu/useBurgerMenuCtx';
import type React from 'react';
import s from './MenuItem.module.scss';

interface TProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  children?: React.ReactNode;
}

export default function MenuItem({
  className = '',
  children,
  onClick,
  ...props
}: TProps) {
  const { setOpen } = useBurgerMenuCtx();

  return (
    <button
      className={cn(s.MenuItem, className)}
      {...props}
      onClick={(event) => {
        setOpen(false);
        onClick?.(event);
      }}
    >
      {children}
    </button>
  );
}
