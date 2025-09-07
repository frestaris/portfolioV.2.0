import hero_pic from "../assets/profile-pic.jpg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactjs from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import git from "../assets/git.png";
import netlify from "../assets/netlify.png";
import redux from "../assets/redux.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";
import express from "../assets/expressjs.png";
import postman from "../assets/postman.png";
import stripe from "../assets/stripe.png";
import cloudinary from "../assets/cloudinary.png";
import vercel from "../assets/Vercel.png";
import figma from "../assets/figma.png";
import mysql from "../assets/mysql.png";
import postgres from "../assets/postgres.png";
import python from "../assets/python.png";
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

export const developers = [
  {
    id: 1293,
    name: "Aris",
    surname: "Fresta",
    age: 33,
    github: "https://github.com/frestaris",
    linkedin: "https://www.linkedin.com/in/aris-fresta-33a631100/",
    nationality: "Australian",
    occupation: "Web Developer",
    avatar: hero_pic,
  },
  {
    id: 3115,
    name: "Jane",
    surname: "Doe",
    age: 29,
    github: "https://github.com/octocat",
    linkedin: "https://www.linkedin.com/in/jane-doe-frontend/",
    nationality: "Canadian",
    occupation: "Frontend Engineer",
  },
  {
    id: 1235,
    name: "Mark",
    surname: "Smith",
    age: 32,
    github: "https://github.com/torvalds",
    linkedin: "https://www.linkedin.com/in/mark-smith-dev/",
    nationality: "Italian",
    occupation: "Full-Stack Developer",
  },
  {
    id: 5341,
    name: "Lena",
    surname: "White",
    age: 25,
    github: "https://github.com/sindresorhus",
    linkedin: "https://www.linkedin.com/in/lena-white-react/",
    nationality: "Vietnamese",
    occupation: "React Developer",
  },
  {
    id: 8657,
    name: "Carl",
    surname: "Doe",
    age: 29,
    github: "https://github.com/getify",
    linkedin: "https://www.linkedin.com/in/carl-doe-engineer/",
    nationality: "American",
    occupation: "Frontend Engineer",
  },
];

export const experiences = [
  {
    year: "2025",
    role: "Frontend Developer",
    company: "TechNova",
    description:
      "Worked on building modern React-based web apps with Tailwind and Redux.",
  },
  {
    year: "2023 - 2024",
    role: "Full-Stack Developer",
    company: "CodeCraft",
    description:
      "Developed MERN applications, integrated APIs, and optimized database performance.",
  },
  {
    year: "2021 - 2023",
    role: "Web Developer",
    company: "Freelance",
    description:
      "Built responsive websites and landing pages for local businesses and startups.",
  },
  {
    year: "2019 - 2021",
    role: "Junior Developer",
    company: "StartupHub",
    description:
      "Contributed to frontend development and collaborated in Agile sprints.",
  },
];

export const skillGroups = {
  frontend: [
    { skill: "HTML", img: html },
    { skill: "CSS", img: css },
    { skill: "JavaScript", img: javascript },
    { skill: "React", img: reactjs },
    { skill: "Bootstrap", img: bootstrap },
    { skill: "Tailwind", img: tailwind },
    { skill: "Redux", img: redux },
  ],
  backend: [
    { skill: "Node.js", img: node },
    { skill: "Express.js", img: express },
    { skill: "MongoDB", img: mongodb },
    { skill: "Postgres", img: postgres },
    { skill: "Mysql", img: mysql },
    { skill: "Python", img: python },
  ],
  tools: [
    { skill: "Git", img: git },
    { skill: "Github", img: github },
    { skill: "Postman", img: postman },
    { skill: "Cloudinary", img: cloudinary },
    { skill: "Stripe", img: stripe },
    { skill: "Figma", img: figma },
    { skill: "Netlify", img: netlify },
    { skill: "Vercel", img: vercel },
  ],
};

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

export const aboutMe = {
  description: `Over the past few years, I’ve dedicated myself to building full-stack web applications, and this journey has developed into both a strong technical skillset and a genuine passion for creating modern, user-focused solutions.

  I’m highly proficient with React and Redux for building dynamic, state-driven interfaces, and I’ve learned a lot by working on personal projects, taking online courses, and collaborating on projects that feel like real-world work.

 I’m passionate about writing clean, efficient, and responsive code that works well across all devices. I’m always looking to improve my skills and stay ahead in the tech industry. Weird as it sounds, I really enjoy debugging and testing to ensure seamless functionality and performance.`,
};
