import { StaticImageData } from "next/image";

import Edusex from "@/assets/images/projects/edusex.png";
import BCCDesignSystem from "@/assets/images/projects/bcc-design-system.png";
import YadaYouth from "@/assets/images/projects/yadayouth.png";
import TwiceButNice from "@/assets/images/projects/twice-but-nice.png";
import Notesgram from "@/assets/images/projects/notesgram.png";
import Tedx from '@/assets/images/projects/tedx.png';
import Helto from '@/assets/images/projects/helto.png';

export type ProjectData = {
  name: string;
  desc: string;
  githubLink?: string;
  hostingLink?: string;
  technologies: string[];
  image: StaticImageData;
};

const projectList: ProjectData[] = [
  {
    name: "Edusex",
    desc: "A sexual education website for teenagers. This web app provides materials, discussion forums, and personal consultations with psychologists regarding anything related to sexuality. User can also do an interactive test after finishing each material.",
    githubLink: "https://github.com/alfonsus20/edusex-frontend",
    hostingLink: "http://edusex.vercel.app",
    technologies: [
      "React.js",
      "Chakra UI",
      "PWA",
      "Websocket",
      "Nest.js",
      "Typescript",
      "Vite"
    ],
    image: Edusex,
  },
  {
    name: "BCC Design System",
    desc: "An open source UI Library for Basic Computing Community's internal projects. I participated in developing several components, such Appbar, Toast, Text Field, and Switcher.",
    githubLink: "https://github.com/bccfilkom/designsystem",
    hostingLink: "http://design-system-mauve.vercel.app/",
    technologies: ["React.js", "Typescript", "Styled-Component", "Storybook"],
    image: BCCDesignSystem,
  },
  {
    name: 'Helto',
    hostingLink: 'https://helto.vercel.app',
    githubLink: 'https://github.com/alfonsus20/helto-frontend',
    technologies: ['React', 'Tailwind CSS', 'Typescript'],
    desc: `An educational website for potato farmers. 
    I was in charge of building the frontend using React and the ML model for pattern recognition using Python and CNN algorithm. 
    Successfully achieved the first place in IOFTI Web Dev Competition by Tarumanegara University.`,
    image: Helto
  },
  {
    name: 'TedxUniversitasBrawijaya 2022',
    githubLink: 'https://github.com/alfonsus20/tedxub-2022',
    desc: `I developed the frontend and the backend system for the official website, 
    speaker registration, audience registration, admin dashboard and ticketing system. 
    The main website received over 1000 visits. Deployed on GCP and CPanel by utilizing GitHub Actions.`,
    technologies: ['React', 'Framer Motion', 'Vite', 'Tailwind', 'Github Actions', 'GCP', 'OY Payment Gateway'],
    image: Tedx,
    hostingLink: 'https://tedxub-2022.vercel.app'
  },
  {
    name: "Yada Youth Website",
    desc: `A non-profit organization which aims to help Indonesian childrens who are in need to get access to the education. 
    I was the web development manager, led a team of 4 to build the company profile website with 100% unit testing coverage.`,
    githubLink: "https://github.com/alfonsus20/yadayouth-nextjs-v2",
    technologies: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "React Testing Library",
      "Jest",
      "Django",
    ],
    image: YadaYouth,
  },
  {
    name: "Notesgram",
    desc: `Social media mobile app for sharing and buying handwritings notes. 
    Successfully achieved the second place in INTENTION App Development Competition by Padjajaran University. 
    I was responsible to create the backend system and the API documentation.`,
    githubLink: "https://github.com/alfonsus20/notesgram-backend",
    technologies: [
      "Nest.js",
      "OY Payment Gateway",
      "Supabase",
      "Firebase",
      "Typescript",
      "Postman Doc",
    ],
    image: Notesgram,
  },
  {
    name: "Twice But Nice",
    desc: `An e-commerce site for selling thrifted products, 
    consists of the customer facing and admin panel sides. 
    All the end-to-end processes are covered, starting from viewing products, add to cart and favorites, 
    checkout, payment (using Midtrans) and email billing.`,
    githubLink: "https://github.com/alfonsus20/twice-but-nice",
    technologies: [
      "Laravel",
      "PHP",
      "Bootstrap",
      "JQuery",
      "MySQL",
      "Midtrans",
      "AJAX",
    ],
    image: TwiceButNice,
  },

];

export default projectList;
