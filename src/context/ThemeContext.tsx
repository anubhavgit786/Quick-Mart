import { createContext, useEffect, useState, useContext, ReactNode } from "react";

// ✅ Define the type for context value
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// ✅ Provide a default context value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ✅ Type the ThemeProvider Props
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as "light" | "dark") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme: "light" | "dark" = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.replace(theme, newTheme);
    setTheme(newTheme);
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

// ✅ Type-safe useTheme hook
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
