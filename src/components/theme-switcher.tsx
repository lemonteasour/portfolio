"use client";

import { useEffect, useState } from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';

type Theme = "light" | "dark";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
    if (newTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  return (
    <button
      className="fixed bottom-5 right-5 w-10 h-10 bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-120 active:scale-100 transition-all bg-gray-800 dark:bg-white text-white dark:text-gray-800"
      onClick={toggleTheme}
    >
      {theme === "light" ? <LuSun /> : <LuMoon />}
    </button>
  );
}
