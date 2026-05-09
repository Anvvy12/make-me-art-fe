import LogoImg from 'img/Logo.png';

import s from './Logo.module.scss';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../../constants/SECTIONS_CONSTANTS';
import cn from 'classnames';

export default function Logo() {
  return (
    <Link className={cn(s.link, s.Logo)} to={NAVIGATION_LINKS.MAIN}>
      <img className={s.img} src={LogoImg} alt={'logo'} />
    </Link>
  );
}
