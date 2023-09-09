import img1 from '../images/howrah-bridge.jpg';
import img1_2 from '../images/howrah-bridge2.jpg';

import img2 from '../images/beach-resort.jpg';
import img2_2 from '../images/goa2.jpg';

import img3 from '../images/sindh-valley.jpg';
import img3_2 from '../images/sindh-valley2.webp';

import img4 from '../images/taj-mahal.jpg';
import img4_2 from '../images/taj-mahal2.jpg';

const Tours = [
  {
    id: "01",
    title: "Howrah Bridge",
    city: "Kolkata",
    address: "Somewhere",
    distance: 300,
    price: 99,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [ ],
    avgRating: 4.5,
    photo: img1,
    photo2: img1_2,
    featured: true,
  },
  {
    id: "02",
    title: "Goa, India",
    city: "Panji",
    address: "Somewhere",
    distance: 400,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Jonny D'suza",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: img2,
    photo2: img2_2,
    featured: true,
  },
  {
    id: "03",
    title: "Sindh Valley, Kashmir",
    city: "Ganderbal",
    address: "Somewhere",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Ranbir Singh",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: img3,
    photo2: img3_2,
    featured: true,
  },
  {
    id: "04",
    title: "Taj Mahal, India",
    city: "Agra",
    address: "Dharmapuri, Tajganj - 282001",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.",
    reviews: [
      {
        name: "Rehan Khureshi",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: img4,
    photo2: img4_2,
    featured: true,
  }
];

export default Tours;