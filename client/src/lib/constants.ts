import { SiReact, SiTypescript, SiNodedotjs, SiPython, SiGit, SiDocker, SiJavascript, SiPostgresql } from "react-icons/si";

export const SKILLS = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" }
];

export const PROJECTS = [
  {
    title: "Personal Portfolio",
    description: "A modern portfolio website built with React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/username/portfolio"
  },
  {
    title: "Task Manager API",
    description: "RESTful API for managing tasks and projects",
    technologies: ["Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/username/task-manager"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with location tracking",
    technologies: ["React", "OpenWeather API", "Tailwind CSS"],
    github: "https://github.com/username/weather-app"
  }
];
