/**
 * Sample catalog for GM Construction Inc.
 * `products` is the only request-list data. Do not invent products, prices,
 * stock, part numbers, reviews, hours, or awards.
 * Photo files live in /public/img. sourceUrl keeps the supplied Google URL.
 * A ninth undescribed grass-cs URL was not used. The brief allows eight photos.
 */

export const business = {
  name: "GM Construction Inc.",
  category: "Bathroom remodeler",
  town: "Park Forest, IL",
  address: {
    street: "221 Arrowhead St",
    city: "Park Forest",
    state: "IL",
    postalCode: "60466",
    full: "221 Arrowhead St, Park Forest, IL 60466",
  },
  phoneRaw: "16305421983",
  phoneDisplay: "(630) 542-1983",
  phoneTel: "+16305421983",
  email: null,
  website: "http://facebook.com/morenogmc",
  websiteLabel: "Facebook",
  rating: {
    score: 5,
    count: 31,
  },
};

export const discovery = {
  source: "n8n_plain_http_homepage",
  origin: "http://facebook.com/morenogmc",
  discovered: false,
  httpStatus: 301,
  note: "The Facebook page is the only known website. Homepage text, navigation, and footer links were not returned.",
};

export const primaryNav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "Contact", to: "/contact" },
];

export const photos = [
  {
    id: "kitchen-shaker",
    src: "/img/kitchen-shaker.jpg",
    width: 1440,
    height: 1440,
    alt: "White shaker kitchen with subway-tile backsplash, black pulls, white counters, and a dark slate floor. The range is still wrapped.",
    caption:
      "White shaker kitchen, subway-tile backsplash, black pulls, white counters, dark slate floor. The range is still wrapped.",
    sourceUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QRqs4K94YJKAnkJ42nePAUGCzQ_ufOLO0VAO9epOz8KbqUg79dyP-cLC4R3X8fbbrjAmC1co6PD3UkkXxYQYPwn5XmMNsjE58bFvkdFnh78tTWBG-mC4AbO9cbufVM0MMxIzV6KA=w1600-h1600",
  },
  {
    id: "deck-stairs",
    src: "/img/deck-stairs.jpg",
    width: 1600,
    height: 1200,
    alt: "Exterior deck stairs with white treads, a black metal rail, and brown deck boards.",
    caption: "Exterior deck stairs, white treads, black metal rail, brown deck boards.",
    sourceUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SEoyPaMp0NbYPxAPN0rvuUyCJZi7uCTgE4Ix3GhlbeWRdp38UPymhuo43rEfkMu91WBvA2GBWdeHUeut4Xoy8EbWbWIuXzdWzzY08aIbsgppiJKjlDHIdymOhkl-sHSStK2KqBUu7wYMk=w1600-h1600",
  },
  {
    id: "marble-shower",
    src: "/img/marble-shower.jpg",
    width: 1200,
    height: 1600,
    alt: "Marble-look large-format shower with a sliding glass door, brass hardware, a mosaic floor, and a linear drain.",
    caption:
      "Marble-look large-format shower, sliding glass door, brass hardware, mosaic floor, linear drain.",
    sourceUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T2SpNus9PS4E_RcC3zR2hyd4o8QUVLA7bWtpPFvbRsyTSPwSakEV6em_6ibdGZtP7sS7Qq6R5zg2w9IUSqfkFYbnsVpdQDYs9laR55J1ybXynXbDmycHi78E2Ob3p21ux1J0xjLmkpuRY=w1600-h1600",
  },
  {
    id: "privacy-fence",
    src: "/img/privacy-fence.jpg",
    width: 1600,
    height: 1200,
    alt: "Light wood privacy fence. Shown as a project photo only. Fence building is not a listed service.",
    caption:
      "Light wood privacy fence. Gallery photo only. Fence building is not a listed service.",
    sourceUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TEWZub-GaBTRcGraFquAuySe6s9b1MS3QUAnisqp1O1_6R85sz_MJz7XqIZ2i-DKELirRv9HOEjoomXoLLP5X2KHsknL1kmxp8yfhrJen_FKKmQv-zsXrbUJ9B85IwLRJOucqwH-Mou3Va=w1600-h1600",
  },
  {
    id: "vanity",
    src: "/img/vanity.jpg",
    width: 1440,
    height: 809,
    alt: "White raised-panel vanity with a stone-look top, chrome faucet, and a tall cabinet.",
    caption: "White raised-panel vanity, stone-look top, chrome faucet, tall cabinet.",
    sourceUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RNLbuwe7xUEJfAysNYoOkDUzDKfNd6VfZfmJaWFQ_oAuNuTmCE6MqgUkRp6hsY3ho2sbttJuSHI12QIVWNBZoxAo4xQplgOOZcIeX7CW9lRrHSLKh3Ad-NH_XJwxr0VtE2260h=w1600-h1600",
  },
  {
    id: "lower-level",
    src: "/img/lower-level.jpg",
    width: 1200,
    height: 1600,
    alt: "Finished lower level with gray walls, a white louvered closet, wood-look plank floor, and exposed dark ducts.",
    caption:
      "Finished lower level, gray walls, white louvered closet, wood-look plank floor, exposed dark ducts.",
    sourceUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R3BtpZBN7dsoQZlOZDrhPQJd6y3nG5H5hPeiJHhmGyCVEML_IByytCbWzYEOIFo8m9br3nQ3ldLpkbE0cMO2SZwkJkzHu7MIJxAoZK7JS6Mu2XusZfl_LF4QkBSrIzSns8vQIETg=w1600-h1600",
  },
  {
    id: "sink-run",
    src: "/img/sink-run.jpg",
    width: 1080,
    height: 853,
    alt: "Compact run of white cabinets with a black counter and beige floor tile.",
    caption: "Compact white-cabinet sink run, black counter, beige floor tile.",
    sourceUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TK7sM1sjVQJMZz6GAKbDJn5EXYdAzc7chzlgnhD3p2ngS01dXcialvF6Ody5qUvMxFe3JoZHYQ79SY94XKD43l6CvBdoRoRACAkGPAKA-2dZhkDGWuEbvFTJfClQ1ztxLiPBXbFHairDHN=w1600-h1600",
  },
  {
    id: "tub-shower",
    src: "/img/tub-shower.jpg",
    width: 1200,
    height: 1600,
    alt: "Tub-shower with glossy white vertical tile, a gray mosaic band, a black rain head, a black hand shower, and a white vanity.",
    caption:
      "Tub-shower, glossy white vertical tile, gray mosaic band, black rain head and hand shower, white vanity.",
    sourceUrl:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SKvuy6Fnb1MWR-m2eDgj7Memu-ltYYM_qjzD6edVwXE4NzNqjZP701_G1cpqGba5hgY4EiQxKQXllJHcoVgkU1Ey9nBmxpMvg7QczK6VvyLzMABuVlnwSezKS7iKyNyS1DH4j_4g=w1600-h1600",
  },
];

export const heroPhotoId = "marble-shower";

export const homeBandPhotoIds = ["kitchen-shaker", "tub-shower", "deck-stairs"];

export const galleryPhotoIds = [
  "privacy-fence",
  "vanity",
  "lower-level",
  "sink-run",
  "tub-shower",
];

export const categories = [
  {
    id: "showers",
    name: "Showers",
    path: "/work/category/showers",
    summary: "One photo-backed shower sample. Price and stock are not verified.",
  },
  {
    id: "kitchens",
    name: "Kitchens",
    path: "/work/category/kitchens",
    summary: "One photo-backed kitchen sample. Price and stock are not verified.",
  },
  {
    id: "decks",
    name: "Decks",
    path: "/work/category/decks",
    summary: "One photo-backed deck and stair sample. Price and stock are not verified.",
  },
];

export const products = [
  {
    id: "marble-shower",
    slug: "marble-shower",
    name: "Marble-look sliding glass shower",
    partNumber: null,
    categoryId: "showers",
    photoId: "marble-shower",
    price: null,
    stock: null,
    path: "/work/marble-shower",
    summary:
      "Marble-look large-format shower with a sliding glass door, brass hardware, a mosaic floor, and a linear drain.",
    detail:
      "This sample is the marble-look shower in the supplied project photos. The photo shows large-format marble-look tile, a sliding glass door, brass hardware, a mosaic floor, and a linear drain. No part number, price, or stock count was supplied.",
  },
  {
    id: "white-kitchen",
    slug: "white-kitchen",
    name: "White shaker kitchen",
    partNumber: null,
    categoryId: "kitchens",
    photoId: "kitchen-shaker",
    price: null,
    stock: null,
    path: "/work/white-kitchen",
    summary:
      "White shaker kitchen with a subway-tile backsplash, black pulls, white counters, and a dark slate floor. The range in the photo is still wrapped.",
    detail:
      "This sample is the white shaker kitchen in the supplied project photos. The photo shows shaker doors, a subway-tile backsplash, black pulls, white counters, and a dark slate floor. The range is still wrapped. No part number, price, or stock count was supplied.",
  },
  {
    id: "deck-stairs",
    slug: "deck-stairs",
    name: "Deck stairs with black metal rail",
    partNumber: null,
    categoryId: "decks",
    photoId: "deck-stairs",
    price: null,
    stock: null,
    path: "/work/deck-stairs",
    summary:
      "Exterior deck stairs with white treads, a black metal rail, and brown deck boards.",
    detail:
      "This sample is the deck stairs in the supplied project photos. The photo shows white treads, a black metal rail, and brown deck boards. No part number, price, or stock count was supplied.",
  },
];

export const services = [
  {
    id: "bathroom-remodeling",
    name: "Bathroom remodeling",
    productId: null,
    photoIds: ["vanity", "sink-run", "tub-shower"],
    summary:
      "Bathroom remodeling is a supplied service line. Photos show a white raised-panel vanity with a stone-look top and chrome faucet, a compact white-cabinet sink with a black counter, and a tiled tub-shower. No price is listed.",
  },
  {
    id: "custom-tile-showers",
    name: "Custom tile showers",
    productId: "marble-shower",
    photoIds: ["marble-shower", "tub-shower"],
    summary:
      "Custom tile showers are a supplied service line. One photo is a marble-look large-format shower with a sliding glass door, brass hardware, a mosaic floor, and a linear drain. Another is a tub-shower with glossy white vertical tile, a gray mosaic band, a black rain head, and a black hand shower. No price is listed.",
  },
  {
    id: "kitchen-remodeling",
    name: "Kitchen remodeling",
    productId: "white-kitchen",
    photoIds: ["kitchen-shaker"],
    summary:
      "Kitchen remodeling is a supplied service line. The supplied photo shows a white shaker kitchen, subway-tile backsplash, black pulls, white counters, and a dark slate floor. The range is still wrapped. No price is listed.",
  },
  {
    id: "deck-stair-railings",
    name: "Deck and stair railings",
    productId: "deck-stairs",
    photoIds: ["deck-stairs"],
    summary:
      "Deck and stair railings are a supplied service line. The supplied photo shows exterior deck stairs with white treads, a black metal rail, and brown deck boards. No price is listed.",
  },
  {
    id: "flooring",
    name: "Flooring",
    productId: null,
    photoIds: ["lower-level"],
    summary:
      "Flooring is a supplied service line. Supplied photos include a dark slate kitchen floor, a mosaic shower floor, beige floor tile, and wood-look plank in a finished lower level. No price is listed.",
  },
];

const photoMap = Object.fromEntries(photos.map((photo) => [photo.id, photo]));
const productMap = Object.fromEntries(products.map((product) => [product.id, product]));
const categoryMap = Object.fromEntries(categories.map((category) => [category.id, category]));

export function photoById(id) {
  return photoMap[id] ?? null;
}

export function productById(id) {
  return productMap[id] ?? null;
}

export function productBySlug(slug) {
  return products.find((product) => product.slug === slug) ?? null;
}

export function categoryById(id) {
  return categoryMap[id] ?? null;
}

export function productsByCategory(categoryId) {
  return products.filter((product) => product.categoryId === categoryId);
}

export function presentProduct(product) {
  if (!product) return null;
  return {
    ...product,
    price: null,
    stock: null,
    photo: photoById(product.photoId),
    category: categoryById(product.categoryId),
  };
}
