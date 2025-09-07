import about_picture from "../assets/pic-1.jpg";
import { Award, GraduationCap } from "lucide-react";

export const aboutMe = {
  picture: about_picture,
  badges: [
    {
      id: 1,
      text: "2+ years · Web Dev",
      icon: Award,
      color: "#4ec9b0",
    },
    {
      id: 2,
      text: "Self-Taught",
      icon: GraduationCap,
      color: "#ffc811",
    },
  ],
  description: `Over the past few years, I’ve dedicated myself to building full-stack web applications, and this journey has developed into both a strong technical skillset and a genuine passion for creating modern, user-focused solutions.

  I’m highly proficient with React and Redux for building dynamic, state-driven interfaces, and I’ve learned a lot by working on personal projects, taking online courses, and collaborating on projects that feel like real-world work.

 I’m passionate about writing clean, efficient, and responsive code that works well across all devices. I’m always looking to improve my skills and stay ahead in the tech industry. Weird as it sounds, I really enjoy debugging and testing to ensure seamless functionality and performance.`,
};

export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
