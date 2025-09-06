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
import eCommerce1 from "../assets/eCommerce1.png";
import dentist1 from "../assets/dentist1.png";
import gym1 from "../assets/gym1.png";
import rentcar1 from "../assets/car-rental1.png";
import ask1 from "../assets/ask1.png";
import restaurant1 from "../assets/restaurant-1.png";
import quickpop1 from "../assets/Quickpop-1.png";

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
    image: quickpop1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
    image: rentcar1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
    image: eCommerce1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
    image: dentist1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
    image: budget1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
    image: restaurant1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
    image: ask1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
    image: gym1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
