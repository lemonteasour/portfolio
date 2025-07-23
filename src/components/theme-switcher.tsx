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
      className="w-8 flex items-center justify-center hover:scale-120 active:scale-100 transition-all text-gray-800 dark:text-white"
      onClick={toggleTheme}
    >
      {theme === "light" ? <LuSun size={20} /> : <LuMoon size={20} />}
    </button>
  );
}
