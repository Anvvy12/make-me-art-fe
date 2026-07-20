export type TArtLocale = 'ua' | 'en' | 'es';

type TLocalized<T> = Record<TArtLocale, T>;

export type TArtworkLocale = {
  title: string;
  materials: string;
  year: string;
  size: string;
  price: string;
};

export type TArtwork = {
  id: string;
  image: string;
  lowImg: string;
  translations: TLocalized<TArtworkLocale>;
};

type TArtSeriesLocale = {
  title: string;
  description: string;
};

export type TArtSeries = {
  slug: string;
  cover: string;
  pictureCount: number;
  translations: TLocalized<TArtSeriesLocale>;
};
