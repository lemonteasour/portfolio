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
      className="w-8 flex items-center justify-center hover:scale-110 active:scale-100 transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? <LuSun size={24} /> : <LuMoon size={24} />}
    </button>
  );
}
