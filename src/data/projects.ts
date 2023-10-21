import { StaticImageData } from "next/image";

import Edusex from "@/assets/images/projects/edusex.png";
import BCCDesignSystem from "@/assets/images/projects/bcc-design-system.png";
import YadaYouth from "@/assets/images/projects/yadayouth.png";

export interface ProjectData {
  name: string;
  desc: string;
  githubLink?: string;
  hostingLink?: string;
  technologies: string[];
  image: StaticImageData;
}

const projectList: ProjectData[] = [
  {
    name: "Edusex",
    desc: "A sexual education website for teenagers. This web app provides materials, discussion forums, and personal consultations with psychologists regarding anything related to sexuality. User can also do an interactive test after finishing each material.",
    githubLink: "https://github.com/alfonsus20/edusex-frontend",
    hostingLink: "http://edusex.vercel.app",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "PWA",
      "Websocket",
      "Nest.js",
      "Typescript",
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
    name: "Yada Youth Website",
    desc: "A non-profit organization which aims to help Indonesian childrens who are in need to get access to the education. I was the web development manager, led a team of 4 to build the company profile website with 100% unit testing coverage.",
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
];

export default projectList;
