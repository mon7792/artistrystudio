export interface Piece {
  id: string;
  title: string;
  category: string;
  img: string;
  aspect: string;
}

export interface Pillar {
  id: string;
  label: string;
  blurb: string;
  pieces: Piece[];
}

export const pillars: Pillar[] = [
  {
    id: "ocean",
    label: "Wedding Rituals",
    blurb:
      "Hand-crafted resin canvases that hold a wedding's quiet rituals — the varmala, the haldi, the first vow. Made to gift, to keep, to display.",
    pieces: [
      {
        id: "ocean-1",
        title: "Minaz & Suhail",
        category: "Wedding ring tray · resin & gold leaf",
        img: "/products/wedding-rituals-1.webp",
        aspect: "aspect-[4/3]",
      },
      {
        id: "ocean-2",
        title: "Kashika & Yash",
        category: "Vow tray · resin, gold leaf & florals",
        img: "/products/wedding-rituals-2.webp",
        aspect: "aspect-[4/5]",
      },
      {
        id: "ocean-3",
        title: "Baran & Mrunnmayee",
        category: "Custom wedding stationery · watercolor & gold foil",
        img: "/products/wedding-rituals-3.webp",
        aspect: "aspect-[3/4]",
      },
      {
        id: "ocean-4",
        title: "Nikita & Pranav",
        category: "Ring platter · dried florals, pearls & gold leaf",
        img: "/products/wedding-rituals-4.webp",
        aspect: "aspect-[4/3]",
      },
    ],
  },
  {
    id: "keepsakes",
    label: "Timeless Creations",
    blurb:
      "Hand-cast resin timepieces — marbled blues, ocean waves, golden hour. Functional art you'll live with for years, each one one-of-one.",
    pieces: [
      {
        id: "keep-2",
        title: "Coastline, Telling Time",
        category: "Resin wall clock · shells & gold leaf",
        img: "/products/timeless-creation-1.webp",
        aspect: "aspect-[4/3]",
      },
      {
        id: "keep-1",
        title: "Hours in Marble",
        category: "Resin clock · blue, purple & gold leaf",
        img: "/products/timeless-creation-2.webp",
        aspect: "aspect-[3/4]",
      },
      {
        id: "keep-4",
        title: "Forest, Frozen",
        category: "Resin clock · winter pines & gold sun",
        img: "/products/timeless-creation-3.webp",
        aspect: "aspect-[2/3]",
      },
      {
        id: "keep-3",
        title: "The Geode Hour",
        category: "Resin wall clock · turquoise & silver flake",
        img: "/products/timeless-creation-4.webp",
        aspect: "aspect-[4/3]",
      },
    ],
  },
  {
    id: "custom",
    label: "Custom & Themed Commissions",
    blurb:
      "Bespoke pieces built around an object, an obsession, a story. The Porsche, the cricket bat, the heirloom.",
    pieces: [
      {
        id: "cust-1",
        title: "Our Precious Miracle",
        category: "Custom keepsake · gold-cast hand & feet, framed",
        img: "/products/custom-1.webp",
        aspect: "aspect-[4/3]",
      },
      {
        id: "cust-2",
        title: "1202 Thombre's",
        category: "Custom address plaque · ocean resin & 3D lettering",
        img: "/products/custom-2.webp",
        aspect: "aspect-[3/4]",
      },
      {
        id: "cust-3",
        title: "Boy or Girl, Nobody Knows",
        category: "Gender-reveal sign · hand-painted, florals",
        img: "/products/custom-3.webp",
        aspect: "aspect-[3/4]",
      },
      {
        id: "cust-4",
        title: "Sunflower Bloom",
        category: "Framed digital art · warm-toned floral",
        img: "/products/custom-4.webp",
        aspect: "aspect-[4/3]",
      },
    ],
  },
];
