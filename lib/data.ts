import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import weather from "@/public/weath.png";
import travel from "@/public/travel.png";
import fr from "@/public/fr.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "High School Internship",
    location: "Istanbul, TR",
    description:
      "I worked as an IT Officer at Istanbul Yeniyuzyil University for 7 months.",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "Hugin",
    location: "Istanbul, TR",
    description:
      "I completed a short-term university internship for one month and developed a desktop application using C# during this period.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Istınye University",
    location: "Istanbul, TR",
    description:
      "I have studied computer programming for 2 years, and now I am a graduate actively searching for a full-time job.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Weather",
    description:
      "Users can learn the weather of the place they want with this application.",
    tags: ["React", "Next.js", "API", "Tailwind"],
    imageUrl: weather,
  },
  {
    title: "E-Commerce",
    description: "This project is an e-commerce front-end project",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: fr,
  },
  {
    title: "Travel App",
    description:
      "The application lists places to visit, and allows us to save them to memory as desired.",
    tags: ["Flutter", "ISAR", "Dart"],
    imageUrl: travel,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Flutter ",
  "SQL",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
] as const;
