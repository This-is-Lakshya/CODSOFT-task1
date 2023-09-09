import img1 from '../images/Hotel1.jpeg';
import img2 from '../images/Hotel2.jpg';
import img3 from '../images/Hotel3.jpg';
import img4 from '../images/Hotel4.jpg';
import img5 from '../images/Hotel5.jpg';
import img6 from '../images/Hotel6.jpg';
import img7 from '../images/Hotel7.jpg';
import img8 from '../images/Hotel8.jpg';

const Hotels = [
  {
    id: "01",
    title: "Taj Lake Palace",
    city: "Udaipur",
    distance: 300,
    address: 'somewhere',
    price: 999,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "Rajesh Mishra",
        rating: 4.6
      },
      {
        name: "Jeet Kumar",
        rating: 5.0
      }
    ],
    avgRating: 4.6,
    photo: img1,
    featured: true,
  },
  {
    id: "02",
    title: "The Oberoi Udaivilas",
    city: "Udaipur",
    distance: 400,
    address: 'somewhere',
    price: 998,
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
    featured: true,
  },
  {
    id: "03",
    title: "Rambagh Palace",
    city: "Jaipur",
    distance: 500,
    address: 'somewhere',
    price: 899,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: img3,
    featured: true,
  },
  {
    id: "04",
    title: "The Taj Palace",
    city: "Mumbai",
    distance: 500,
    address: 'somewhere',
    price: 1099,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Rehan Khureshi",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: img4,
    featured: true,
  },
  {
    id: "05",
    title: "The St. Regis",
    city: "Mumbai",
    distance: 500,
    address: 'somewhere',
    price: 889,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Rakesh Sharma",
        rating: 5.0
      },
      {
        name: "Rajesh Mishra",
        rating: 4.4
      }
    ],
    avgRating: 4.5,
    photo: img5,
    featured: true,
  },
  {
    id: "06",
    title: "The Oberoi Amarvila",
    city: "Uttar Pradesh",
    distance: 500,
    address: 'somewhere',
    price: 999,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Vivek Sharma",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: img6,
    featured: true,
  },
  {
    id: "07",
    title: "Wildflower Hall",
    city: "Shimla",
    distance: 500,
    address: 'somewhere',
    price: 869,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Satya Jeet",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: img7,
    featured: true,
  },
  {
    id: "08",
    title: "The Imperial",
    city: " ",
    distance: 500,
    address: 'somewhere',
    price: 888,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Jeet Singh",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: img8,
    featured: true,
  }
];

export default Hotels;