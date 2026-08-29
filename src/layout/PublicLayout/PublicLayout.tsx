import cn from 'classnames';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import s from './PublicLayout.module.scss';

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
