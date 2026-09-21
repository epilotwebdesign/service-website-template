import birthdayMartini1 from "../assets/martinis/birthday-martini-1.jpg";
import bearMartiniWhite from "../assets/martinis/bear-martini-white.jpg";
import birthdayMartiniRose from "../assets/martinis/birthday-martini-rose.jpg";
import bearMartiniGreen from "../assets/martinis/bear-martini-green.jpg";

export type Product = {
  name: string;
  price: number;
  note?: string;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  products: Product[];
  notes?: string[];
  safetyNote?: string;
  images: string[];
  imagePlaceholders?: number;
  imageAspect?: string;
  priceOnEnquiry?: string;
};

export const categories: Category[] = [
  {
    id: "martinis",
    name: "Martinis",
    description:
      "Layered candles poured into a martini glass and topped with hand-shaped decorations — a striking centrepiece for birthdays and celebrations.",
    products: [
      { name: "Birthday Martini", price: 26 },
      { name: "Bear Martini", price: 24 },
    ],
    notes: ["Any colour / scent"],
    safetyNote:
      "These candles are made for display purpose and should not be burnt due to glass shatter risk.",
    images: [
      birthdayMartini1,
      bearMartiniWhite,
      birthdayMartiniRose,
      bearMartiniGreen,
    ],
  },
  {
    id: "bouquets",
    name: "Standard Bouquets",
    description:
      "Hand-shaped soy wax roses and tulips, wrapped just like a fresh bouquet — a gift that keeps going long after real flowers would.",
    products: [
      { name: "Small", price: 30 },
      { name: "Medium", price: 36 },
      { name: "Large", price: 44 },
    ],
    notes: [
      "Can be made in any colour or scent.",
      "Want to bundle a bouquet with a martini candle? Price on enquiry.",
    ],
    images: [],
    imagePlaceholders: 5,
  },
  {
    id: "heart-bouquets",
    name: "Heart Bouquets",
    description:
      "Rose candles arranged into a heart, finished with gyp and eucalyptus — a romantic take on the classic bouquet.",
    products: [{ name: "One Size", price: 45 }],
    notes: ["Any colour or scent available.", "Display candles"],
    safetyNote:
      "If you'd like to burn the candles, remove the flowers from the bouquet first and place them on a heat-resistant surface. Lighting them inside the bouquet risks fire.",
    images: [],
    imagePlaceholders: 3,
  },
  {
    id: "hat-boxes",
    name: "Hat Boxes",
    description:
      "A full arrangement of hand-shaped rose candles, dried grasses and gyp, finished in a keepsake box.",
    products: [
      { name: "Small", price: 35 },
      { name: "Medium", price: 45 },
      { name: "Large", price: 55 },
      { name: "XL", price: 65 },
    ],
    notes: [
      "Can be made in any colour or scent.",
      "Please allow a minimum of 2 weeks' notice.",
      "Display candles",
    ],
    safetyNote:
      "If you'd like to burn the candles, remove the flowers from the arrangement first and place them on a heat-resistant surface. Lighting them inside the box risks fire.",
    images: [],
    imagePlaceholders: 3,
  },
  {
    id: "gift-boxes",
    name: "Gift Boxes",
    description:
      "Small keepsake boxes with a teddy bear or peony candle — ready-made favours or a little something extra.",
    products: [
      { name: "Teddy Bear Gift Box", price: 4.5 },
      { name: "Peony Candle Gift Box", price: 5 },
      { name: "Large Box (Peony & Teddy Bear)", price: 10 },
    ],
    notes: [
      "Can be made in any colour or scent.",
      "Large orders for occasions — price on enquiry.",
    ],
    images: [],
    imagePlaceholders: 2,
    imageAspect: "aspect-[3/2]",
  },
  {
    id: "event-favours",
    name: "Event Favours",
    description:
      "Christenings, graduations, weddings and birthdays — favours made to match your colours, theme and names or dates.",
    products: [],
    priceOnEnquiry: "Price on enquiry, depending on occasion and quantity.",
    images: [],
    imagePlaceholders: 5,
  },
];
