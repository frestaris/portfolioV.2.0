# 🚀 Portfolio & Projects Website

A modern developer portfolio website built with **React, Vite, Tailwind CSS, and Framer Motion**.  
This template is designed to showcase projects in an interactive way, with animations, project carousels, and code snippet previews.

---

## ✨ Features

- 👤 **Hero Section** – Unique slot-machine style developer animation that scrolls through developer profiles.
- 📂 **Projects Showcase** – A **Visual Studio Code-like editor** feel with draggable project tabs and inline code snippets.
- 🎞️ **Image Carousel** – Navigate project screenshots with a smooth carousel.
- 💻 **Code Preview Style** – Each project shows frontend, backend, and tools used in a “code-like” block.
- 🧭 **Stylish Navbar Menu** – Animated hamburger menu on the right, with smooth transitions.
- 🕒 **Timeline Experience** – Animated vertical timeline showing your career journey and experiences.
- 🎨 **Marquee Skills** – A scrolling marquee of your skills, grouped into frontend, backend, and tools.
- 🖥️ **PowerShell Contact Form** – A console-styled contact form with EmailJS integration.
- 📱 **Responsive Design** – Works on desktop, tablet, and mobile.

---

## 📂 Project Structure

```
src/
├── assets/          # Logos, icons, and images
├── data/            # 🔑 Main folder for customization
│   ├── aboutMe.js       # Bio, picture, badges, and description
│   ├── developers.js    # Developer profile info
│   ├── experiences.js   # Timeline/experience details
│   ├── projects.js      # All project details
│   └── skills.js        # Skills and icons
├── components/      # React components
├── App.jsx
└── index.css

```

---

## 🛠️ Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🎯 How to Customize

All content is controlled from the `src/data` folder, where each file has its own purpose — you don’t need to touch the core React components.

Look for the 🔧 icon in comments to know what to replace.

```js
// 🔧 Replace
```

When adding images or files, don’t forget to **import them from `src/assets/`** (or the folder you added them into).

---

### 🔹 Developer Profile (`src/data/developers.js`)

- Edit only the **first developer object** to personalize the portfolio.
- Update how many spins the slot machine animation does here:

  ```js
  export const developersSpins = 5; // Change this number for more or fewer spins
  ```

- Add or remove developers to make it look more crowded or minimal, depending on your preference.
- You can also remove any field (e.g., `age`, `resume`) by deleting that line — the UI will simply hide it.

```js
export const developers = [
  {
    id: 1293, // Irrelevant random number, can be left as is
    name: "YourNameHere",        // 🔧 Replace here
    surname: "YourSurnameHere",  // 🔧 Replace here
    age: 25,                     // 🔧 Optional → delete this line if not needed
    github: "https://github.com/yourusername", // 🔧 Replace here
    linkedin: "https://www.linkedin.com/in/your-profile/", // 🔧 Replace here
    nationality: "YourCountry",  // 🔧 Replace here
    occupation: "YourRoleHere",  // 🔧 Replace here
    avatar: hero_pic,            // 🔧 Replace with your image from /assets
    resume: resumeFile,          // 🔧 Optional → delete this line if you don’t want a resume
  },

  // Random developers below
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
  ...
];
```

---

### 🔹 Projects (`src/data/projects.js`)

You can add or remove projects by editing the array, and you can also add or remove skills inside each project.

```js
export const projects = [
  {
    id: 1,
    title: "My Cool Project", // 🔧 Replace
    description: "Short description here...", // 🔧 Replace
    images: [project1a, project1b], // 🔧 Replace
    frontend: [{ skill: "React" }, { skill: "TailwindCSS" }], // 🔧 Replace
    backend: [{ skill: "Node.js" }, { skill: "Express" }], // 🔧 Replace
    tools: [{ skill: "Git" }, { skill: "Vite" }],
    live: "https://your-demo-link.com", // 🔧 Replace
    linkUrl: "https://github.com/your-repo", // 🔧 Replace
  },
];
```

---

### 🔹 Experiences (`src/data/experiences.js`)

**Add or remove experiences** by editing the array. Each object represents one timeline entry.

```js
export const experiences = [
  {
    year: "2025", // 🔧 Replace
    role: "Full-Stack Developer", // 🔧 Replace
    company: "Private Client", // 🔧 Replace
    description: "Describe your project or freelance experience here.", // 🔧 Replace
  },
];
```

---

### 🔹 Skills (`src/data/skills.js`)

Easily **add or remove skills and images**, or even create new categories (arrays) to organize them better.

```js
export const skillGroups = {
  frontend: [
    { skill: "HTML", img: html }, // 🔧 Replace or remove
    { skill: "CSS", img: css }, // 🔧 Replace or remove
    { skill: "React", img: reactjs }, // 🔧 Replace or remove
    { skill: "Tailwind CSS", img: tailwind }, // 🔧 Replace or remove
  ],
  backend: [
    { skill: "Node.js", img: node }, // 🔧 Replace or remove
    { skill: "Express.js", img: express }, // 🔧 Replace or remove
    { skill: "PostgreSQL", img: postgres }, // 🔧 Replace or remove
  ],
  tools: [
    { skill: "Git", img: git }, // 🔧 Replace or remove
    { skill: "GitHub", img: github }, // 🔧 Replace or remove
    { skill: "Figma", img: figma }, // 🔧 Replace or remove
  ],

  // Optional add or remove more arrays
  databases: [
    { skill: "MongoDB", img: mongodb },
    { skill: "MySQL", img: mysql },
  ],
};
```

---

### 🔹 About Me (`src/data/aboutMe.js`)

You can **add, remove, or edit badges** freely — unused ones won’t show in the UI.

```js
export const aboutMe = {
  picture: about_picture, // 🔧 Replace with your image from /assets

  badges: [
    {
      id: 1,
      text: "2+ years · Web Dev", // 🔧 Replace with your text
      icon: Award, // 🔧 You can swap the icon
      color: "#4ec9b0", // 🔧 Replace color if desired
    },
    {
      id: 2,
      text: "Self-Taught", // 🔧 Replace with your text
      icon: GraduationCap,
      color: "#ffc811",
    },
    // ➕ Add more badges if needed
  ],
  description: `Write your personal bio here...`, // 🔧 Replace
};
```

---

## 📧 Contact Form Setup (PowerShell UI + EmailJS)

The contact form looks like a **PowerShell terminal window**, styled with Tailwind CSS, and sends messages with [EmailJS](https://www.emailjs.com/).

1. **Create an account** and get your **Service ID**, **Template ID**, and **Public Key**.
2. **Add them to a `.env` file** at the root of the project:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

3. Ensure `.env` is in `.gitignore`.
4. Restart the dev server:

   ```bash
   npm run dev
   ```

---

## 📊 Google Analytics Integration (Optional)

_(This step is optional. You can skip it if you don’t need analytics tracking.)_

This project supports Google Analytics 4 (GA4) tracking.
You can enable it by setting up an environment variable with your Measurement ID.

1. Create a Google Analytics property

Go to [Google Analytics](https://analytics.google.com/) and create a new property for your app.

Copy your Measurement ID (it looks like G-XXXXXXXXXX).

2. Add the Measurement ID to .env

```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

⚠️ Replace G-XXXXXXXXXX with your own GA ID.

## 📦 Build for Production

```bash
npm run build
```

The build will generate a `dist/` folder you can deploy to **Netlify, Vercel, GitHub Pages, etc.**

---

## 📄 License & Copyright

This project is provided as a **commercial template**.  
You may customize and use it for your personal portfolio.

❌ **Unauthorized resale or redistribution is strictly prohibited.**  
© 2025 [Aris Fresta](mailto:frestaris.web.developer@gmail.com) – All rights reserved.

---

## 🙌 Credits

- Built with [React](https://react.dev/), [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/)
