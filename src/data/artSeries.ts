export type TArtworkLocale = {
  title: string;
  series?: string;
  medium: string;
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
    ua: {
      title: string;
      description: string;
      deliveryNote: string;
    };
    en: {
      title: string;
      description: string;
      deliveryNote: string;
    };
    es: {
      title: string;
      description: string;
      deliveryNote: string;
    };
  };
  artworks: TArtwork[];
};

export const ART_SERIES: TArtSeries[] = [
  {
    slug: 'men',
    cover: '/src/assets/img/mans/borus.JPG',
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
    artworks: [
      {
        id: 'edik',
        image: '/src/assets/img/mans/edik.JPG',
        translations: {
          ua: {
            title: 'Едік або ж холодец',
            medium: 'папір, акварель, чорнила',
            year: '2026',
            size: '41x41 см',
            price: '$300',
          },
          en: {
            title: 'Edik, aka Aspic (Kholodets)',
            series: 'From the "Men" series',
            medium: 'Paper, watercolor, ink',
            year: '2026',
            size: '41x41 cm',
            price: '$300',
          },
          es: {
            title: 'Edik, tambi\u00e9n conocido como Aspic (Jolod\u00e9ts)',
            series: 'De la serie "Hombres" (Choloviky)',
            medium: 'Papel, acuarela, tinta',
            year: '2026',
            size: '41x41 cm',
            price: '$300',
          },
        },
      },
      {
        id: 'vladik',
        image: '/src/assets/img/mans/vladik.JPG',
        translations: {
          ua: {
            title: 'Владік',
            medium: 'папір, акварель, чорнила',
            year: '2026',
            size: '41x41 см',
            price: '$300',
          },
          en: {
            title: 'Vladik',
            series: 'From the "Men" series',
            medium: 'Paper, watercolor, ink',
            year: '2026',
            size: '41x41 cm',
            price: '$300',
          },
          es: {
            title: 'Vladik',
            series: 'De la serie "Hombres" (Choloviky)',
            medium: 'Papel, acuarela, tinta',
            year: '2026',
            size: '41x41 cm',
            price: '$300',
          },
        },
      },
      {
        id: 'oleksii',
        image: '/src/assets/img/mans/oleksii.JPG',
        translations: {
          ua: {
            title: 'Алєксєй',
            medium: 'папір, акварель, чорнила',
            year: '2026',
            size: '41x41 см',
            price: '$300',
          },
          en: {
            title: 'Oleksii',
            series: 'From the "Men" series',
            medium: 'Paper, watercolor, ink',
            year: '2026',
            size: '41x41 cm',
            price: '$300',
          },
          es: {
            title: 'Alex\u00e9y',
            series: 'De la serie "Hombres" (Choloviky)',
            medium: 'Papel, acuarela, tinta',
            year: '2026',
            size: '41x41 cm',
            price: '$300',
          },
        },
      },
      {
        id: 'boris',
        image: '/src/assets/img/mans/borus.JPG',
        translations: {
          ua: {
            title: 'Борис',
            medium: 'папір, акварель, чорнила',
            year: '2026',
            size: '41x41 см',
            price: '$300',
          },
          en: {
            title: 'Boris',
            series: 'From the "Men" series',
            medium: 'Paper, watercolor, ink',
            year: '2026',
            size: '41x41 cm',
            price: '$300',
          },
          es: {
            title: 'Boris',
            series: 'De la serie "Hombres" (Choloviky)',
            medium: 'Papel, acuarela, tinta',
            year: '2026',
            size: '41x41 cm',
            price: '$300',
          },
        },
      },
      {
        id: 'vitalik',
        image: '/src/assets/img/mans/vitalik.JPG',
        translations: {
          ua: {
            title: 'Віталік',
            medium: 'папір, акварель, чорнила',
            year: '2026',
            size: '41x41 см',
            price: '$300',
          },
          en: {
            title: 'Vitalik',
            series: 'From the "Men" series',
            medium: 'Paper, watercolor, ink',
            year: '2026',
            size: '41x41 cm',
            price: '$300',
          },
          es: {
            title: 'Vitalik',
            series: 'De la serie "Hombres" (Choloviky)',
            medium: 'Papel, acuarela, tinta',
            year: '2026',
            size: '41x41 cm',
            price: '$300',
          },
        },
      },
    ],
  },
  {
    slug: 'rutine',
    cover: '/src/assets/img/rutine/loop.JPG',
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
    artworks: [
      {
        id: 'loop',
        image: '/src/assets/img/rutine/loop.JPG',
        translations: {
          ua: {
            title: 'Петля',
            medium: 'ДВП, акрил, олійна фарба',
            year: '2025',
            size: '67x87 см',
            price: '$800',
          },
          en: {
            title: 'Loop',
            medium: 'Fiberboard, acrylic, oil paint',
            year: '2025',
            size: '67x87 cm',
            price: '$800',
          },
          es: {
            title: 'Bucle / Loop',
            medium: 'Tablero de fibra, acr\u00edlico, pintura al \u00f3leo',
            year: '2025',
            size: '67x87 cm',
            price: '$800',
          },
        },
      },
      {
        id: 'climb',
        image: '/src/assets/img/rutine/gththj,.JPG',
        translations: {
          ua: {
            title: 'Дертя',
            medium: 'ДВП, акрил, олійна фарба',
            year: '2025',
            size: '67x87 см',
            price: '$800',
          },
          en: {
            title: 'Climb',
            medium: 'Fiberboard, acrylic, oil paint',
            year: '2025',
            size: '67x87 cm',
            price: '$800',
          },
          es: {
            title: 'Ascenso / Climb',
            medium: 'Tablero de fibra, acr\u00edlico, pintura al \u00f3leo',
            year: '2025',
            size: '67x87 cm',
            price: '$800',
          },
        },
      },
    ],
  },
  {
    slug: 'office_new_year',
    cover: '/src/assets/img/NYPlankton/n_1_on_the_way.JPG',
    translations: {
      ua: {
        title: 'Новий рік офісного планктона',
        description: 'Серія робіт «Новий рік офісного планктона».',
        deliveryNote: 'Ціна вказана без доставки.',
      },
      en: {
        title: "Office Plankton's New Year",
        description: 'Works from the "Office Plankton\'s New Year" series.',
        deliveryNote: 'Price does not include delivery.',
      },
      es: {
        title: 'A\u00f1o Nuevo del Oficinista',
        description: 'Obras de la serie "A\u00f1o Nuevo del Oficinista".',
        deliveryNote: 'El precio no incluye la entrega.',
      },
    },
    artworks: [
      {
        id: 'on-the-way',
        image: '/src/assets/img/NYPlankton/n_1_on_the_way.JPG',
        translations: {
          ua: {
            title: 'On The Way',
            medium: 'ДВП, акрил, олійна фарба',
            year: '2025',
            size: '67x87 см',
            price: '$600',
          },
          en: {
            title: 'On The Way',
            medium: 'Fiberboard, acrylic, oil paint',
            year: '2025',
            size: '67x87 cm',
            price: '$600',
          },
          es: {
            title: 'En camino (On The Way)',
            medium: 'Fibra de madera, acr\u00edlico, \u00f3leo',
            year: '2025',
            size: '67x87 cm',
            price: '600 USD',
          },
        },
      },
      {
        id: 'in-progress',
        image: '/src/assets/img/NYPlankton/n_2 in progress.JPG',
        translations: {
          ua: {
            title: 'In Progress',
            medium: 'ДВП, акрил, олійна фарба',
            year: '2025',
            size: '67x87 см',
            price: '$600',
          },
          en: {
            title: 'In Progress',
            medium: 'Fiberboard, acrylic, oil paint',
            year: '2025',
            size: '67x87 cm',
            price: '$600',
          },
          es: {
            title: 'En proceso (In Progress)',
            medium: 'Fibra de madera, acr\u00edlico, \u00f3leo',
            year: '2025',
            size: '67x87 cm',
            price: '600 USD',
          },
        },
      },
      {
        id: 'something-went-wrong',
        image: '/src/assets/img/NYPlankton/n_3_something_went_wrong.JPG',
        translations: {
          ua: {
            title: 'Something Went Wrong',
            medium: 'ДВП, акрил, олійна фарба',
            year: '2025',
            size: '67x87 см',
            price: '$600',
          },
          en: {
            title: 'Something Went Wrong',
            medium: 'Fiberboard, acrylic, oil paint',
            year: '2025',
            size: '67x87 cm',
            price: '$600',
          },
          es: {
            title: 'Algo sali\u00f3 mal (Something Went Wrong)',
            medium: 'Fibra de madera, acr\u00edlico, \u00f3leo',
            year: '2025',
            size: '67x87 cm',
            price: '600 USD',
          },
        },
      },
      {
        id: 'i-wont-do-it-again',
        image: "/src/assets/img/NYPlankton/n_4_i_won't_do_it_again.JPG",
        translations: {
          ua: {
            title: "I Won't Do It Again",
            medium: 'ДВП, акрил, олійна фарба',
            year: '2025',
            size: '67x87 см',
            price: '$600',
          },
          en: {
            title: "I Won't Do It Again",
            medium: 'Fiberboard, acrylic, oil paint',
            year: '2025',
            size: '67x87 cm',
            price: '$600',
          },
          es: {
            title: "No lo volver\u00e9 a hacer (I Won't Do It Again)",
            medium: 'Fibra de madera, acr\u00edlico, \u00f3leo',
            year: '2025',
            size: '67x87 cm',
            price: '600 USD',
          },
        },
      },
      {
        id: 'on-the-way-2',
        image: '/src/assets/img/NYPlankton/n_5_on_the_way.JPG',
        translations: {
          ua: {
            title: 'On The Way 2',
            medium: 'ДВП, акрил, олійна фарба',
            year: '2025',
            size: '67x87 см',
            price: '$600',
          },
          en: {
            title: 'On The Way 2',
            medium: 'Fiberboard, acrylic, oil paint',
            year: '2025',
            size: '67x87 cm',
            price: '$600',
          },
          es: {
            title: 'En camino 2 (On The Way 2)',
            medium: 'Fibra de madera, acr\u00edlico, \u00f3leo',
            year: '2025',
            size: '67x87 cm',
            price: '600 USD',
          },
        },
      },
    ],
  },
  {
    slug: 'nap\u00f3leon_life',
    cover: '/src/assets/img/nap\u00f3leonsLife/IMG_5186.JPG',
    translations: {
      ua: {
        title: 'Наполеонівське життя',
        description: 'Серія «Наполеонівське життя».',
        deliveryNote: 'Ціна вказана без доставки.',
      },
      en: {
        title: 'Napoleonic Life',
        description: 'Works from the "Napoleonic Life" series.',
        deliveryNote: 'Price does not include delivery.',
      },
      es: {
        title: 'Vida Napole\u00f3nica',
        description: 'Obras de la serie "Vida Napole\u00f3nica".',
        deliveryNote: 'El precio no incluye la entrega.',
      },
    },
    artworks: [
      {
        id: 'nap\u00f3leon-in-egypt',
        image: '/src/assets/img/nap\u00f3leonsLife/IMG_5185.JPG',
        translations: {
          ua: {
            title: 'Наполеон в Єгипті',
            medium: 'папір, чорнила',
            year: '2026',
            size: '41x41 см',
            price: '$200',
          },
          en: {
            title: 'Napoleon in Egypt',
            medium: 'paper, ink',
            year: '2026',
            size: '41x41 cm',
            price: '$200',
          },
          es: {
            title: 'Napole\u00f3n en Egipto',
            medium: 'papel, tinta',
            year: '2026',
            size: '41x41 cm',
            price: '$200',
          },
        },
      },
      {
        id: 'nap\u00f3leon-with-rooster',
        image: '/src/assets/img/nap\u00f3leonsLife/IMG_5186.JPG',
        translations: {
          ua: {
            title: 'Наполеон з півником',
            medium: 'папір, чорнила',
            year: '2026',
            size: '41x41 см',
            price: '$200',
          },
          en: {
            title: 'Napoleon with a Rooster',
            medium: 'paper, ink',
            year: '2026',
            size: '41x41 cm',
            price: '$200',
          },
          es: {
            title: 'Napole\u00f3n con un Gallito',
            medium: 'papel, tinta',
            year: '2026',
            size: '41x41 cm',
            price: '$200',
          },
        },
      },
      {
        id: 'nap\u00f3leon-and-josephine',
        image: '/src/assets/img/nap\u00f3leonsLife/IMG_5191.JPG',
        translations: {
          ua: {
            title: 'Наполеон та Жозефіна',
            medium: 'папір, чорнила',
            year: '2026',
            size: '41x41 см',
            price: '$200',
          },
          en: {
            title: 'Napoleon and Josephine',
            medium: 'paper, ink',
            year: '2026',
            size: '41x41 cm',
            price: '$200',
          },
          es: {
            title: 'Napole\u00f3n y Josefina',
            medium: 'papel, tinta',
            year: '2026',
            size: '41x41 cm',
            price: '$200',
          },
        },
      },
      {
        id: 'josephine',
        image: '/src/assets/img/nap\u00f3leonsLife/IMG_5192.JPG',
        translations: {
          ua: {
            title: 'Жозефіна',
            medium: 'папір, чорнила',
            year: '2026',
            size: '41x41 см',
            price: '$200',
          },
          en: {
            title: 'Josephine',
            medium: 'paper, ink',
            year: '2026',
            size: '41x41 cm',
            price: '$200',
          },
          es: {
            title: 'Josefina',
            medium: 'papel, tinta',
            year: '2026',
            size: '41x41 cm',
            price: '$200',
          },
        },
      },
      {
        id: 'nap\u00f3leon-taking-josephine',
        image: '/src/assets/img/nap\u00f3leonsLife/IMG_5193.JPG',
        translations: {
          ua: {
            title: 'Наполеон пользует Жозефіну',
            medium: 'папір, чорнила',
            year: '2026',
            size: '41x41 см',
            price: '$200',
          },
          en: {
            title: 'Napoleon Taking Josephine',
            medium: 'paper, ink',
            year: '2026',
            size: '41x41 cm',
            price: '$200',
          },
          es: {
            title: 'Napole\u00f3n Poseyendo a Josefina',
            medium: 'papel, tinta',
            year: '2026',
            size: '41x41 cm',
            price: '$200',
          },
        },
      },
      {
        id: 'nap\u00f3leon-taking-josephine-back-view',
        image: '/src/assets/img/nap\u00f3leonsLife/IMG_5197.JPG',
        translations: {
          ua: {
            title: 'Наполеон пользует Жозефіну (вигляд ззаду)',
            medium: 'папір, чорнила',
            year: '2026',
            size: '41x41 см',
            price: '$200',
          },
          en: {
            title: 'Napoleon Taking Josephine (Back View)',
            medium: 'paper, ink',
            year: '2026',
            size: '41x41 cm',
            price: '$200',
          },
          es: {
            title: 'Napole\u00f3n Poseyendo a Josefina (Vista Posterior)',
            medium: 'papel, tinta',
            year: '2026',
            size: '41x41 cm',
            price: '$200',
          },
        },
      },
      {
        id: 'nap\u00f3leon-buckwheat-sower',
        image: '/src/assets/img/nap\u00f3leonsLife/IMG_5198.JPG',
        translations: {
          ua: {
            title: 'Наполеон-гречкосій',
            medium: 'папір, чорнила',
            year: '2026',
            size: '41x41 см',
            price: '$200',
          },
          en: {
            title: 'Napoleon the Buckwheat Sower',
            medium: 'paper, ink',
            year: '2026',
            size: '41x41 cm',
            price: '$200',
          },
          es: {
            title: 'Napole\u00f3n el Sembrador de Alforf\u00f3n',
            medium: 'papel, tinta',
            year: '2026',
            size: '41x41 cm',
            price: '$200',
          },
        },
      },
      {
        id: 'nap\u00f3leon-traveler',
        image: '/src/assets/img/nap\u00f3leonsLife/IMG_5199.JPG',
        translations: {
          ua: {
            title: 'Наполеон-мандрівник',
            medium: 'папір, чорнила',
            year: '2026',
            size: '41x41 см',
            price: '$200',
          },
          en: {
            title: 'Napoleon the Traveler',
            medium: 'paper, ink',
            year: '2026',
            size: '41x41 cm',
            price: '$200',
          },
          es: {
            title: 'Napole\u00f3n el Viajero',
            medium: 'papel, tinta',
            year: '2026',
            size: '41x41 cm',
            price: '$200',
          },
        },
      },
    ],
  },
];

export const ART_SERIES_BY_SLUG = ART_SERIES.reduce<Record<string, TArtSeries>>(
  (acc, series) => {
    acc[series.slug] = series;
    return acc;
  },
  {}
);
