import cn from 'classnames';

import s from './MainPage.module.scss';
import GallerySct from './sections/GallerySct';
import AboutSct from './sections/AboutSct';
import ArtSct from './sections/ArtSct';
import { SECTIONS_CONSTANTS } from 'constants/SECTIONS_CONSTANTS';

export default function MainPage() {
  return (
    <main className={cn(s.MainPage)} id={SECTIONS_CONSTANTS.MAIN_SCT.slice(1)}>
      <AboutSct />
      <GallerySct />
      <ArtSct />
    </main>
  );
}
