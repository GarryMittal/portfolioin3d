// contains all constants to be used throughout the project
// dont' remove anything from here if not sure

import { blog, cine, cineflexHome, dealhome, logo, logo2, metro, syncHome, uc, yamm } from "../assets/images";
import {
  css,
  express,
  git,
  github,
  html,
  javascript,
  mongodb,
  mui,
  nextjs,
  nodejs,
  react,
  tailwindcss,
  typescript,
} from "../assets/icons";

// sidebar links
export const SIDEBAR_LINKS = [
  {
    route: "/about",
    label: "About",
  },
  {
    route: "/projects",
    label: "Projects",
  },
  {
    route: "/contact",
    label: "Contact",
  },
];

// skills
export const SKILLS = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },

  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

// site name
export const SITE_NAME = "Garry Mittal";

// extra links
export const EXTRA_LINKS = {
  source_code: "https://github.com/GarryMittal",
};

// experiences
export const EXPERIENCES = [
  {
    title: "Lead Coding Instructor",
    company_name: "Ultimate Coders (Scarborough)",
    icon: uc,
    iconBg: "#accbe1",
    date: "November 2021 - Present",
    points: [
      "Instructing students from SK to Grade 12 in JavaScript, HTML, CSS, Python programming, and Arduino electronics.",
      "Designing and implementing engaging lesson plans that effectively convey syntax, logic, and hands-on project guidance.",
      "Assisting students in developing practical projects, enhancing their problem-solving abilities, boosting their confidence, and facilitating the acquisition of programming and electronics knowledge.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "YammLabs",
    icon: yamm,
    iconBg: "#accbe1",
    date: "August 2021 - June 2022",
    points: [
      "Designed and developed the complete website for Yammlabs, creating a visually appealing and user-friendly interface using React, HTML, CSS, and JavaScript.",
      "Hosted the website, ensuring optimal performance and accessibility for users.",
      "Collaborated with designers and backend developers to implement seamless user interfaces and enhance overall user experience.",
      "Participated in code reviews and contributed to team discussions, promoting best practices in front-end development.",
      "Conducted testing and debugging to ensure high-quality code and functionality before deployment",
    ],
  },
  {
    title: "UI/UX Intern",
    company_name: "Delhi Metro Rail Corporation",
    icon: metro,
    iconBg: "#fbc3bc",
    date: "May 2020 - July 2020",
    points: [
      "Conducting user research to gather insights and understand user needs for effective design solutions.",
      "Creating wireframes, prototypes, and user interface designs that enhance user experience and accessibility.",
      "Collaborating with cross-functional teams to iterate designs based on user feedback and usability testing.",
      "Applying design thinking principles to solve complex problems and improve overall user satisfaction.",
      "Utilizing tools such as Figma, Sketch, or Adobe XD to deliver high-quality design assets.",
    ],
  },
];

// projects
export const PROJECTS = [
  {
    iconUrl: logo,
    theme: "btn-back-pink",
    name: "DealDash",
    description:
      "Developed a Next.js application for tracking Amazon product deals and price declines, allowing users to easily input product URLs. The backend employs MongoDB for authentication and data management, while Nodemailer sends email notifications when prices drop or items are restocked. A cron job is implemented to scrape Amazon product prices, ensuring timely updates for users",
    link: "https://dealdash.vercel.app/",
    image:dealhome
  },
  {
    iconUrl: logo2,
    theme: "btn-back-green",
    name: "SyncScript",
    description:
      "Built and integrated a collaborative document editing application using Next.js, featuring Clerk for secure user authentication and Liveblocks for real-time, concurrent editing with multiple cursors. The application supports comments and mentions for enhanced collaboration. Sentry was integrated to effectively monitor and track user-facing bugs or errors, ensuring a seamless and reliable experience",
    link: "https://syncscript-pi.vercel.app/",
    image:syncHome
  },
  {
    iconUrl: cine,
    theme: "btn-back-pink",
    name: "Cineflex",
    description:
      "Cineflex is a Next.js-based full-stack web application designed for a modern movie-watching experience. It features secure authentication using NextAuth, efficient data management with Prisma and MongoDB, and seamless movie playback functionality. Users can discover movies, create favorite lists, and manage profiles within a responsive design",
    // link: "https://snappy-chatapp.netlify.app/",
    image:cineflexHome
  },
  {
    iconUrl: blog,
    theme: "btn-back-blue",
    name: "Mern Blog App",
    description:
      "Developed a full-stack web application using the MERN stack (MongoDB, Express.js, React.js, Node.js) to facilitate the creation and management of blog content. The application includes secure user authentication, enabling users to create accounts, log in, and manage their profiles. Users can write, edit, and delete blog posts, as well as comment on and like posts from others. The app features a responsive design for optimal viewing across devices",
    // link: "https://carhb.vercel.app/",
  },
];
