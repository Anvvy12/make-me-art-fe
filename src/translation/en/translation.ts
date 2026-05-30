export default {
  page: {
    main: {
      hero_sct: {
        subtitle: 'Contemporary artist',
        title: "The World Through the Artist's Eyes",
        description:
          'Surreal works born at the intersection of dream and reality. Every line is a story, every stroke is an emotion frozen on paper.',
        works_btn: 'Works',
        about_btn: 'About me',
      },
      exhibition_sct: {
        eyebrow: 'Exhibition / 2025-2026',
        title: 'A Visual Study of Everyday Life',
        lead: 'I do not adapt circumstances to my work — I adapt my work to circumstances. For me, art does not exist separately from life. It is born from emotional states, environments, coincidences, and the moments I live through. I do not try to create ideal conditions for creativity; instead, I allow life itself to influence it.',
        photos_aria: 'Photos from the installation process',
        gallery_alt: 'Sofi installing artworks in the gallery',
        studio_alt: 'Sofi artworks on the studio floor',
        mono_alt: 'Black-and-white photo of Sofi arranging artworks',

        statements: [
          {
            title: 'Human Resource',
            text: 'The artist’s work is a visual exploration of human potential, its inexhaustibility, and its often overlooked strength. As an attentive observer, she captures everyday life, transforming daily routine into profound social and emotional manifestos.',
          },

          {
            title: 'Office Plankton',
            text: '“Office Plankton” series. The works emerged from long-term observation of apartment hotel residents and coworking visitors. Living at the epicenter of business rhythm, the artist documented the lives of people whose existence is confined within office walls.',
          },

          {
            title: 'Women from the Studio Window',
            text: 'A separate section is dedicated to the image of women Sofi observed from her studio window: women in sundresses climbing uphill with heavy bags; mothers in robes washing clothes by hand in the morning fog; a grandmother searching her pocket for peanuts for a child.',
          },
        ],

        final: {
          label: 'The Most Intimate Work',
          title: 'Portrait of a Woman Who Lost Everything',
          text_1:
            'To convey the depth of another person’s pain, which the artist felt as her own, she used her own blood. Due to the lack of tools, which broke during the creation of a large-scale glass project, the blood was drawn using a watch pin.',
          text_2:
            'This act became the highest point of empathy — the moment when the boundary between creator and subject disappears.',
        },
      },
      about_sct: {
        name: 'Sophie Roman',
        description: 'Kyiv-based artist. Contemporary and naive art.',
        img_alt: 'Sophie Roman',
      },
      gallery_sct: {
        title: 'Gallery',
        card: {
          img_alt: 'Group of artworks',
          view_btn: 'View',
          paintings_count: '{{count}} paintings',
        },
        groups: {
          men: 'Men',
          rutine: 'Routine',
          office_new_year: "Office Plankton's New Year",
          napoleon_life: 'Napoleonic Life',
        },
      },
      art_sct: {
        comedy: {
          header: '"Comedy of Observation"',
          desc: 'My practice is based on observing life. I explore everyday reality and transform familiar routines into visual images, and people into ironic projections. At the core of my subjects are my personal feelings on the edge of everyday absurdity and the simple experience of being, an attempt to find happiness in the things that surround me. For me, art is not about searching for lofty ideals, but about taking an honest look at who we truly are when no one is watching.',
          img_desc: 'Photo of a work from the "Wallpaper" series',
        },
        sense: {
          header: '"The Meaning Is That I Am Interested"',
          desc: "The main criterion in my work is honesty. I believe that the author's sincere interest in the process is the true meaning of the artwork. I work in a naive style. It is the only way to capture what is happening now, what I do not have enough words for. I consciously avoid any interpretations of my own works so as not to distort the viewer's perception. What do you see in these ironic faces? Yourself, a neighbor, or something you are afraid to admit? Your answer is the true completion of my painting.",
          img_desc: 'Photo from the "Octopus Ovulation" series',
        },
        transformation: {
          header: '"Transformation"',
          img_desc: 'Photo of the work "Diary"',
          desc: 'Today, my perspective shifted. It is hard to ignore the way war turns people inside out. Life, where morning coffee becomes a routine just to be able to work after a sleepless night filled with shelling, explosions, and grief. It is difficult for me to talk about this. I see how people tense their shoulders in a crowd, how their facial expressions have changed, and how little emotion remains. What is it like to live, work, fear, and laugh for people who are no longer able to feel emotions? I continue to explore this question, just as I continue to create something with the constant thought: "Am I really living in the 21st century?"',
        },
      },
    },
    type_gallery: {
      works: 'works',
      materials: 'Materials',
      year: 'Year',
      size: 'Size',
      price: 'Price',
      view_details: 'View',
      open_artwork: 'Open artwork',
      close: 'Close',
      not_found_title: 'Series not found',
      not_found_desc: 'Choose a series from the gallery.',
    },
    gallery: {
      title: 'All artworks',
      works: 'works',
      materials: 'Materials',
      year: 'Year',
      size: 'Size',
      price: 'Price',
      view_details: 'View',
      open_artwork: 'Open artwork',
      close: 'Close',
    },
  },
  common: {
    header: {},
    footer: {},
    contact_modal: {
      title: 'Contact with author',
      name_label: 'Name*',
      name_required: 'Name is required',
      email_label: 'Email*',
      email_required: 'Email is required',
      email_invalid: 'Enter a valid email',
      message_label: 'Message*',
      message_required: 'Message is required',
      message_placeholder: 'Type your message here',
      message_default:
        'I am interested in your artwork and I would like to get "{{artworkTitle}}" picture to my collection\n\nPlease contact me!\n\nBest regards!',
      submit_btn: 'Submit',
      close_label: 'Close contact form',
      contact_author: 'Contact with author',
    },
    language: {
      label: 'Language',
      en: 'EN',
      ua: 'UA',
      es: 'ES',
    },
    nav: {
      main: 'Home',
      gallery: 'Gallery',
      about: 'About me',
    },
    notify: {
      success: 'Your email was sent successfully',
      error: 'Something went wrong, please try again later',
    },
  },
};
