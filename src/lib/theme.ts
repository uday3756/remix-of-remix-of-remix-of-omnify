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
export type HeroBgId = "default" | "image" | "video";

export interface ThemeDefinition {
  id: ThemeId;
  label: string;
  swatch: string;
}

export interface ShapeDefinition {
  id: ShapeId;
  label: string;
}

export interface HeroBgDefinition {
  id: HeroBgId;
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

export const HERO_BACKGROUNDS: HeroBgDefinition[] = [
  { id: "default", label: "Default" },
  { id: "image", label: "Image" },
  { id: "video", label: "Video" },
];

export const DEFAULT_THEME: ThemeId = "default";
export const DEFAULT_SHAPE: ShapeId = "straight";
export const DEFAULT_HERO_BG: HeroBgId = "image";

export const THEME_STORAGE_KEY = "omnifyhome:theme";
export const SHAPE_STORAGE_KEY = "omnifyhome:shape";
export const HERO_BG_STORAGE_KEY = "omnifyhome:hero-bg";
// Data-URL of a photo/video the visitor uploaded from their own device.
// Stored per-browser only — there is no backend to share it with other visitors.
export const HERO_CUSTOM_IMAGE_STORAGE_KEY = "omnifyhome:hero-bg-custom-image";
export const HERO_CUSTOM_VIDEO_STORAGE_KEY = "omnifyhome:hero-bg-custom-video";

export function isThemeId(value: string | null): value is ThemeId {
  return !!value && THEMES.some((theme) => theme.id === value);
}

export function isShapeId(value: string | null): value is ShapeId {
  return !!value && SHAPES.some((shape) => shape.id === value);
}

export function isHeroBgId(value: string | null): value is HeroBgId {
  return !!value && HERO_BACKGROUNDS.some((bg) => bg.id === value);
}
