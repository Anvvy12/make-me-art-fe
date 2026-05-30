// --- Imports: Men ---
import borisImg from 'img/mans/borus.jpg';
import edikImg from 'img/mans/edik.jpg';
import vladikImg from 'img/mans/vladik.jpg';
import oleksiiImg from 'img/mans/oleksii.jpg';
import vitalikImg from 'img/mans/vitalik.jpg';

// --- Imports: Routine ---
import loopImg from 'img/rutine/loop.jpg';
import climbImg from 'img/rutine/Climb.jpg';

// --- Imports: Office Plankton ---
import onTheWayImg from 'img/NYPlankton/n_1_on_the_way.jpg';
import inProgressImg from 'img/NYPlankton/n_2 in progress.jpg';
import wrongImg from 'img/NYPlankton/n_3_something_went_wrong.jpg';
import wontDoImg from 'img/NYPlankton/n_4_i_wont_do_it_again.jpg';
import onTheWay2Img from 'img/NYPlankton/n_5_on_the_way.jpg';

// --- Imports: Napoleon Life ---
import Josephine from 'img/napoleonsLife/JosephineImg.jpg';
import NapInEgypt from 'img/napoleonsLife/NapInEgyptImg.jpg';
import NapoleonTheBuckwheatSower from 'img/napoleonsLife/NapoleonTheBuckwheatSower.jpg';
import NapoleonTheTraveler from 'img/napoleonsLife/NapoleonTheTraveler.jpg';
import NapoleonTakingJosephine from 'img/napoleonsLife/NapoleonTakingJosephine.jpg';
import NapoleonTakingJosephineBackView from 'img/napoleonsLife/NapoleonTakingJosephine(BackView).jpg';
import NapoleonWithRooster from 'img/napoleonsLife/NapoleonWithRooster.jpg';
import NapoleonIsCold from 'img/napoleonsLife/NapoleonIsCold.jpg';

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
    cover: borisImg,
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
    cover: loopImg,
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
    cover: onTheWayImg,
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
    cover: NapInEgypt,
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
  men: [
    {
      id: 'edik',
      image: edikImg,
      translations: {
        ua: {
          title: 'Едік або ж холодец',
          materials: 'папір, акварель, чорнила',
          year: '2026',
          size: '41x41 см',
          price: '$300',
        },
        en: {
          title: 'Edik, aka Aspic',
          materials: 'Paper, watercolor, ink',
          year: '2026',
          size: '41x41 cm',
          price: '$300',
        },
        es: {
          title: 'Edik (Jolodéts)',
          materials: 'Papel, acuarela, tinta',
          year: '2026',
          size: '41x41 cm',
          price: '$300',
        },
      },
    },
    {
      id: 'vladik',
      image: vladikImg,
      translations: {
        ua: {
          title: 'Владік',
          materials: 'папір, акварель, чорнила',
          year: '2026',
          size: '41x41 см',
          price: '$300',
        },
        en: {
          title: 'Vladik',
          materials: 'Paper, watercolor, ink',
          year: '2026',
          size: '41x41 cm',
          price: '$300',
        },
        es: {
          title: 'Vladik',
          materials: 'Papel, acuarela, tinta',
          year: '2026',
          size: '41x41 cm',
          price: '$300',
        },
      },
    },
    {
      id: 'oleksii',
      image: oleksiiImg,
      translations: {
        ua: {
          title: 'Алєксєй',
          materials: 'папір, акварель, чорнила',
          year: '2026',
          size: '41x41 см',
          price: '$300',
        },
        en: {
          title: 'Oleksii',
          materials: 'Paper, watercolor, ink',
          year: '2026',
          size: '41x41 cm',
          price: '$300',
        },
        es: {
          title: 'Alexéy',
          materials: 'Papel, acuarela, tinta',
          year: '2026',
          size: '41x41 cm',
          price: '$300',
        },
      },
    },
    {
      id: 'boris',
      image: borisImg,
      translations: {
        ua: {
          title: 'Борис',
          materials: 'папір, акварель, чорнила',
          year: '2026',
          size: '41x41 см',
          price: '$300',
        },
        en: {
          title: 'Boris',
          materials: 'Paper, watercolor, ink',
          year: '2026',
          size: '41x41 cm',
          price: '$300',
        },
        es: {
          title: 'Boris',
          materials: 'Papel, acuarela, tinta',
          year: '2026',
          size: '41x41 cm',
          price: '$300',
        },
      },
    },
    {
      id: 'vitalik',
      image: vitalikImg,
      translations: {
        ua: {
          title: 'Віталік',
          materials: 'папір, акварель, чорнила',
          year: '2026',
          size: '41x41 см',
          price: '$300',
        },
        en: {
          title: 'Vitalik',
          materials: 'Paper, watercolor, ink',
          year: '2026',
          size: '41x41 cm',
          price: '$300',
        },
        es: {
          title: 'Vitalik',
          materials: 'Papel, acuarela, tinta',
          year: '2026',
          size: '41x41 cm',
          price: '$300',
        },
      },
    },
  ],

  rutine: [
    {
      id: 'loop',
      image: loopImg,
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
  ],
  napoleon_life: [
    {
      id: 'napoleon-in-egypt',
      image: NapInEgypt,
      translations: {
        ua: {
          title: 'Наполеон в Єгипті',
          materials: 'папір, чорнила',
          year: '2026',
          size: '41x41 см',
          price: '$200',
        },
        en: {
          title: 'Napoleon in Egypt',
          materials: 'paper, ink',
          year: '2026',
          size: '41x41 cm',
          price: '$200',
        },
        es: {
          title: 'Napoleón en Egipto',
          materials: 'papel, tinta',
          year: '2026',
          size: '41x41 cm',
          price: '$200',
        },
      },
    },
    {
      id: 'napoleon-with-rooster',
      image: NapoleonWithRooster,
      translations: {
        ua: {
          title: 'Наполеон з півником',
          materials: 'папір, чорнила',
          year: '2026',
          size: '41x41 см',
          price: '$200',
        },
        en: {
          title: 'Napoleon with a Rooster',
          materials: 'paper, ink',
          year: '2026',
          size: '41x41 cm',
          price: '$200',
        },
        es: {
          title: 'Napoleón con un Gallito',
          materials: 'papel, tinta',
          year: '2026',
          size: '41x41 cm',
          price: '$200',
        },
      },
    },
    {
      id: 'napoleon-and-josephine',
      image: NapoleonIsCold,
      translations: {
        ua: {
          title: 'Наполеон та Жозефіна',
          materials: 'папір, чорнила',
          year: '2026',
          size: '41x41 см',
          price: '$200',
        },
        en: {
          title: 'Napoleon and Josephine',
          materials: 'paper, ink',
          year: '2026',
          size: '41x41 cm',
          price: '$200',
        },
        es: {
          title: 'Napoleón y Josefina',
          materials: 'papel, tinta',
          year: '2026',
          size: '41x41 cm',
          price: '$200',
        },
      },
    },
    {
      id: 'josephine',
      image: Josephine,
      translations: {
        ua: {
          title: 'Жозефіна',
          materials: 'папір, чорнила',
          year: '2026',
          size: '41x41 см',
          price: '$200',
        },
        en: {
          title: 'Josephine',
          materials: 'paper, ink',
          year: '2026',
          size: '41x41 cm',
          price: '$200',
        },
        es: {
          title: 'Josefina',
          materials: 'papel, tinta',
          year: '2026',
          size: '41x41 cm',
          price: '$200',
        },
      },
    },
    {
      id: 'napoleon-taking-josephine',
      image: NapoleonTakingJosephine,
      translations: {
        ua: {
          title: 'Наполеон пользует Жозефіну',
          materials: 'папір, чорнила',
          year: '2026',
          size: '41x41 см',
          price: '$200',
        },
        en: {
          title: 'Napoleon Taking Josephine',
          materials: 'paper, ink',
          year: '2026',
          size: '41x41 cm',
          price: '$200',
        },
        es: {
          title: 'Napoleón Poseyendo a Josefina',
          materials: 'papel, tinta',
          year: '2026',
          size: '41x41 cm',
          price: '$200',
        },
      },
    },
    {
      id: 'napoleon-taking-josephine-back-view',
      image: NapoleonTakingJosephineBackView,
      translations: {
        ua: {
          title: 'Наполеон пользует Жозефіну (вигляд ззаду)',
          materials: 'папір, чорнила',
          year: '2026',
          size: '41x41 см',
          price: '$200',
        },
        en: {
          title: 'Napoleon Taking Josephine (Back View)',
          materials: 'paper, ink',
          year: '2026',
          size: '41x41 cm',
          price: '$200',
        },
        es: {
          title: 'Napoleón Poseyendo a Josefina (Vista Posterior)',
          materials: 'papel, tinta',
          year: '2026',
          size: '41x41 cm',
          price: '$200',
        },
      },
    },
    {
      id: 'napoleon-buckwheat-sower',
      image: NapoleonTheBuckwheatSower,
      translations: {
        ua: {
          title: 'Наполеон-гречкосій',
          materials: 'папір, чорнила',
          year: '2026',
          size: '41x41 см',
          price: '$200',
        },
        en: {
          title: 'Napoleon the Buckwheat Sower',
          materials: 'paper, ink',
          year: '2026',
          size: '41x41 cm',
          price: '$200',
        },
        es: {
          title: 'Napoleón el Sembrador de Alforfón',
          materials: 'papel, tinta',
          year: '2026',
          size: '41x41 cm',
          price: '$200',
        },
      },
    },
    {
      id: 'napoleon-traveler',
      image: NapoleonTheTraveler,
      translations: {
        ua: {
          title: 'Наполеон-мандрівник',
          materials: 'папір, чорнила',
          year: '2026',
          size: '41x41 см',
          price: '$200',
        },
        en: {
          title: 'Napoleon the Traveler',
          materials: 'paper, ink',
          year: '2026',
          size: '41x41 cm',
          price: '$200',
        },
        es: {
          title: 'Napoleón el Viajero',
          materials: 'papel, tinta',
          year: '2026',
          size: '41x41 cm',
          price: '$200',
        },
      },
    },
  ],
  office_new_year: [
    {
      id: 'on-the-way',
      image: onTheWayImg,
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
      translations: {
        ua: {
          title: 'In Progress',
          materials: 'ДВП, акрил, олійна фарба',
          year: '2025',
          size: '67x87 см',
          price: '$600',
        },
        en: {
          title: 'In Progress',
          materials: 'Fiberboard, acrylic, oil paint',
          year: '2025',
          size: '67x87 cm',
          price: '$600',
        },
        es: {
          title: 'En proceso',
          materials: 'Fibra, acrílico, óleo',
          year: '2025',
          size: '67x87 cm',
          price: '$600',
        },
      },
    },
    {
      id: 'something-went-wrong',
      image: wrongImg,
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
  ],
};
