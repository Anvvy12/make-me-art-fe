import cn from 'classnames';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import s from './PrivateLayout.module.scss';

export default function PrivateLayout() {
  return (
    <section className={cn(s.PrivateLayout)}>
      <Header />
      <Outlet />
    </section>
  );
}
