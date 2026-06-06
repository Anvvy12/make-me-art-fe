import borisLowImg from 'assets/lowImg/mans/borus.webp';

import loopLowImg from 'assets/lowImg/rutine/loop.webp';
import onTheWayLowImg from 'assets/lowImg/NYPlankton/on_the_way_1.webp';

import NapInEgyptLowImg from 'assets/lowImg/napoleonsLife/NapInEgyptImg.webp';
import ActorOn2MonthsLowImg from 'assets/lowImg/PeopleWhatISee/ActorOn2Month.webp';

import { menArtArray } from './artSeries/Men';
import { napoleonsLifeArtArray } from './artSeries/NapoleonsLife';
import { officeNewYearArtArray } from './artSeries/OfficeNewyear';
import { RutineArtArray } from './artSeries/Rutine';
import { peopleWhatISee } from './artSeries/PeopleWhatISee';

export type TArtworkLocale = {
  title: string;
  series?: string;
  materials: string;
  year: string;
  size: string;
  price: string;
};

export type TArtwork = {
  id: string;
  image: string;
  lowImg: string;
  translations: {
    ua: TArtworkLocale;
    en: TArtworkLocale;
    es: TArtworkLocale;
  };
};

export type TArtSeries = {
  slug: string;
  cover: string;
  pictureCount: number;
  translations: {
    ua: { title: string; description: string };
    en: { title: string; description: string };
    es: { title: string; description: string };
  };
};

export const ARTWORKS_BY_SERIES: Record<string, TArtwork[]> = {
  men: menArtArray,
  rutine: RutineArtArray,
  napoleon_life: napoleonsLifeArtArray,
  office_new_year: officeNewYearArtArray,
  people_what_i_see: peopleWhatISee,
};

export const ART_TITLES: TArtSeries[] = [
  {
    slug: 'men',
    cover: borisLowImg,
    pictureCount: ARTWORKS_BY_SERIES['men'].length,

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
    pictureCount: ARTWORKS_BY_SERIES['rutine'].length,

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
    pictureCount: ARTWORKS_BY_SERIES['office_new_year'].length,

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

  {
    slug: 'napoleon_life',
    cover: NapInEgyptLowImg,
    pictureCount: ARTWORKS_BY_SERIES['napoleon_life'].length,
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
  {
    slug: 'people_what_i_see',
    cover: ActorOn2MonthsLowImg,
    pictureCount: ARTWORKS_BY_SERIES['people_what_i_see'].length,
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
];
