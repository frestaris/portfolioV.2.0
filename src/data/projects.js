import budget1 from "../assets/budgetmate1.png";
import budget2 from "../assets/budgetmate2.png";
import budget3 from "../assets/budgetmate3.png";
import eCommerce1 from "../assets/eCommerce1.png";
import eCommerce2 from "../assets/eCommerce2.png";
import eCommerce3 from "../assets/eCommerce3.png";
import dentist1 from "../assets/dentist1.png";
import dentist2 from "../assets/dentist2.png";
import dentist3 from "../assets/dentist3.png";
import gym1 from "../assets/gym1.png";
import gym2 from "../assets/gym2.png";
import gym3 from "../assets/gym3.png";
import rentcar1 from "../assets/car-rental1.png";
import rentcar2 from "../assets/car-rental2.png";
import rentcar3 from "../assets/car-rental3.png";
import ask1 from "../assets/ask1.png";
import ask2 from "../assets/ask2.png";
import ask3 from "../assets/ask3.png";
import restaurant1 from "../assets/restaurant-1.png";
import restaurant2 from "../assets/restaurant-2.png";
import restaurant3 from "../assets/restaurant-3.png";
import quickpop1 from "../assets/Quickpop-1.png";
import quickpop2 from "../assets/Quickpop-2.png";
import quickpop3 from "../assets/Quickpop-3.png";

export const projects = [
  {
    id: 1,
    title: "Quick Pop",
    live: "https://quick-pop.vercel.app/",
    images: [quickpop1, quickpop2, quickpop3],
    description:
      "QuickPop is a modern accommodation booking platform that connects travelers with local hosts for a day or hourly stays. It features dynamic search with map integration, detailed host pages with photos, services, reviews, and availability, secure booking and payments, personalized dashboards for users and hosts, wishlist management, and an admin panel for full platform oversight.",
    frontend: [
      { skill: "Html" },
      { skill: "Tailwind CSS" },
      { skill: "Redux" },
      { skill: "React" },
    ],
    backend: [
      { skill: "PostgreSQL" },
      { skill: "Supabase" },
      { skill: "Express.js" },
      { skill: "Node.js" },
    ],
    tools: [
      { skill: "Google Cloud APIs" },
      { skill: "Geolocation" },
      { skill: "Stripe" },
      { skill: "Cloudinary" },
      { skill: "Bcrypt" },
      { skill: "Jsonwebtoken" },
    ],
  },
  {
    id: 2,
    title: "Rental Car",
    linkUrl: "https://github.com/frestaris/Mern_Rental_Car",
    live: "https://mern-rental-car-frontend.vercel.app/",
    images: [rentcar1, rentcar2, rentcar3],
    description:
      "Rent a Car is a full-stack car rental platform that lets users browse available vehicles, make reservations, and manage bookings online. It includes secure authentication, an intuitive booking flow, admin tools for managing cars and users, and a responsive design that delivers a smooth rental experience across devices.",
    frontend: [
      { skill: "Html" },
      { skill: "Tailwind CSS" },
      { skill: "Redux" },
      { skill: "React" },
    ],
    backend: [
      { skill: "MongoDB" },
      { skill: "Express.js" },
      { skill: "Node.js" },
    ],
    tools: [
      { skill: "Stripe" },
      { skill: "Cloudinary" },
      { skill: "Bcrypt" },
      { skill: "Jsonwebtoken" },
    ],
  },
  {
    id: 3,
    title: "e-Commerce Plants",
    linkUrl:
      "https://github.com/frestaris/Full-stack-e-commerce--Plants-website--React",
    live: "https://full-stack-e-commerce-plants-website-react.vercel.app/",
    images: [eCommerce1, eCommerce2, eCommerce3],
    description:
      "E-Commerce Plants Website is an online store designed for browsing and purchasing plants. It offers a modern shopping experience with product listings, detailed pages, cart and checkout functionality, secure authentication, and an admin panel for managing inventory and orders.",
    frontend: [
      { skill: "Html" },
      { skill: "Tailwind CSS" },
      { skill: "Redux" },
      { skill: "React" },
    ],
    backend: [
      { skill: "MongoDB" },
      { skill: "Express.js" },
      { skill: "Node.js" },
    ],
    tools: [
      { skill: "Stripe" },
      { skill: "Cloudinary" },
      { skill: "Bcrypt" },
      { skill: "Jsonwebtoken" },
    ],
  },
  {
    id: 4,
    title: "Dentist Website",
    linkUrl: "https://github.com/frestaris/Dentist-Website",
    live: "https://dentist-website-frontend.vercel.app/",
    images: [dentist1, dentist2, dentist3],
    description:
      "Dentist Website is a professional application for a dental clinic, featuring service overviews, a booking form, contact details, and a clean, responsive design that ensures an accessible and user-friendly experience for patients.",
    frontend: [
      { skill: "Html" },
      { skill: "Tailwind CSS" },
      { skill: "React" },
    ],
    backend: [
      { skill: "MongoDB" },
      { skill: "Express.js" },
      { skill: "Node.js" },
    ],
    tools: [],
  },
  {
    id: 5,
    title: "BudgetMate",
    linkUrl: "https://github.com/frestaris/budgetmate",
    live: "https://budgetmate-frontend.vercel.app/",
    images: [budget1, budget2, budget3],
    description:
      "BudgetMate is a personal finance app that helps users track income, expenses, and budgets with ease. It includes clear visualizations, category-based organization, and a contact CRUD feature, giving users simple tools to manage both their finances and contacts in one place.",
    frontend: [
      { skill: "Html" },
      { skill: "Flowbite CSS" },
      { skill: "Redux" },
      { skill: "React" },
    ],
    backend: [
      { skill: "MongoDB" },
      { skill: "Express.js" },
      { skill: "Node.js" },
    ],
    tools: [
      { skill: "Firebase" },
      { skill: "Bcrypt" },
      { skill: "Jsonwebtoken" },
    ],
  },
  {
    id: 6,
    title: "Restaurant Website",
    linkUrl: "https://github.com/frestaris/react-restaurant-app",
    live: "https://react-app-restaurant-website-sample.netlify.app/",
    images: [restaurant1, restaurant2, restaurant3],
    description:
      "Restaurant Webiste is a modern web application for restaurants that showcases menus, allows customers to place orders, and provides a smooth, responsive user experience. It includes features like an interactive menu, cart and checkout flow, and a contact form for reservations or inquiries.",
    frontend: [
      { skill: "Html" },
      { skill: "Ant Design" },
      { skill: "Redux" },
      { skill: "React" },
    ],
    backend: [],
    tools: [],
  },
  {
    id: 7,
    title: "Ask",
    linkUrl: "https://github.com/frestaris/ask",
    live: "https://ask-frontend-virid.vercel.app/",
    images: [ask1, ask2, ask3],
    description:
      "Ask is a community-driven Q&A platform where users can post questions, share answers, and engage through comments and likes. It features secure authentication, real-time interactions, and a clean, responsive interface designed to encourage knowledge sharing and discussion.",
    frontend: [
      { skill: "Html" },
      { skill: "Bootstrap CSS" },
      { skill: "Redux" },
      { skill: "React" },
    ],
    backend: [
      { skill: "MongoDB" },
      { skill: "Express.js" },
      { skill: "Node.js" },
    ],
    tools: [
      { skill: "Firebase" },
      { skill: "Bcrypt" },
      { skill: "Jsonwebtoken" },
    ],
  },
  {
    id: 8,
    title: "Gym Website",
    linkUrl: "https://github.com/frestaris/Gym-React",
    live: "https://brosgym.netlify.app/",
    images: [gym1, gym2, gym3],
    description:
      "Gym React is a fitness-focused website that showcases gym services, classes, and trainers through a clean and responsive interface. It highlights membership options, provides contact and inquiry forms, and delivers an engaging online presence for fitness businesses.",
    frontend: [
      { skill: "Html" },
      { skill: "Bootstrap CSS" },
      { skill: "React" },
    ],
    backend: [],
    tools: [],
  },
];
