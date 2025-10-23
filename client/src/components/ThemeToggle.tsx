import { useTheme } from "@/contexts/ThemeContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export function ThemeToggle() {
  const { theme, toggleTheme, switchable } = useTheme();

  if (!switchable || !toggleTheme) return null;

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center h-9 w-9 rounded-lg border border-scheme-border bg-transparent hover-elevate active-elevate-2 transition-colors"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      data-testid="button-theme-toggle"
    >
      {theme === "light" ? (
        <MdDarkMode className="h-4 w-4 text-foreground" />
      ) : (
        <MdLightMode className="h-4 w-4 text-foreground" />
      )}
    </button>
  );
}
