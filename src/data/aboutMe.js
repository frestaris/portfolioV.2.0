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
      text: "Freelance Developer",
      icon: GraduationCap,
      color: "#ffc811",
    },
  ],
  description: `Over the past few years, I’ve dedicated myself to building full-stack web applications, and this journey has developed into both a strong technical skillset and a genuine passion for creating modern, user-focused solutions.

  I’m highly proficient with the MERN stack for building dynamic, state-driven interfaces, and I’ve learned a lot by working on personal projects, and collaborating on projects that feel like real-world work.

 I’m passionate about writing clean, efficient, and responsive code that works well across all devices. I’m always looking to improve my skills and stay ahead in the tech industry. Weird as it sounds, I really enjoy debugging and testing to ensure seamless functionality and performance.`,
};

export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Note: For emailJS to work, the domain (localhost or production URL) must be added to the "Allowed Domains" list in your EmailJS account settings.
// Also, the env variables must be prefixed with VITE_ to be accessible in the client-side code.

// Example .env file entries:

// VITE_EMAILJS_SERVICE_ID=your_service_id
// VITE_EMAILJS_TEMPLATE_ID=your_template_id
// VITE_EMAILJS_PUBLIC_KEY=your_public_key

// Replace the placeholder values with your actual EmailJS service Id, template Id, and public key.
