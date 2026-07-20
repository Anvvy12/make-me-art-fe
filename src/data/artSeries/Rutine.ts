import loopImg from 'assets/img/rutine/loop.jpg';
import climbImg from 'assets/img/rutine/Climb.jpg';
import loopLowImg from 'assets/lowImg/rutine/loop.webp';
import climbLowImg from 'assets/lowImg/rutine/Climb.webp';
import type { TArtwork } from './types';

export const RutineArtArray: TArtwork[] = [
  {
    id: 'loop',
    image: loopImg,
    lowImg: loopLowImg,
    translations: {
      ua: {
        title: 'Петля',
        materials: 'ДВП, акрил, олійна фарба',
        year: '2025',
        size: '67x87 см',
        price: '$800',
      },
      en: {
        title: 'Loop',
        materials: 'Fiberboard, acrylic, oil paint',
        year: '2025',
        size: '67x87 cm',
        price: '$800',
      },
      es: {
        title: 'Loop',
        materials: 'Fibra, acrílico, óleo',
        year: '2025',
        size: '67x87 cm',
        price: '$800',
      },
    },
  },
  {
    id: 'climb',
    image: climbImg,
    lowImg: climbLowImg,
    translations: {
      ua: {
        title: 'Дертя',
        materials: 'ДВП, акрил, олійна фарба',
        year: '2025',
        size: '67x87 см',
        price: '$800',
      },
      en: {
        title: 'Climb',
        materials: 'Fiberboard, acrylic, oil paint',
        year: '2025',
        size: '67x87 cm',
        price: '$800',
      },
      es: {
        title: 'Climb',
        materials: 'Fibra, acrílico, óleo',
        year: '2025',
        size: '67x87 cm',
        price: '$800',
      },
    },
  },
];
