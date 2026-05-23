"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

// useSyncExternalStore returns getServerSnapshot() on both server and during
// hydration, so server and client agree on `false`. After hydration it
// switches to getSnapshot() → true, triggering a single re-render.
function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const mounted = useIsMounted();

  if (!mounted) return null;

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <button
      className="w-8 flex items-center justify-center hover:scale-110 active:scale-100 transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? <LuSun size={24} /> : <LuMoon size={24} />}
    </button>
  );
}
