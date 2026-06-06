import { TArtwork } from '../artSeries';
import BuilderInHadImg from 'assets/img/PeopleWhatISee/BuilderInHad.jpg';
import BuilderInHadLowImg from 'assets/lowImg/PeopleWhatISee/BuilderInHad.webp';
///
import AutoPortraitInHatImg from 'assets/img/PeopleWhatISee/AutoPortraitInHat.jpg';
import AutoPortraitInHatLowImg from 'assets/lowImg/PeopleWhatISee/AutoPortraitInHat.webp';
////
import ActorOn2MonthsImg from 'assets/img/PeopleWhatISee/ActorOn2Month.jpg';
import ActorOn2MonthsLowImg from 'assets/lowImg/PeopleWhatISee/ActorOn2Month.webp';
////
import MansAndGenjiniImg from 'assets/img/PeopleWhatISee/MansAndGenjini.jpg';
import MansAndGenjiniLowImg from 'assets/lowImg/PeopleWhatISee/MansAndGenjini.webp';

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
        price: '200 dólares',
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
        price: '200 dólares',
      },
    },
  },
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
        price: '200 dólares',
      },
    },
  },
  {
    id: 'men-and-women',
    image: MansAndGenjiniImg,
    lowImg: MansAndGenjiniLowImg,
    translations: {
      ua: {
        title: 'чоловіки і жінки',
        series: 'люди, яких я бачу',
        materials: 'папір, туш, акриловий маркер',
        year: '2025',
        size: '54x74',
        price: '$200',
      },
      en: {
        title: 'Men and Women',
        series: 'People I See',
        materials: 'paper, ink, acrylic marker',
        year: '2025',
        size: '54x74',
        price: '$200',
      },
      es: {
        title: 'Hombres y mujeres',
        series: 'La gente que veo',
        materials: 'papel, tinta, rotulador acrílico',
        year: '2025',
        size: '54x74',
        price: '200 dólares',
      },
    },
  },
];
