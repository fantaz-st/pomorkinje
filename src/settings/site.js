const site = {
  name: "Pomorkinje 4.0",
  description: "Jednakost, tehnologija i more",
  locale: "hr",

  menu: {
    hr: "main-menu-hr",
    en: "main-menu-en",
  },

  header: {
    sticky: true,
    transparent: false,
    textColorInvert: false,
    height: 72,
    solidOnScroll: true,
    solidOnScrollOffset: 12,
  },

  footer: {
    variant: "simple",

    summary: {
      title: "Pomorkinje 4.0",
      text: {
        en: "Equality, technology and the sea",
        hr: "Jednakost, tehnologija i more",
      },
    },

    links: [
      { label: "PFST", href: "https://www.pfst.unist.hr" },
      { label: "University of Split", href: "https://www.unist.hr" },
    ],

    copyright: {
      owner: {
        en: "Faculty of Maritime Studies, University of Split",
        hr: "Sveučilište u Splitu, Pomorski fakultet",
      },
      year: "auto",
    },
  },

  backToTop: {
    enabled: true,
    showAfter: 300,
    position: "right",
  },

  project: {
    title: {
      hr: "Pomorkinje 4.0 – jednakost, tehnologija i more",
      en: "Pomorkinje 4.0 – equality, technology and the sea",
    },

    acronym: "Pomorkinje 4.0",

    coordinator: {
      hr: "Pomorski fakultet, Sveučilište u Splitu",
      en: "Faculty of Maritime Studies, University of Split",
    },

    lead: {
      hr: "doc. dr. sc. Zaloa Sánchez Varela",
      en: "Assoc. Prof. Zaloa Sánchez Varela",
    },

    funding: {
      hr: "NPOO - programski ugovori",
      en: "NPOO - programme contracts",
    },

    value: "238.049,99 €",

    duration: {
      hr: "1. listopada 2025. – 30. rujna 2029.",
      en: "1 October 2025 – 30 September 2029",
    },

    shortDescription: {
      hr: "Projekt usmjeren na unapređenje položaja žena u pomorstvu kroz istraživanje, razvoj digitalnih alata i društvenu angažiranost.",
      en: "A project focused on improving the position of women in maritime affairs through research, digital tools and social engagement.",
    },

    description: {
      hr: `Projekt "Pomorkinje 4.0 – jednakost, tehnologija i more" ima za cilj unaprijediti položaj žena u pomorstvu kroz interdisciplinarni pristup koji uključuje znanstveno istraživanje, razvoj digitalnih alata i društvenu angažiranost. Polazeći od činjenice da žene čine manje od 2% brodske posade u svijetu, projekt adresira nedostatak istraživanja o njihovim uvjetima rada, sigurnosti i vidljivosti u sektoru.

Projekt je strukturiran u četiri radna paketa: (1) analiza ergonomije brodske opreme iz spolne perspektive, (2) razvoj koncepta mobilne aplikacije za dojavu neprimjerenih situacija na brodu, (3) uspostava digitalne platforme za informiranje i umrežavanje žena u pomorstvu, te (4) osnivanje udruge "Pomorkinje RH" radi institucionalne održivosti rezultata.

Metodološki pristup uključuje online ankete, statističku obradu podataka, razvoj prototipa aplikacije i javnu diseminaciju putem godišnjih tribina i digitalnih kanala. Projekt izravno doprinosi programskim ciljevima u području jednakosti spolova, digitalizacije i znanstvene diseminacije. Predlagateljica projekta je znanstvenica i pomorkinja, čime osigurava dublje razumijevanje teme i potrebe za promjenom. Projekt će rezultirati trajnim infrastrukturnim, znanstvenim i društvenim učincima.`,
      en: `The project "Pomorkinje 4.0 – equality, technology and the sea" aims to improve the position of women in maritime affairs through an interdisciplinary approach that combines scientific research, the development of digital tools and social engagement. Starting from the fact that women make up less than 2% of ship crews worldwide, the project addresses the lack of research on their working conditions, safety and visibility in the sector.

The project is structured into four work packages: (1) analysis of ship equipment ergonomics from a gender perspective, (2) development of a concept for a mobile application for reporting inappropriate situations on board, (3) establishment of a digital platform for informing and networking women in maritime affairs, and (4) founding the association "Pomorkinje RH" to ensure the institutional sustainability of the results.

The methodological approach includes online surveys, statistical data processing, prototype development, and public dissemination through annual public forums and digital channels. The project directly contributes to programme goals in gender equality, digitalisation and scientific dissemination. The project proposer is both a researcher and a seafarer, ensuring a deeper understanding of the topic and the need for change. The project will result in lasting infrastructural, scientific and social impacts.`,
    },

    workPackages: [
      {
        slug: "ergonomija",
        short: "WP1",
        title: {
          hr: "Ergonomija",
          en: "Ergonomics",
        },
        description: {
          hr: "Analiza ergonomije brodske opreme iz spolne perspektive.",
          en: "Analysis of ship equipment ergonomics from a gender perspective.",
        },
      },
      {
        slug: "sigurnost",
        short: "WP2",
        title: {
          hr: "Sigurnost",
          en: "Safety",
        },
        description: {
          hr: "Razvoj koncepta mobilne aplikacije za dojavu neprimjerenih situacija na brodu.",
          en: "Development of a mobile app concept for reporting inappropriate situations on board.",
        },
      },
      {
        slug: "bilten",
        short: "WP3",
        title: {
          hr: "Bilten",
          en: "Bulletin",
        },
        description: {
          hr: "Objava tekstova, novosti i sadržaja vezanih uz projekt.",
          en: "Publication of articles, updates and project-related content.",
        },
      },
      {
        slug: "udruga-pomorkinje",
        short: "WP4",
        title: {
          hr: "Udruga Pomorkinje",
          en: "Pomorkinje Association",
        },
        description: {
          hr: 'Osnivanje udruge "Pomorkinje RH" radi institucionalne održivosti rezultata.',
          en: 'Founding the association "Pomorkinje RH" for the institutional sustainability of the results.',
        },
      },
    ],
  },
};

export default site;
