import collection_1 from "./collection_1.jpg";
import collection_2 from "./collection_2.png";
import collection_3 from "./collection_3.png";
import collection_4 from "./collection_4.png";
import collection_5 from "./collection_5.png";
import collection_6 from "./collection_6.jpg";
import collection_7 from "./collection_7.png";
import collection_8 from "./electro_2.png";

const collections = [
  {
    id: 1,
    title: "Winter Collection",
    categoryName: "Women",
    description: "Light & trendy seasonal outfits",
    link: "/women",
    image: collection_1,
    badge: "Trending",
  },
  {
    id: 2,
    title: "Formal Wear",
    categoryName: "Men",
    description: "Elegant office & business looks",
    link: "/men",
    image: collection_2,
    badge: "Hot",
  },
  {
    id: 3,
    title: "Men's Wear",
    categoryName: "Men",
    description: "Latest fashion shirts & pants for men",
    link: "/men",
    image: collection_3,
    badge: "Popular",
  },
  {
    id: 4,
    title: "Women's Wear",
    categoryName: "Women",
    description: "New seasonal arrivals for women",
    link: "/women",
    image: collection_4,
    badge: "New",
  },
  {
    id: 5,
    title: "Kids Collection",
    categoryName: "Kids",
    description: "Cute, comfy & playful outfits",
    link: "/kids",
    image: collection_5,
    badge: "Kids Special",
  },
  {
    id: 6,
    title: "Summer Collection",
    categoryName: "Men",
    description: "Cool & breezy summer essentials",
    link: "/men",
    image: collection_6,
    badge: "Summer",
  },
  {
    id: 7,
    title: "Fashion Statement",
    categoryName: "Women",
    description: "Make your personal style statement",
    link: "/women",
    image: collection_7,
    badge: "Exclusive",
  },
  {
    id: 8,
    title: "Tech & Accessories",
    categoryName: "Electronics",
    description: "Complete your tech & gadget lifestyle",
    link: "/electro",
    image: collection_8,
    badge: "Best Value",
  },
];

export default collections;
