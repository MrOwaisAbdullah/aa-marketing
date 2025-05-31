"use client";

import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-14 h-7 rounded-full bg-background/10 backdrop-blur-sm flex items-center transition duration-300 focus:outline-none shadow relative"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      <div
        className={`w-7 h-7 absolute flex justify-center items-center rounded-full transition-all duration-500 transform ${
          theme === "light"
            ? "bg-yellow-500 -translate-x-2"
            : "bg-accent translate-x-full"
        } p-1 text-white`}
      >
        {theme === "light" ? (
          <Sun className="w-full h-full" />
        ) : (
          <Moon className="w-full h-full" />
        )}
      </div>
    </button>
  );
}
