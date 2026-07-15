import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_SHAPE,
  DEFAULT_THEME,
  SHAPE_STORAGE_KEY,
  THEME_STORAGE_KEY,
  isShapeId,
  isThemeId,
  type ShapeId,
  type ThemeId,
} from "@/lib/theme";

interface ThemeContextValue {
  theme: ThemeId;
  shape: ShapeId;
  setTheme: (theme: ThemeId) => void;
  setShape: (shape: ShapeId) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(DEFAULT_THEME);
  const [shape, setShapeState] = useState<ShapeId>(DEFAULT_SHAPE);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    const storedShape = window.localStorage.getItem(SHAPE_STORAGE_KEY);
    if (isThemeId(storedTheme)) setThemeState(storedTheme);
    if (isShapeId(storedShape)) setShapeState(storedShape);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-shape", shape);
  }, [shape]);

  const setTheme = (next: ThemeId) => {
    setThemeState(next);
    window.localStorage.setItem(THEME_STORAGE_KEY, next);
  };

  const setShape = (next: ShapeId) => {
    setShapeState(next);
    window.localStorage.setItem(SHAPE_STORAGE_KEY, next);
  };

  return (
    <ThemeContext.Provider value={{ theme, shape, setTheme, setShape }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
