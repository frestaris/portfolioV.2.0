import html from "../assets/skills-logo/html.png";
import css from "../assets/skills-logo/css.png";
import javascript from "../assets/skills-logo/javascript.png";
import reactjs from "../assets/skills-logo/react.png";
import bootstrap from "../assets/skills-logo/bootstrap.png";
import node from "../assets/skills-logo/node.png";
import github from "../assets/skills-logo/github.png";
import git from "../assets/skills-logo/git.png";
import netlify from "../assets/skills-logo/netlify.png";
import redux from "../assets/skills-logo/redux.png";
import tailwind from "../assets/skills-logo/tailwind.png";
import mongodb from "../assets/skills-logo/mongodb.png";
import express from "../assets/skills-logo/expressjs.png";
import postman from "../assets/skills-logo/postman.png";
import stripe from "../assets/skills-logo/stripe.png";
import cloudinary from "../assets/skills-logo/cloudinary.png";
import googlecloud from "../assets/skills-logo/googlecloud.png";
import vercel from "../assets/skills-logo/Vercel.png";
import figma from "../assets/skills-logo/figma.png";
import mysql from "../assets/skills-logo/mysql.png";
import postgres from "../assets/skills-logo/postgres.png";
import python from "../assets/skills-logo/python.png";
import firebase from "../assets/skills-logo/firebase.png";

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
    { skill: "Firebase", img: firebase },
    { skill: "Cloudinary", img: cloudinary },
    { skill: "Google Cloud", img: googlecloud },
    { skill: "Stripe", img: stripe },
    { skill: "Figma", img: figma },
    { skill: "Netlify", img: netlify },
    { skill: "Vercel", img: vercel },
  ],
};
