export const business = {
  name: "GM Construction Inc.",
  category: "Bathroom remodeler",
  town: "Park Forest, IL",
  street: "221 Arrowhead St",
  cityLine: "Park Forest, IL 60466",
  address: "221 Arrowhead St, Park Forest, IL 60466",
  phoneDisplay: "(630) 542-1983",
  phoneTel: "tel:+16305421983",
  website: "http://facebook.com/morenogmc",
  websiteNote: "Only known website.",
  rating: 5,
  reviewCount: 31,
} as const;

/** Preview cap for the local request list. Not a stock count. */
export const previewQuantityCap = 9;

export const priceLabel = "Price unverified";
export const stockLabel = "Stock unverified";

export type Service = {
  id: string;
  name: string;
  text: string;
  href: string;
  hrefLabel: string;
};

export const services: Service[] = [
  {
    id: "bathroom-remodeling",
    name: "Bathroom remodeling",
    text: "Bathroom remodeling is a listed service. Supplied photos show a white raised-panel vanity with a stone-look top, a tub-shower, and a marble-look shower.",
    href: "/work/marble-shower",
    hrefLabel: "View the shower sample",
  },
  {
    id: "custom-tile-showers",
    name: "Custom tile showers",
    text: "Custom tile showers are a listed service. One supplied photo shows a marble-look large-format shower with a sliding glass door, brass hardware, a mosaic floor, and a linear drain. Another shows a tub-shower with glossy white vertical tile, a gray mosaic band, a black rain head, and a hand shower.",
    href: "/work/marble-shower",
    hrefLabel: "View the shower sample",
  },
  {
    id: "kitchen-remodeling",
    name: "Kitchen remodeling",
    text: "Kitchen remodeling is a listed service. The supplied photo shows a white shaker kitchen with a subway-tile backsplash, black pulls, white counters, and a dark slate floor. The range is still wrapped.",
    href: "/work/white-kitchen",
    hrefLabel: "View the kitchen sample",
  },
  {
    id: "deck-stair-railings",
    name: "Deck and stair railings",
    text: "Deck and stair railings are a listed service. The supplied photo shows exterior deck stairs with white treads, a black metal rail, and brown deck boards.",
    href: "/work/deck-stairs",
    hrefLabel: "View the deck sample",
  },
  {
    id: "flooring",
    name: "Flooring",
    text: "Flooring is a listed service. Supplied photos show a dark slate kitchen floor, a mosaic shower floor, beige floor tile at a sink run, and wood-look plank in a finished lower level.",
    href: "/#project-photos",
    hrefLabel: "See project photos",
  },
];

export type CatalogImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sourceUrl: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  path: string;
  categoryId: string;
  categoryName: string;
  summary: string;
  facts: string[];
  image: CatalogImage;
  price: null;
  stock: "unverified";
};

export const products: Product[] = [
  {
    id: "marble-shower",
    slug: "marble-shower",
    name: "Marble-look sliding-glass shower",
    path: "/work/marble-shower",
    categoryId: "custom-tile-showers",
    categoryName: "Custom tile showers",
    summary:
      "Marble-look large-format shower with a sliding glass door, brass hardware, a mosaic floor, and a linear drain.",
    facts: [
      "Marble-look large-format tile",
      "Sliding glass door",
      "Brass hardware",
      "Mosaic floor",
      "Linear drain",
    ],
    image: {
      src: "/img/marble-shower.jpg",
      alt: "Marble-look large-format shower with a sliding glass door, brass hardware, a mosaic floor, and a linear drain.",
      width: 1200,
      height: 1600,
      sourceUrl:
        "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T2SpNus9PS4E_RcC3zR2hyd4o8QUVLA7bWtpPFvbRsyTSPwSakEV6em_6ibdGZtP7sS7Qq6R5zg2w9IUSqfkFYbnsVpdQDYs9laR55J1ybXynXbDmycHi78E2Ob3p21ux1J0xjLmkpuRY=w1600-h1600",
    },
    price: null,
    stock: "unverified",
  },
  {
    id: "white-kitchen",
    slug: "white-kitchen",
    name: "White shaker kitchen",
    path: "/work/white-kitchen",
    categoryId: "kitchen-remodeling",
    categoryName: "Kitchen remodeling",
    summary:
      "White shaker kitchen with a subway-tile backsplash, black pulls, white counters, and a dark slate floor. The range is still wrapped.",
    facts: [
      "White shaker cabinets",
      "Subway-tile backsplash",
      "Black pulls",
      "White counters",
      "Dark slate floor",
      "Range still wrapped",
    ],
    image: {
      src: "/img/kitchen-shaker.jpg",
      alt: "White shaker kitchen with a subway-tile backsplash, black pulls, white counters, and a dark slate floor. The range is still wrapped.",
      width: 1440,
      height: 1440,
      sourceUrl:
        "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QRqs4K94YJKAnkJ42nePAUGCzQ_ufOLO0VAO9epOz8KbqUg79dyP-cLC4R3X8fbbrjAmC1co6PD3UkkXxYQYPwn5XmMNsjE58bFvkdFnh78tTWBG-mC4AbO9cbufVM0MMxIzV6KA=w1600-h1600",
    },
    price: null,
    stock: "unverified",
  },
  {
    id: "deck-stairs",
    slug: "deck-stairs",
    name: "Deck stairs and black metal rail",
    path: "/work/deck-stairs",
    categoryId: "deck-stair-railings",
    categoryName: "Deck and stair railings",
    summary:
      "Exterior deck stairs with white treads, a black metal rail, and brown deck boards.",
    facts: ["Exterior deck stairs", "White treads", "Black metal rail", "Brown deck boards"],
    image: {
      src: "/img/deck-stairs.jpg",
      alt: "Exterior deck stairs with white treads, a black metal rail, and brown deck boards.",
      width: 1600,
      height: 1200,
      sourceUrl:
        "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SEoyPaMp0NbYPxAPN0rvuUyCJZi7uCTgE4Ix3GhlbeWRdp38UPymhuo43rEfkMu91WBvA2GBWdeHUeut4Xoy8EbWbWIuXzdWzzY08aIbsgppiJKjlDHIdymOhkl-sHSStK2KqBUu7wYMk=w1600-h1600",
    },
    price: null,
    stock: "unverified",
  },
];

export type GalleryPhoto = {
  id: string;
  caption: string;
  note?: string;
  image: CatalogImage;
};

export const gallery: GalleryPhoto[] = [
  {
    id: "privacy-fence",
    caption: "Light wood privacy fence.",
    note: "Project photo only. Fence building is not a listed service.",
    image: {
      src: "/img/privacy-fence.jpg",
      alt: "Light wood privacy fence. Project photo only. Fence building is not a listed service.",
      width: 1600,
      height: 1200,
      sourceUrl:
        "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TEWZub-GaBTRcGraFquAuySe6s9b1MS3QUAnisqp1O1_6R85sz_MJz7XqIZ2i-DKELirRv9HOEjoomXoLLP5X2KHsknL1kmxp8yfhrJen_FKKmQv-zsXrbUJ9B85IwLRJOucqwH-Mou3Va=w1600-h1600",
    },
  },
  {
    id: "vanity",
    caption: "White raised-panel vanity, stone-look top, chrome faucet, and a tall cabinet.",
    image: {
      src: "/img/vanity.jpg",
      alt: "White raised-panel vanity with a stone-look top, chrome faucet, and a tall cabinet.",
      width: 1440,
      height: 809,
      sourceUrl:
        "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RNLbuwe7xUEJfAysNYoOkDUzDKfNd6VfZfmJaWFQ_oAuNuTmCE6MqgUkRp6hsY3ho2sbttJuSHI12QIVWNBZoxAo4xQplgOOZcIeX7CW9lRrHSLKh3Ad-NH_XJwxr0VtE2260h=w1600-h1600",
    },
  },
  {
    id: "lower-level",
    caption: "Finished lower level with gray walls, a white louvered closet, wood-look plank floor, and exposed dark ducts.",
    image: {
      src: "/img/lower-level.jpg",
      alt: "Finished lower level with gray walls, a white louvered closet, wood-look plank floor, and exposed dark ducts.",
      width: 1200,
      height: 1600,
      sourceUrl:
        "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R3BtpZBN7dsoQZlOZDrhPQJd6y3nG5H5hPeiJHhmGyCVEML_IByytCbWzYEOIFo8m9br3nQ3ldLpkbE0cMO2SZwkJkzHu7MIJxAoZK7JS6Mu2XusZfl_LF4QkBSrIzSns8vQIETg=w1600-h1600",
    },
  },
  {
    id: "sink-run",
    caption: "Compact white-cabinet sink run with a black counter and beige floor tile.",
    image: {
      src: "/img/sink-run.jpg",
      alt: "Compact white-cabinet sink run with a black counter and beige floor tile.",
      width: 1080,
      height: 853,
      sourceUrl:
        "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TK7sM1sjVQJMZz6GAKbDJn5EXYdAzc7chzlgnhD3p2ngS01dXcialvF6Ody5qUvMxFe3JoZHYQ79SY94XKD43l6CvBdoRoRACAkGPAKA-2dZhkDGWuEbvFTJfClQ1ztxLiPBXbFHairDHN=w1600-h1600",
    },
  },
  {
    id: "tub-shower",
    caption: "Tub-shower with glossy white vertical tile, a gray mosaic band, a black rain head, a hand shower, and a white vanity.",
    image: {
      src: "/img/tub-shower.jpg",
      alt: "Tub-shower with glossy white vertical tile, a gray mosaic band, a black rain head, a hand shower, and a white vanity.",
      width: 1200,
      height: 1600,
      sourceUrl:
        "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SKvuy6Fnb1MWR-m2eDgj7Memu-ltYYM_qjzD6edVwXE4NzNqjZP701_G1cpqGba5hgY4EiQxKQXllJHcoVgkU1Ey9nBmxpMvg7QczK6VvyLzMABuVlnwSezKS7iKyNyS1DH4j_4g=w1600-h1600",
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function otherProducts(id: string): Product[] {
  return products.filter((product) => product.id !== id);
}
