import cn from 'classnames';
import Hamburger from 'hamburger-react';
import type React from 'react';
import { useBurgerMenuCtx } from '../../useBurgerMenuCtx';
import s from './MenuBtn.module.scss';

interface TProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  icon?: React.ReactNode;
}

export default function MenuBtn({ className = '', icon, ...props }: TProps) {
  const { setOpen, open } = useBurgerMenuCtx();

  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className={cn(s.MenuBtn, className)}
      {...props}
    >
      {icon ?? <Hamburger toggled={open} />}
    </button>
  );
}
