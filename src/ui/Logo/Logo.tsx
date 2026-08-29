import cn from 'classnames';
import LogoImg from 'img/Logo.png';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../../constants/SECTIONS_CONSTANTS';
import s from './Logo.module.scss';

export default function Logo() {
  return (
    <Link className={cn(s.link, s.Logo)} to={NAVIGATION_LINKS.MAIN}>
      <img loading={'lazy'} className={s.img} src={LogoImg} alt={'logo'} />
    </Link>
  );
}
