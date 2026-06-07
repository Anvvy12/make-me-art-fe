import { TArtwork } from '../artSeries';
import EmbryoOfAFreakImg from 'assets/img/EmbryoOfAFreak/embryo_of_a_freak_1.jpg';
import EmbryoOfAFreakLowImg from 'assets/lowImg/EmbryoOfAFreak/embryo_of_a_freak_1.webp';
import EmbryoOfAFreak2LowImg from 'assets/lowImg/EmbryoOfAFreak/embryo_of_a_freak_2.webp';
import EmbryoOfAFreak2Img from 'assets/img/EmbryoOfAFreak/embryo_of_a_freak_2.jpg';

export const embryoOfAFreak: TArtwork[] = [
  {
    id: 'embryo_of_a_freak_1',
    image: EmbryoOfAFreakImg,
    lowImg: EmbryoOfAFreakLowImg,
    translations: {
      ua: {
        title: 'Office Plankton 1',
        materials: 'папір, акриловий маркер, кава',
        year: '2025',
        size: '54×74 см',
        price: '400 $',
      },
      en: {
        title: 'Office Plankton 1',
        materials: 'paper, acrylic marker, coffee',
        year: '2025',
        size: '54×74 cm',
        price: '$400',
      },
      es: {
        title: 'Office Plankton 1',
        materials: 'papel, rotulador acrílico, café',
        year: '2025',
        size: '54×74 cm',
        price: '400 $',
      },
    },
  },
  {
    id: 'embryo_of_a_freak_2',
    image: EmbryoOfAFreak2Img,
    lowImg: EmbryoOfAFreak2LowImg,
    translations: {
      ua: {
        title: 'Office Plankton 2',
        materials: 'папір, акриловий маркер',
        year: '2025',
        size: '54×74 см',
        price: '400 $',
      },
      en: {
        title: 'Office Plankton 2',
        materials: 'paper, acrylic marker',
        year: '2025',
        size: '54×74 cm',
        price: '$400',
      },
      es: {
        title: 'Office Plankton 2',
        materials: 'papel, rotulador acrílico',
        year: '2025',
        size: '54×74 cm',
        price: '400 $',
      },
    },
  },
];
