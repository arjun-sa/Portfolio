import { create } from "zustand";

type Theme = "dark" | "light";

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "light";

  const savedTheme = localStorage.getItem("theme") as Theme;
  if (savedTheme) return savedTheme;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

export const useTheme = create<ThemeStore>((set) => ({
  theme: getInitialTheme(),
  setTheme: (theme) => {
    localStorage.setItem("theme", theme);
    set({ theme });
  },
}));

// Initialize theme on module load
if (typeof window !== "undefined") {
  const initialTheme = getInitialTheme();
  if (initialTheme === "dark") {
    document.documentElement.classList.add("dark");
  }
}