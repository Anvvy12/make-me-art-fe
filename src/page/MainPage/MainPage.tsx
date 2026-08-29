import cn from 'classnames';
import { SECTIONS_CONSTANTS } from 'constants/SECTIONS_CONSTANTS';
import { Helmet } from 'react-helmet-async';
import s from './MainPage.module.scss';
import AboutSct from './sections/AboutSct';
import ArtSct from './sections/ArtSct';
import ExhibitionSct from './sections/ExhibitionSct';
import GallerySct from './sections/GallerySct';

export default function MainPage() {
  return (
    <>
      <Helmet>
        <title>Roman Sophie | Contemporary Ukrainian Artist</title>

        <meta
          name='description'
          content='Official website of Roman Sophie, a contemporary Ukrainian artist based in Kyiv. Explore original drawings, paintings, and contemporary art series inspired by human experience, identity, and everyday life.'
        />
      </Helmet>
      <main
        className={cn(s.MainPage)}
        id={SECTIONS_CONSTANTS.MAIN_SCT.slice(1)}
      >
        <AboutSct />
        <GallerySct />
        <ExhibitionSct />
        <ArtSct />
      </main>
    </>
  );
}
