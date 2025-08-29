import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "genshin-sheet-library",
    title: "Genshin Sheet Library",
    description: "A detailed sheet for every that i upload on YouTube/TikTok with .genshinsheet file for importing it to genshin Music Nightly.",
    tags: ["React", "TypeScript", "Gaming"],
    date: "2025-08-20",
    image: "/src/assets/p1.PNG",
    demoUrl: "https://vinhelysia.github.io/genshin-sheet-library/",
    repoUrl: "https://github.com/vinhelysia/genshin-sheet-library",
    pinned: true,
  },
  {
    id: "sereniteapot-showcase",
    title: "Serenitea Pot Showcase",
    description: "A detailed sheet for every that i upload on YouTube/TikTok with .genshinsheet file for importing it to genshin Music Nightly.",
    tags: ["React", "TypeScript", "Gaming"],
    date: "2025-01-40",
    image: "/src/assets/p2.PNG",
    demoUrl: "https://vinhelysia.github.io/sereniteapot-showcase/",
    repoUrl: "https://github.com/vinhelysia/sereniteapot-showcase",
    pinned: true,
  }
];


export const uniqueTags = [
  "All",
  ...Array.from(new Set(PROJECTS.flatMap((p) => p.tags).filter(tag => tag.trim() !== ""))).sort(),
];
