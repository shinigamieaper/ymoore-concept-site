export const WHATSAPP = "https://wa.me/2348188548997";
export const PHONE_DISPLAY = "0818 854 8997";
export const INSTAGRAM = "https://www.instagram.com/yettymoore_concept/";
export const INSTAGRAM_HANDLE = "@yettymoore_concept";

export type Piece = {
  name: string;
  note: string;
  img: string;
  alt: string;
  shape: "tall" | "wide";
};

export const pieces: Piece[] = [
  {
    name: "Three seater, deep base",
    note: "Foam density and seat depth set to your preference. Fabric or leather.",
    img: "/img/sofa.jpg",
    alt: "Curved cream sofa in a sunlit sitting room",
    shape: "tall",
  },
  {
    name: "Six seater dining set",
    note: "Solid top with matching chairs, sized to the room rather than to a catalogue.",
    img: "/img/dining.jpg",
    alt: "Wooden dining table with leather chairs",
    shape: "tall",
  },
  {
    name: "Padded bed frame",
    note: "Headboard height and finish chosen by you. Storage base optional.",
    img: "/img/bed.jpg",
    alt: "Bed with a padded headboard and side tables",
    shape: "wide",
  },
  {
    name: "Slatted TV console",
    note: "Cut to your wall width so nothing sits awkwardly in the gap.",
    img: "/img/console.jpg",
    alt: "Slatted wooden sideboard in raking sunlight",
    shape: "tall",
  },
  {
    name: "Two door wardrobe",
    note: "Fitted or freestanding, built around the wall you actually have.",
    img: "/img/wardrobe.jpg",
    alt: "Wooden wardrobe against a white wall",
    shape: "tall",
  },
  {
    name: "Desk and work chair",
    note: "For home offices and reception areas. Cable routing built in.",
    img: "/img/office.jpg",
    alt: "Wooden desk and chair in a bright room",
    shape: "wide",
  },
];

export type Category = { name: string; items: string; img: string; alt: string };

export const categories: Category[] = [
  {
    name: "Sofas and seating",
    items: "Three and two seaters, corner units, ottomans, accent chairs",
    img: "/img/sofa.jpg",
    alt: "Cream sofa in a sunlit room",
  },
  {
    name: "Beds and wardrobes",
    items: "Padded frames, storage bases, fitted and freestanding wardrobes",
    img: "/img/bed.jpg",
    alt: "Bed with a padded headboard",
  },
  {
    name: "Dining sets",
    items: "Four, six and eight seaters, benches, bar stools",
    img: "/img/dining.jpg",
    alt: "Dining table with chairs",
  },
  {
    name: "TV stands and centre tables",
    items: "Consoles, coffee tables, side units",
    img: "/img/console.jpg",
    alt: "Wooden sideboard console",
  },
  {
    name: "Office furniture",
    items: "Desks, work chairs, reception and boardroom pieces",
    img: "/img/office.jpg",
    alt: "Desk and chair in a bright workspace",
  },
  {
    name: "Custom made pieces",
    items: "Doors, kitchen cabinets, fittings, anything drawn to your spec",
    img: "/img/workshop.jpg",
    alt: "Furniture workshop with tools and timber",
  },
];

export const steps = [
  {
    n: "01",
    title: "Tell us the room",
    note: "Send measurements or photos on WhatsApp. If you are unsure, we come and measure.",
  },
  {
    n: "02",
    title: "Agree the design",
    note: "Shape, fabric, finish and price, confirmed in writing before work starts.",
  },
  {
    n: "03",
    title: "We build it",
    note: "Made in our Lagos workshop. You get progress pictures as it comes together.",
  },
  {
    n: "04",
    title: "Delivered and set up",
    note: "Brought in, positioned and installed. Nationwide, not Lagos only.",
  },
];

export type Way = { title: string; note: string; cta: string };

export const ways: Way[] = [
  {
    title: "We deliver to you",
    note: "Order from here or on WhatsApp and we bring it to your door. Nationwide delivery, not Lagos only.",
    cta: "Order a piece",
  },
  {
    title: "Come and see it",
    note: "Visit us to sit on the frames, feel the fabrics and look at finishes in person before you commit.",
    cta: "Book a showroom visit",
  },
  {
    title: "We come to you",
    note: "For interior design and site jobs we come to the space, measure it and plan the room with you.",
    cta: "Book a site visit",
  },
];

export const rates = [
  { item: "Door production", price: "N4,000", unit: "per board" },
  { item: "Kitchen cabinets", price: "N3,500", unit: "per unit" },
  { item: "Wardrobes", price: "N3,500", unit: "per unit" },
];

export const pieceOptions = [
  "Sofa or seating",
  "Bed or wardrobe",
  "Dining set",
  "TV stand or centre table",
  "Office furniture",
  "Custom piece, doors or cabinets",
  "Full interior design",
];

export const contactModes = [
  "Deliver it to me",
  "I want to visit and see it",
  "Come to my space",
];
