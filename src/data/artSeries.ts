import EmbryoOfAFreak2LowImg from 'assets/lowImg/EmbryoOfAFreak/embryo_of_a_freak_2.webp';
import borisLowImg from 'assets/lowImg/mans/borus.webp';
import onTheWayLowImg from 'assets/lowImg/NYPlankton/on_the_way_1.webp';
// Тимчасово приховано: import NudeInWhiteWorldLowImg from 'assets/lowImg/nakedInWorldWhite/naked_in_the_white_light.webp';
// Тимчасово приховано: import NapInEgyptLowImg from 'assets/lowImg/napoleonsLife/NapInEgyptImg.webp';
import MansAndGenjiniLowImg from 'assets/lowImg/PeopleWhatISee/MansAndGenjini.webp';
import loopLowImg from 'assets/lowImg/rutine/loop.webp';
import { embryoOfAFreak } from './artSeries/EmbryoOfAFreak';
import { menArtArray } from './artSeries/Men';
// Тимчасово приховано: import { napoleonsLifeArtArray } from './artSeries/NapoleonsLife';
// Тимчасово приховано: import { nakedInWorldWhite } from './artSeries/nakedInWorldWhite';
import { officeNewYearArtArray } from './artSeries/OfficeNewyear';
import { peopleWhatISee } from './artSeries/PeopleWhatISee';
import { RutineArtArray } from './artSeries/Rutine';
import type { TArtSeries, TArtwork } from './artSeries/types';

export const ARTWORKS_BY_SERIES: Record<string, TArtwork[]> = {
  men: menArtArray,
  rutine: RutineArtArray,
  // Тимчасово приховано: napoleon_life: napoleonsLifeArtArray,
  office_new_year: officeNewYearArtArray,
  people_what_i_see: peopleWhatISee,
  // Тимчасово приховано: naked_in_world_white: nakedInWorldWhite,
  embryo_of_a_freak: embryoOfAFreak,
};

export const ART_TITLES: TArtSeries[] = [
  {
    slug: 'men',
    cover: borisLowImg,
    pictureCount: ARTWORKS_BY_SERIES.men.length,

    translations: {
      ua: {
        title: 'Чоловіки',
        description: 'Серія робіт «Чоловіки».',
      },
      en: {
        title: 'Men',
        description: 'Works from the "Men" series.',
      },
      es: {
        title: 'Hombres',
        description: 'Obras de la serie "Hombres" (Choloviky).',
      },
    },
  },

  {
    slug: 'rutine',
    cover: loopLowImg,
    pictureCount: ARTWORKS_BY_SERIES.rutine.length,

    translations: {
      ua: {
        title: 'Рутина',
        description: 'Серія робіт «Рутина».',
      },
      en: {
        title: 'Routine',
        description: 'Works from the "Routine" series.',
      },
      es: {
        title: 'Rutina',
        description: 'Obras de la serie "Rutina".',
      },
    },
  },

  {
    slug: 'office_new_year',
    cover: onTheWayLowImg,
    pictureCount: ARTWORKS_BY_SERIES.office_new_year.length,

    translations: {
      ua: {
        title: 'Новий рік офісного планктона',
        description: 'Серія робіт «Новий рік офісного планктона».',
      },
      en: {
        title: "Office Plankton's New Year",
        description: 'Works from the series.',
      },
      es: {
        title: 'Año Nuevo del Oficinista',
        description: 'Obras de la serie.',
      },
    },
  },

  /* Тимчасово приховано
  {
    slug: 'napoleon_life',
    cover: NapInEgyptLowImg,
    pictureCount: ARTWORKS_BY_SERIES.napoleon_life.length,
    translations: {
      ua: {
        title: 'Наполеонівське життя',
        description: 'Серія «Наполеонівське життя».',
      },
      en: {
        title: 'Napoleonic Life',
        description: 'Works from the series.',
      },
      es: {
        title: 'Vida Napoleónica',
        description: 'Obras de la serie.',
      },
    },
  },
*/
  {
    slug: 'people_what_i_see',
    cover: MansAndGenjiniLowImg,
    pictureCount: ARTWORKS_BY_SERIES.people_what_i_see.length,
    translations: {
      ua: {
        title: 'Люди, яких я бачу',
        description:
          'Серія робіт, присвячена людям, яких художниця зустрічає, спостерігає та запам’ятовує у повсякденному житті.',
      },
      en: {
        title: 'People I See',
        description:
          'A series dedicated to the people the artist encounters, observes, and remembers in everyday life.',
      },
      es: {
        title: 'La gente que veo',
        description:
          'Una serie dedicada a las personas que la artista encuentra, observa y recuerda en la vida cotidiana.',
      },
    },
  },
  /* Тимчасово приховано
  {
    slug: 'naked_in_world_white',
    cover: NudeInWhiteWorldLowImg,
    pictureCount: ARTWORKS_BY_SERIES.naked_in_world_white.length,
    translations: {
      ua: {
        title: 'Оголені у білому світі',
        description:
          'Серія досліджує людську вразливість, щирість і присутність у просторі, позбавленому зайвих деталей. Постаті, зустрінуті художницею в повсякденному житті, постають оголеними не лише фізично, а й емоційно — відкритими до погляду, пам’яті та часу.',
      },
      en: {
        title: 'Naked in a White World',
        description:
          'This series explores human vulnerability, sincerity, and presence within a space stripped of distractions. The figures, inspired by people the artist encounters in everyday life, appear exposed not only physically but emotionally—open to observation, memory, and time.',
      },
      es: {
        title: 'Desnudos en un mundo blanco',
        description:
          'Esta serie explora la vulnerabilidad, la sinceridad y la presencia humanas en un espacio despojado de elementos superfluos. Las figuras, inspiradas en las personas que la artista encuentra en la vida cotidiana, aparecen expuestas no solo físicamente, sino también emocionalmente, abiertas a la mirada, la memoria y el paso del tiempo.',
      },
    },
  },
*/
  {
    slug: 'embryo_of_a_freak',
    cover: EmbryoOfAFreak2LowImg,
    pictureCount: ARTWORKS_BY_SERIES.embryo_of_a_freak.length,

    translations: {
      ua: {
        title: 'Office Plankton',
        description:
          'Серія робіт, присвячена дослідженню внутрішніх деформацій, соціальних масок та химерних проявів людської природи.',
      },
      en: {
        title: 'Office Plankton',
        description:
          'A series exploring inner distortions, social masks, and the bizarre manifestations of human nature.',
      },
      es: {
        title: 'Office Plankton',
        description:
          'Una serie que explora las deformaciones internas, las máscaras sociales y las extrañas manifestaciones de la naturaleza humana.',
      },
    },
  },
];
