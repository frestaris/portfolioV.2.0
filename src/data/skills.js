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
