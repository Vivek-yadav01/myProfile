import img1 from "@/public/img1.png";
import img2 from "@/public/img2.png";
import img3 from "@/public/img3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "skillConnect",
    description:
      "I worked as a full-stack developer mainly frontend on this startup project for a Hackathon at NITJ. where Labours can connect to employers.",
    tags: ["React", "MongoDB", "Tailwind", "Nodejs", "Expressjs"],
    imageUrl: img1,
  },
  {
    title: "Tic Tac Toe",
    description: "Created a Tic Tac Toe Game as  basic Project",
    tags: ["html", "css", "javascript"],
    imageUrl: img2,
  },
  {
    title: "MyPortFolio",
    description: "PortFolio Website",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: img3,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",

  "MongoDB",
  "Redux",

  "Express",
  "Sql",

  // "Django",
  "Framer Motion",
] as const;
