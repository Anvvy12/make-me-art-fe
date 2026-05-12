import cn from 'classnames';

import s from './PublicLayout.module.scss';
import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';

export default function PublicLayout() {
  return (
    <section className={cn(s.PublicLayout)}>
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}
