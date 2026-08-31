////
// Тимчасово приховано: import ActorOn2MonthsImg from 'assets/img/PeopleWhatISee/ActorOn2Month.jpg';
///
import AutoPortraitInHatImg from 'assets/img/PeopleWhatISee/AutoPortraitInHat.jpg';
import BuilderInHadImg from 'assets/img/PeopleWhatISee/BuilderInHad.jpg';
////
import ClashingImg from 'assets/img/PeopleWhatISee/Clashing.jpg';
////
import MansAndGenjiniImg from 'assets/img/PeopleWhatISee/MansAndGenjini.jpg';
// Тимчасово приховано: import ActorOn2MonthsLowImg from 'assets/lowImg/PeopleWhatISee/ActorOn2Month.webp';
import AutoPortraitInHatLowImg from 'assets/lowImg/PeopleWhatISee/AutoPortraitInHat.webp';
import BuilderInHadLowImg from 'assets/lowImg/PeopleWhatISee/BuilderInHad.webp';
import ClashingLowImg from 'assets/lowImg/PeopleWhatISee/Clashing.webp';
import MansAndGenjiniLowImg from 'assets/lowImg/PeopleWhatISee/MansAndGenjini.webp';
import type { TArtwork } from './types';

export const peopleWhatISee: TArtwork[] = [
  {
    id: 'builder-in-a-hat',
    image: BuilderInHadImg,
    lowImg: BuilderInHadLowImg,
    translations: {
      ua: {
        title: 'будівельник в шапці',
        materials: 'папір, гуаш',
        year: '2026',
        size: '54x74',
        price: '$200',
      },
      en: {
        title: 'Builder in a Hat',
        materials: 'paper, gouache',
        year: '2026',
        size: '54x74',
        price: '$200',
      },
      es: {
        title: 'Constructor con gorro',
        materials: 'papel, guache',
        year: '2026',
        size: '54x74',
        price: '$200',
      },
    },
  },
  {
    id: 'self-portrait-hat-braids',
    image: AutoPortraitInHatImg,
    lowImg: AutoPortraitInHatLowImg,
    translations: {
      ua: {
        title: 'автопортрет в шапці з косами',
        materials: 'папір, гуаш',
        year: '2026',
        size: '54x74',
        price: '$200',
      },
      en: {
        title: 'Self-Portrait in a Hat with Braids',
        materials: 'paper, gouache',
        year: '2026',
        size: '54x74',
        price: '$200',
      },
      es: {
        title: 'Autorretrato con gorro y trenzas',
        materials: 'papel, guache',
        year: '2026',
        size: '54x74',
        price: '$200',
      },
    },
  },
  /* Тимчасово приховано
  {
    id: 'actor-for-2-months',
    image: ActorOn2MonthsImg,
    lowImg: ActorOn2MonthsLowImg,
    translations: {
      ua: {
        title: 'актор на 2 місяці',
        materials: 'папір, гуаш',
        year: '2026',
        size: '54x74',
        price: '$200',
      },
      en: {
        title: 'Actor for 2 Months',
        materials: 'paper, gouache',
        year: '2026',
        size: '54x74',
        price: '$200',
      },
      es: {
        title: 'Actor por 2 meses',
        materials: 'papel, guache',
        year: '2026',
        size: '54x74',
        price: '$200',
      },
    },
  },
*/
  {
    id: 'men-and-women',
    image: MansAndGenjiniImg,
    lowImg: MansAndGenjiniLowImg,
    translations: {
      ua: {
        title: 'чоловіки і жінки',
        materials: 'папір, туш, акриловий маркер',
        year: '2025',
        size: '54x74',
        price: '$200',
      },
      en: {
        title: 'Men and Women',
        materials: 'paper, ink, acrylic marker',
        year: '2025',
        size: '54x74',
        price: '$200',
      },
      es: {
        title: 'Hombres y mujeres',
        materials: 'papel, tinta, rotulador acrílico',
        year: '2025',
        size: '54x74',
        price: '$200',
      },
    },
  },
  {
    id: 'clashing',
    image: ClashingImg,
    lowImg: ClashingLowImg,
    translations: {
      ua: {
        title: 'сперечаються',
        materials: 'папір, акриловий маркер',
        year: '2025',
        size: '74x54',
        price: '$300',
      },
      en: {
        title: 'Clashing',
        materials: 'paper, acrylic marker',
        year: '2025',
        size: '74x54',
        price: '$300',
      },
      es: {
        title: 'Chocando',
        materials: 'papel, rotulador acrílico',
        year: '2025',
        size: '74x54',
        price: '$300',
      },
    },
  },
];
