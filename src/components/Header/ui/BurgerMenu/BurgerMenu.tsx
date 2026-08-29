import cn from 'classnames';
import type React from 'react';
import { useState } from 'react';
import s from './BurgerMenu.module.scss';
import { BurgerMenuCtx } from './BurgerMenuCtx';

interface TProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  children?: React.ReactNode;
}

export default function BurgerMenu({
  className = '',
  children,
  ...props
}: TProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <BurgerMenuCtx.Provider value={{ open, setOpen }}>
      <div className={cn(s.BurgerMenu, className)} {...props}>
        {children}
      </div>
    </BurgerMenuCtx.Provider>
  );
}
