import budget1 from "../assets/projects-images/budgetmate1.png";
import budget2 from "../assets/projects-images/budgetmate2.png";
import budget3 from "../assets/projects-images/budgetmate3.png";
import eCommerce1 from "../assets/projects-images/eCommerce1.png";
import eCommerce2 from "../assets/projects-images/eCommerce2.png";
import eCommerce3 from "../assets/projects-images/eCommerce3.png";
import dentist1 from "../assets/projects-images/dentist1.png";
import dentist2 from "../assets/projects-images/dentist2.png";
import dentist3 from "../assets/projects-images/dentist3.png";
import gym1 from "../assets/projects-images/gym1.png";
import gym2 from "../assets/projects-images/gym2.png";
import gym3 from "../assets/projects-images/gym3.png";
import rentcar1 from "../assets/projects-images/car-rental1.png";
import rentcar2 from "../assets/projects-images/car-rental2.png";
import rentcar3 from "../assets/projects-images/car-rental3.png";
import restaurant1 from "../assets/projects-images/restaurant-1.png";
import restaurant2 from "../assets/projects-images/restaurant-2.png";
import restaurant3 from "../assets/projects-images/restaurant-3.png";
import quickpop1 from "../assets/projects-images/Quickpop-1.png";
import quickpop2 from "../assets/projects-images/Quickpop-2.png";
import quickpop3 from "../assets/projects-images/Quickpop-3.png";
import quickpop4 from "../assets/projects-images/Quickpop-4.png";
import quickpop5 from "../assets/projects-images/Quickpop-5.png";
import quickpop6 from "../assets/projects-images/Quickpop-6.png";
import quickpop7 from "../assets/projects-images/Quickpop-7.png";
import quickpop8 from "../assets/projects-images/Quickpop-8.png";
import portfolio1 from "../assets/projects-images/portfolio-1.png";
import portfolio2 from "../assets/projects-images/portfolio-2.png";
import portfolio3 from "../assets/projects-images/portfolio-3.png";
import socialHub1 from "../assets/projects-images/SocialHub1.png";
import socialHub2 from "../assets/projects-images/SocialHub2.png";
import socialHub3 from "../assets/projects-images/SocialHub3.png";
import socialHub4 from "../assets/projects-images/SocialHub4.png";
import socialHub5 from "../assets/projects-images/SocialHub5.png";
import socialHub6 from "../assets/projects-images/SocialHub6.png";
import socialHub7 from "../assets/projects-images/SocialHub7.png";

export const projects = [
  {
    id: 1,
    title: "Social Hub",
    linkUrl: "https://github.com/frestaris/SocialHub",
    live: "https://social-hub-xi.vercel.app/",
    images: [
      socialHub1,
      socialHub2,
      socialHub3,
      socialHub4,
      socialHub5,
      socialHub6,
      socialHub7,
    ],
    description:
      "A modern social platform built with the MERN stack that combines posts, community interaction, and real-time chat — all in one place. Users can share photos, videos, and posts, follow creators, chat in real time, receive notifications, and explore trending content. Featuring Firebase authentication, Redux Toolkit state management, and Socket.IO-powered messaging with seen ticks, typing indicators, and delivery states.",
    frontend: [
      { skill: "Html" },
      { skill: "Ant Design" },
      { skill: "React" },
      { skill: "Redux" },
    ],
    backend: [
      { skill: "Node.js" },
      { skill: "Express.js" },
      { skill: "MongoDB" },
      { skill: "Socket.IO" },
    ],
    tools: [
      { skill: "Firebase" },
      { skill: "YouTube API" },
      { skill: "Google Analytics" },
    ],
  },
  {
    id: 2,
    title: "Quick Pop",
    live: "https://quick-pop.vercel.app/",
    images: [
      quickpop1,
      quickpop2,
      quickpop3,
      quickpop4,
      quickpop5,
      quickpop6,
      quickpop7,
      quickpop8,
    ],
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
    title: "Portfolio Template",
    linkUrl: "https://github.com/frestaris/Portfolio-Aris-Fresta",
    live: "https://arisfresta-portfolio.netlify.app/",
    images: [portfolio1, portfolio2, portfolio3],
    description:
      "A modern personal portfolio website for showcasing projects and skills, built with React, Vite, and Bootstrap CSS. Features include dark/light mode toggle, animated particle background, smooth section navigation via a responsive navbar, EmailJS integration for contact, and a scroll-to-top button.",
    frontend: [
      { skill: "Html" },
      { skill: "Bootstrap" },
      { skill: "Redux" },
      { skill: "React" },
    ],
    backend: [],
    tools: [],
  },
  {
    id: 7,
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
    id: 8,
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
    id: 9,
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
