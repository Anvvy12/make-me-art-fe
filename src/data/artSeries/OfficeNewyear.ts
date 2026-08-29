import wrongImg from 'assets/img/NYPlankton/n_3_something_went_wrong.jpg';
import wontDoImg from 'assets/img/NYPlankton/n_4_i_wont_do_it_again.jpg';
import onTheWay2Img from 'assets/img/NYPlankton/n_5_on_the_way.jpg';
import wontDoLowImg from 'assets/lowImg/NYPlankton/i_wont_do_it_again.webp';
import inProgressLowImg from 'assets/lowImg/NYPlankton/in_progress.webp';
import onTheWayLowImg from 'assets/lowImg/NYPlankton/on_the_way_1.webp';
import onTheWay2LowImg from 'assets/lowImg/NYPlankton/on_the_way_2.webp';
import wrongLowImg from 'assets/lowImg/NYPlankton/something_went_wrong.webp';
import onTheWayImg from 'img//NYPlankton/n_1_on_the_way.jpg';
import inProgressImg from 'img//NYPlankton/n_2 in progress.jpg';
import type { TArtwork } from './types';

export const officeNewYearArtArray: TArtwork[] = [
  {
    id: 'on-the-way',
    image: onTheWayImg,
    lowImg: onTheWayLowImg,
    translations: {
      ua: {
        title: 'On The Way',
        materials: 'ДВП, акрил, олійна фарба',
        year: '2025',
        size: '67x87 см',
        price: '$600',
      },
      en: {
        title: 'On The Way',
        materials: 'Fiberboard, acrylic, oil paint',
        year: '2025',
        size: '67x87 cm',
        price: '$600',
      },
      es: {
        title: 'En camino',
        materials: 'Fibra, acrílico, óleo',
        year: '2025',
        size: '67x87 cm',
        price: '$600',
      },
    },
  },
  {
    id: 'in-progress',
    image: inProgressImg,
    lowImg: inProgressLowImg,
    isSold: true,
    translations: {
      ua: {
        title: 'In Progress',
        materials: 'ДВП, акрил, олійна фарба',
        year: '2025',
        size: '67x87 см',
        price: '$600',
        label: 'Продано',
      },
      en: {
        title: 'In Progress',
        materials: 'Fiberboard, acrylic, oil paint',
        year: '2025',
        size: '67x87 cm',
        price: '$600',
        label: 'Sold',
      },
      es: {
        title: 'En proceso',
        materials: 'Fibra, acrílico, óleo',
        year: '2025',
        size: '67x87 cm',
        price: '$600',
        label: 'Vendido',
      },
    },
  },
  {
    id: 'something-went-wrong',
    image: wrongImg,
    lowImg: wrongLowImg,
    translations: {
      ua: {
        title: 'Something Went Wrong',
        materials: 'ДВП, акрил, олійна фарба',
        year: '2025',
        size: '67x87 см',
        price: '$600',
      },
      en: {
        title: 'Something Went Wrong',
        materials: 'Fiberboard, acrylic, oil paint',
        year: '2025',
        size: '67x87 cm',
        price: '$600',
      },
      es: {
        title: 'Algo salió mal',
        materials: 'Fibra, acrílico, óleo',
        year: '2025',
        size: '67x87 cm',
        price: '$600',
      },
    },
  },
  {
    id: 'i-wont-do-it-again',
    image: wontDoImg,
    lowImg: wontDoLowImg,
    translations: {
      ua: {
        title: "I Won't Do It Again",
        materials: 'ДВП, акрил, олійна фарба',
        year: '2025',
        size: '67x87 см',
        price: '$600',
      },
      en: {
        title: "I Won't Do It Again",
        materials: 'Fiberboard, acrylic, oil paint',
        year: '2025',
        size: '67x87 cm',
        price: '$600',
      },
      es: {
        title: 'No lo volveré a hacer',
        materials: 'Fibra, acrílico, óleo',
        year: '2025',
        size: '67x87 cm',
        price: '$600',
      },
    },
  },
  {
    id: 'on-the-way-2',
    image: onTheWay2Img,
    lowImg: onTheWay2LowImg,
    translations: {
      ua: {
        title: 'On The Way 2',
        materials: 'ДВП, акрил, олійна фарба',
        year: '2025',
        size: '67x87 см',
        price: '$600',
      },
      en: {
        title: 'On The Way 2',
        materials: 'Fiberboard, acrylic, oil paint',
        year: '2025',
        size: '67x87 cm',
        price: '$600',
      },
      es: {
        title: 'En camino 2',
        materials: 'Fibra, acrílico, óleo',
        year: '2025',
        size: '67x87 cm',
        price: '$600',
      },
    },
  },
];
