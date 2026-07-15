import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_HERO_BG,
  DEFAULT_SHAPE,
  DEFAULT_THEME,
  HERO_BG_STORAGE_KEY,
  SHAPE_STORAGE_KEY,
  THEME_STORAGE_KEY,
  isHeroBgId,
  isShapeId,
  isThemeId,
  type HeroBgId,
  type ShapeId,
  type ThemeId,
} from "@/lib/theme";

interface ThemeContextValue {
  theme: ThemeId;
  shape: ShapeId;
  heroBg: HeroBgId;
  setTheme: (theme: ThemeId) => void;
  setShape: (shape: ShapeId) => void;
  setHeroBg: (heroBg: HeroBgId) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(DEFAULT_THEME);
  const [shape, setShapeState] = useState<ShapeId>(DEFAULT_SHAPE);
  const [heroBg, setHeroBgState] = useState<HeroBgId>(DEFAULT_HERO_BG);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    const storedShape = window.localStorage.getItem(SHAPE_STORAGE_KEY);
    const storedHeroBg = window.localStorage.getItem(HERO_BG_STORAGE_KEY);
    if (isThemeId(storedTheme)) setThemeState(storedTheme);
    if (isShapeId(storedShape)) setShapeState(storedShape);
    if (isHeroBgId(storedHeroBg)) setHeroBgState(storedHeroBg);
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

  const setHeroBg = (next: HeroBgId) => {
    setHeroBgState(next);
    window.localStorage.setItem(HERO_BG_STORAGE_KEY, next);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, shape, heroBg, setTheme, setShape, setHeroBg }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
