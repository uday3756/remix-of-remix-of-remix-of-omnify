export type ThemeId =
  | "default"
  | "sunset"
  | "forest"
  | "midnight"
  | "ocean"
  | "coral"
  | "noir"
  | "cloud";
export type ShapeId = "straight" | "wave" | "curve" | "angle";

export interface ThemeDefinition {
  id: ThemeId;
  label: string;
  swatch: string;
}

export interface ShapeDefinition {
  id: ShapeId;
  label: string;
}

export const THEMES: ThemeDefinition[] = [
  { id: "default", label: "Default", swatch: "#2563eb" },
  { id: "sunset", label: "Sunset", swatch: "#f97316" },
  { id: "forest", label: "Forest", swatch: "#059669" },
  { id: "midnight", label: "Midnight", swatch: "#7c3aed" },
  { id: "ocean", label: "Ocean", swatch: "#1C7293" },
  { id: "coral", label: "Coral Play", swatch: "#F96167" },
  { id: "noir", label: "Noir Gold", swatch: "#C9A84C" },
  { id: "cloud", label: "Cloud", swatch: "#3B82F6" },
];

export const SHAPES: ShapeDefinition[] = [
  { id: "straight", label: "Straight" },
  { id: "wave", label: "Wave" },
  { id: "curve", label: "Curve" },
  { id: "angle", label: "Angle" },
];

export const DEFAULT_THEME: ThemeId = "default";
export const DEFAULT_SHAPE: ShapeId = "straight";

export const THEME_STORAGE_KEY = "omnifyhome:theme";
export const SHAPE_STORAGE_KEY = "omnifyhome:shape";

export function isThemeId(value: string | null): value is ThemeId {
  return !!value && THEMES.some((theme) => theme.id === value);
}

export function isShapeId(value: string | null): value is ShapeId {
  return !!value && SHAPES.some((shape) => shape.id === value);
}
