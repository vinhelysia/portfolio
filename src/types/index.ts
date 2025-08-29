export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  date: string; // ISO (used for sorting)
  image?: string; // optional preview image
  demoUrl?: string;
  repoUrl?: string;
  pinned?: boolean;
};

export type SortOption = "new" | "old" | "az";

export type ThemeMode = "light" | "dark";
