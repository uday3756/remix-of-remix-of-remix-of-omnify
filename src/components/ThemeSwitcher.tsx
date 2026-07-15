import { useState } from "react";
import { HERO_BACKGROUNDS, SHAPES, THEMES } from "@/lib/theme";
import { useTheme } from "./ThemeProvider";

export function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const { theme, shape, heroBg, setTheme, setShape, setHeroBg } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-64 rounded-2xl border border-border bg-surface p-4 shadow-2xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Color theme
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {THEMES.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTheme(t.id)}
                aria-label={t.label}
                aria-pressed={theme === t.id}
                className={`flex h-9 w-9 items-center justify-center rounded-full border-2 transition-transform hover:scale-110 ${
                  theme === t.id ? "border-foreground" : "border-transparent"
                }`}
                style={{ backgroundColor: t.swatch }}
              />
            ))}
          </div>

          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">
            Header &amp; footer shape
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {SHAPES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setShape(s.id)}
                aria-pressed={shape === s.id}
                className={`rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
                  shape === s.id
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted hover:border-primary/50"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">
            Hero background
          </p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {HERO_BACKGROUNDS.map((bg) => (
              <button
                key={bg.id}
                type="button"
                onClick={() => setHeroBg(bg.id)}
                aria-pressed={heroBg === bg.id}
                className={`rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
                  heroBg === bg.id
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted hover:border-primary/50"
                }`}
              >
                {bg.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open theme customizer"
        aria-expanded={open}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl text-primary-foreground shadow-xl transition-transform hover:scale-105"
      >
        🎨
      </button>
    </div>
  );
}
