

import s1 from './s-1.jpg';
import s2 from './s-2.jpg';
import s3 from './s-3.jpg';
import s4 from './s-4.jpg';
import s5 from './s-5.jpg';
import s6 from './s-6.jpg';
import s7 from './s-7.jpg';
import s8 from './s-8.jpg';
import s9 from './s-9.jpg';
import s10 from './s-10.jpg';
import s11 from './s-11.jpg';


import h1 from './h-1.jpg';
import h2 from './h-2.jpg';
import h3 from './h-3.jpg';
import h4 from './h-4.jpg';
import h5 from './h-5.jpg';
import h6 from './h-6.jpg';
import h7 from './h-7.jpg';
import h8 from './h-8.jpg';
import h9 from './h-9.jpg';
import h10 from './h-10.jpg';
import h11 from './h-11.jpg';
import h12 from './h-12.jpg';
import h13 from './h-13.jpg';
import h14 from './h-14.jpg';
import h15 from './h-15.jpg';

import b1 from './b-1.jpg';
import b2 from './b-2.jpg';
import b3 from './b-3.jpg';
import b4 from './b-4.jpg';
import b5 from './b-5.jpg';
import b6 from './b-6.jpg';
import b7 from './b-7.jpg';
import b8 from './b-8.jpg';
import b9 from './b-9.jpg';
import b10 from './b-10.jpg';


import hero1 from './hero-pic1.jpg';
import hero2 from './hero-pic2.jpg';
import logo from './logo.png';
import search from './search-icon.png';
import profile from './profile-icon.png';
import cart from './cart-icon.png';
import menu from './menu-icon.png';
import dropdown from './dropdown-icon.png';
import exchange from './exchange-icon.png';
import quality from './quality.png';
import support from './support.png';
import cross from './cross.png';
import star from './star.png';
import stardull from './stardull.png';
import bin from './bin.png';
import stripe from './stripe.png';
import card from './card.png';
import cod from './cod.png';
import aboutimg from './aboutimg.jpg';
import contact from './contact.jpg';




export const assets = {
  hero1,
  hero2,
  s1, s2, s3, s4, s5, s6,
  s7, s8, s9, s10, s11,h1, h2, h3, h4, h5, h6,
  h7, h8, h9, h10, h11, h12, h13, h14, h15,b1, b2, b3, b4, b5,
  b6, b7, b8, b9, b10,
  logo, search, profile, cart, menu, dropdown, exchange,
  quality, support, cross, star, stardull, bin, stripe,
  card, cod, aboutimg, contact
};


export const products = [
  {
    _id: "s1",
    name: "Classic White Sneakers",
    description: "Comfortable everyday sneakers with a modern design.",
    price: 4500,
    image: [s1],
    category: "Shoes",
    subCategory: "Sneakers",
    sizes: [37, 38, 39, 40],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "s2",
    name: "Black Running Shoes",
    description: "Lightweight running shoes with breathable fabric.",
    price: 4800,
    image: [s2],
    category: "Shoes",
    subCategory: "Sports",
    sizes: [37, 38, 39, 40],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "s3",
    name: "Grey Casual Shoes",
    description: "Perfect casual shoes for daily wear.",
    price: 4300,
    image: [s3],
    category: "Shoes",
    subCategory: "Casual",
    sizes: [37, 38, 39, 40],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "s4",
    name: "Navy Blue Trainers",
    description: "Durable trainers for workouts and jogging.",
    price: 5000,
    image: [s4],
    category: "Shoes",
    subCategory: "Sports",
    sizes: [37, 38, 39, 40],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "s5",
    name: "Brown Leather Shoes",
    description: "Premium leather shoes for formal occasions.",
    price: 6200,
    image: [s5],
    category: "Shoes",
    subCategory: "Formal",
    sizes: [37, 38, 39, 40],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "s6",
    name: "Canvas Sneakers",
    description: "Stylish canvas sneakers with all-day comfort.",
    price: 3900,
    image: [s6],
    category: "Shoes",
    subCategory: "Sneakers",
    sizes: [37, 38, 39, 40],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "s7",
    name: "Walking Shoes",
    description: "Designed for maximum comfort while walking.",
    price: 4700,
    image: [s7],
    category: "Shoes",
    subCategory: "Walking",
    sizes: [37, 38, 39, 40],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "s8",
    name: "Slip-On Shoes",
    description: "Easy slip-on shoes for everyday use.",
    price: 4100,
    image: [s8],
    category: "Shoes",
    subCategory: "Casual",
    sizes: [37, 38, 39, 40],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "s9",
    name: "High Top Sneakers",
    description: "Trendy high-top sneakers with superior comfort.",
    price: 5300,
    image: [s9],
    category: "Shoes",
    subCategory: "Sneakers",
    sizes: [37, 38, 39, 40],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "s10",
    name: "Mesh Running Shoes",
    description: "Breathable shoes designed for active lifestyles.",
    price: 5100,
    image: [s10],
    category: "Shoes",
    subCategory: "Sports",
    sizes: [37, 38, 39, 40],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "s11",
    name: "Street Style Sneakers",
    description: "Fashionable sneakers for casual outings.",
    price: 4600,
    image: [s11],
    category: "Shoes",
    subCategory: "Sneakers",
    sizes: [37, 38, 39, 40],
    date: Date.now(),
    bestseller: false,
  },
 

  {
    _id: "h1",
    name: "Classic Black Heels",
    description: "Elegant heels for formal occasions.",
    price: 4200,
    image: [h1],
    category: "Heels",
    subCategory: "Party Wear",
    sizes: [36, 37, 38, 39],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "h2",
    name: "Nude Block Heels",
    description: "Comfortable block heels with timeless style.",
    price: 4400,
    image: [h2],
    category: "Heels",
    subCategory: "Casual",
    sizes: [36, 37, 38, 39],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "h3",
    name: "Red Party Heels",
    description: "Bold red heels for special occasions.",
    price: 4700,
    image: [h3],
    category: "Heels",
    subCategory: "Party Wear",
    sizes: [37, 38, 39, 40],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "h4",
    name: "Silver Stiletto Heels",
    description: "Shiny stilettos for glamorous evenings.",
    price: 5500,
    image: [h4],
    category: "Heels",
    subCategory: "Stiletto",
    sizes: [36, 37, 38],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "h5",
    name: "Golden Evening Heels",
    description: "Elegant heels perfect for weddings and parties.",
    price: 5900,
    image: [h5],
    category: "Heels",
    subCategory: "Evening",
    sizes: [37, 38, 39, 40],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "h6",
    name: "White Bridal Heels",
    description: "Beautiful bridal heels with premium comfort.",
    price: 6100,
    image: [h6],
    category: "Heels",
    subCategory: "Bridal",
    sizes: [36, 37, 38],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "h7",
    name: "Pink Block Heels",
    description: "Stylish pink heels for everyday elegance.",
    price: 4300,
    image: [h7],
    category: "Heels",
    subCategory: "Casual",
    sizes: [36, 37, 38, 39],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "h8",
    name: "Beige Office Heels",
    description: "Comfortable office heels with a professional look.",
    price: 4600,
    image: [h8],
    category: "Heels",
    subCategory: "Office",
    sizes: [37, 38, 39, 40],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "h9",
    name: "Crystal Party Heels",
    description: "Sparkling heels designed for celebrations.",
    price: 6500,
    image: [h9],
    category: "Heels",
    subCategory: "Party Wear",
    sizes: [36, 37, 38],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "h10",
    name: "Platform Heels",
    description: "Fashionable platform heels with extra support.",
    price: 5200,
    image: [h10],
    category: "Heels",
    subCategory: "Platform",
    sizes: [37, 38, 39, 40],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "h11",
    name: "Classic Nude Pumps",
    description: "Elegant pumps suitable for every occasion.",
    price: 4900,
    image: [h11],
    category: "Heels",
    subCategory: "Pumps",
    sizes: [36, 37, 38, 39],
    date: Date.now(),
    bestseller: false,
  },
  {
    _id: "h12",
    name: "Luxury Diamond Heels",
    description: "Premium heels with luxurious detailing.",
    price: 7500,
    image: [h12],
    category: "Heels",
    subCategory: "Luxury",
    sizes: [37, 38, 39, 40],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "h13",
    name: "Luxury Diamond Heels",
    description: "Premium heels with luxurious detailing.",
    price: 7500,
    image: [h13],
    category: "Heels",
    subCategory: "Luxury",
    sizes: [37, 38, 39, 40],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "h14",
    name: "Luxury Diamond Heels",
    description: "Premium heels with luxurious detailing.",
    price: 7500,
    image: [h14],
    category: "Heels",
    subCategory: "Luxury",
    sizes: [37, 38, 39, 40],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "h15",
    name: "Luxury Diamond Heels",
    description: "Premium heels with luxurious detailing.",
    price: 7500,
    image: [h15],
    category: "Heels",
    subCategory: "Luxury",
    sizes: [37, 38, 39, 40],
    date: Date.now(),
    bestseller: true,
  },
  {
  _id: "b1",
  name: "Classic Black Hand Bag",
  description: "Elegant handbag perfect for everyday use.",
  price: 3500,
  image: [b1],
  category: "Bags",
  subCategory: "Hand Bag",
  sizes: [37, 38, 39, 40],
  date: Date.now(),
  bestseller: true,
},
{
  _id: "b2",
  name: "Brown Leather Bag",
  description: "Premium leather bag with stylish design.",
  price: 4200,
  image: [b2],
  category: "Bags",
  subCategory: "Leather",
  sizes: [37, 38, 39, 40],
  date: Date.now(),
  bestseller: true,
},
{
  _id: "b3",
  name: "Mini Shoulder Bag",
  description: "Compact shoulder bag for casual outings.",
  price: 2800,
  image: [b3],
  category: "Bags",
  subCategory: "Shoulder Bag",
  sizes: [37, 38, 39, 40],
  date: Date.now(),
  bestseller: false,
},
{
  _id: "b4",
  name: "Elegant White Bag",
  description: "Minimal white bag with modern style.",
  price: 3900,
  image: [b4],
  category: "Bags",
  subCategory: "Hand Bag",
  sizes: [37, 38, 39, 40],
  date: Date.now(),
  bestseller: false,
},
{
  _id: "b5",
  name: "Luxury Designer Bag",
  description: "Premium bag for special occasions.",
  price: 6500,
  image: [b5],
  category: "Bags",
  subCategory: "Luxury",
  sizes: [37, 38, 39, 40],
  date: Date.now(),
  bestseller: true,
},
{
  _id: "b6",
  name: "Casual Tote Bag",
  description: "Spacious tote bag for daily use.",
  price: 3200,
  image: [b6],
  category: "Bags",
  subCategory: "Tote Bag",
  sizes: [37, 38, 39, 40],
  date: Date.now(),
  bestseller: false,
},
{
  _id: "b7",
  name: "Pink Fashion Bag",
  description: "Stylish pink bag with trendy look.",
  price: 3600,
  image: [b7],
  category: "Bags",
  subCategory: "Fashion",
  sizes: [37, 38, 39, 40],
  date: Date.now(),
  bestseller: true,
},
{
  _id: "b8",
  name: "Office Carry Bag",
  description: "Professional bag suitable for office.",
  price: 4500,
  image: [b8],
  category: "Bags",
  subCategory: "Office",
  sizes: [37, 38, 39, 40],
  date: Date.now(),
  bestseller: false,
},
{
  _id: "b9",
  name: "Party Clutch Bag",
  description: "Elegant clutch for parties.",
  price: 2500,
  image: [b9],
  category: "Bags",
  subCategory: "Clutch",
  sizes: [37, 38, 39, 40],
  date: Date.now(),
  bestseller: true,
},
{
  _id: "b10",
  name: "Travel Bag",
  description: "Comfortable travel bag with large space.",
  price: 5500,
  image: [b10],
  category: "Bags",
  subCategory: "Travel",
  sizes: [37, 38, 39, 40],
  date: Date.now(),
  bestseller: false,
},
];