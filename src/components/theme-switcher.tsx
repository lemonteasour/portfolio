"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, [setTheme]);

  if (!mounted) return null;

  return (
    <button
      className="fixed bottom-5 right-5 w-10 h-10 bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-120 active:scale-100 transition-all bg-gray-800 dark:bg-white text-white dark:text-gray-800"
      onClick={toggleTheme}
    >
      {theme === "light" ? <LuSun /> : <LuMoon />}
    </button>
  );
}
