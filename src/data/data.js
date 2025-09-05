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
    surname: "Nguyen",
    age: 25,
    github: "https://github.com/sindresorhus",
    linkedin: "https://www.linkedin.com/in/lena-nguyen-react/",
    nationality: "Vietnamese",
    occupation: "React Developer",
  },
  {
    id: 8657,
    name: "Jane",
    surname: "Doe",
    age: 29,
    github: "https://github.com/getify",
    linkedin: "https://www.linkedin.com/in/jane-doe-engineer/",
    nationality: "Canadian",
    occupation: "Frontend Engineer",
  },
  {
    id: 8476,
    name: "Mark",
    surname: "Smith",
    age: 32,
    github: "https://github.com/danabramov",
    linkedin: "https://www.linkedin.com/in/mark-smith-fullstack/",
    nationality: "Italian",
    occupation: "Full-Stack Developer",
  },
  {
    id: 2211,
    name: "Lena",
    surname: "Nguyen",
    age: 25,
    github: "https://github.com/gaearon",
    linkedin: "https://www.linkedin.com/in/lena-nguyen-js/",
    nationality: "Vietnamese",
    occupation: "React Developer",
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
