import borisLowImg from 'assets/lowImg/mans/borus.webp';

import loopLowImg from 'assets/lowImg/rutine/loop.webp';
import onTheWayLowImg from 'assets/lowImg/NYPlankton/on_the_way_1.webp';

import NapInEgyptLowImg from 'assets/lowImg/napoleonsLife/NapInEgyptImg.webp';

import { menArtArray } from './artSeries/Men';
import { napoleonsLifeArtArray } from './artSeries/NapoleonsLife';
import { officeNewYearArtArray } from './artSeries/OfficeNewyear';
import { RutineArtArray } from './artSeries/Rutine';

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
  translations: {
    ua: { title: string; description: string; deliveryNote: string };
    en: { title: string; description: string; deliveryNote: string };
    es: { title: string; description: string; deliveryNote: string };
  };
  artworks: TArtwork[];
};

export const ART_TITLES = [
  {
    slug: 'men',
    cover: borisLowImg,
    translations: {
      ua: {
        title: 'Чоловіки',
        description: 'Серія робіт «Чоловіки».',
        deliveryNote: 'Ціна вказана без доставки.',
      },
      en: {
        title: 'Men',
        description: 'Works from the "Men" series.',
        deliveryNote: 'Price does not include delivery.',
      },
      es: {
        title: 'Hombres',
        description: 'Obras de la serie "Hombres" (Choloviky).',
        deliveryNote: 'El precio no incluye la entrega.',
      },
    },
  },

  {
    slug: 'rutine',
    cover: loopLowImg,
    translations: {
      ua: {
        title: 'Рутина',
        description: 'Серія робіт «Рутина».',
        deliveryNote: 'Ціна вказана без доставки.',
      },
      en: {
        title: 'Routine',
        description: 'Works from the "Routine" series.',
        deliveryNote: 'Price does not include delivery.',
      },
      es: {
        title: 'Rutina',
        description: 'Obras de la serie "Rutina".',
        deliveryNote: 'El precio no incluye la entrega.',
      },
    },
  },

  {
    slug: 'office_new_year',
    cover: onTheWayLowImg,
    translations: {
      ua: {
        title: 'Новий рік офісного планктона',
        description: 'Серія робіт «Новий рік офісного планктона».',
        deliveryNote: 'Ціна вказана без доставки.',
      },
      en: {
        title: "Office Plankton's New Year",
        description: 'Works from the series.',
        deliveryNote: 'Price does not include delivery.',
      },
      es: {
        title: 'Año Nuevo del Oficinista',
        description: 'Obras de la serie.',
        deliveryNote: 'El precio no incluye la entrega.',
      },
    },
  },

  {
    slug: 'napoleon_life',
    cover: NapInEgyptLowImg,
    translations: {
      ua: {
        title: 'Наполеонівське життя',
        description: 'Серія «Наполеонівське життя».',
        deliveryNote: 'Ціна вказана без доставки.',
      },
      en: {
        title: 'Napoleonic Life',
        description: 'Works from the series.',
        deliveryNote: 'Price does not include delivery.',
      },
      es: {
        title: 'Vida Napoleónica',
        description: 'Obras de la serie.',
        deliveryNote: 'El precio no incluye la entrega.',
      },
    },
  },
];
export const ARTWORKS_BY_SERIES: Record<string, TArtwork[]> = {
  men: menArtArray,
  rutine: RutineArtArray,
  napoleon_life: napoleonsLifeArtArray,
  office_new_year: officeNewYearArtArray,
};
