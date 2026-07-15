import { useRef, useState } from "react";
import { HERO_BACKGROUNDS, SHAPES, THEMES } from "@/lib/theme";
import { useTheme } from "./ThemeProvider";

// Generous but bounded — browsers cap localStorage at roughly 5–10MB per
// origin, and a data URL is ~33% bigger than the raw file.
const MAX_UPLOAD_BYTES = 4 * 1024 * 1024;

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [uploadNotice, setUploadNotice] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
  const {
    theme,
    shape,
    heroBg,
    customHeroImage,
    customHeroVideo,
    setTheme,
    setShape,
    setHeroBg,
    setCustomHeroImage,
    setCustomHeroVideo,
  } = useTheme();

  const handleUpload = async (
    file: File | undefined,
    apply: (dataUrl: string | null) => boolean,
    kind: "photo" | "video",
  ) => {
    if (!file) return;
    if (file.size > MAX_UPLOAD_BYTES) {
      setUploadNotice(
        `That ${kind} is too large (max ${Math.round(MAX_UPLOAD_BYTES / 1024 / 1024)}MB). Try a smaller or more compressed file.`,
      );
      return;
    }
    const dataUrl = await readFileAsDataUrl(file);
    const persisted = apply(dataUrl);
    setUploadNotice(
      persisted
        ? null
        : `Your ${kind} is applied for this visit, but is too large to remember after a reload.`,
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-72 rounded-2xl border border-border bg-surface p-4 shadow-2xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">Color theme</p>
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

          <p className="mt-3 text-[11px] leading-snug text-muted">
            Upload from your own device — saved to this browser only.
          </p>
          <div className="mt-2 flex flex-col gap-2">
            <input
              ref={imageInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                void handleUpload(e.target.files?.[0], setCustomHeroImage, "photo");
                e.target.value = "";
              }}
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => imageInputRef.current?.click()}
                className="flex-1 rounded-lg border border-border px-3 py-2 text-xs font-medium text-muted transition-colors hover:border-primary/50"
              >
                Upload photo
              </button>
              {customHeroImage && (
                <button
                  type="button"
                  onClick={() => setCustomHeroImage(null)}
                  aria-label="Remove uploaded photo"
                  className="rounded-lg border border-border px-2 text-xs text-muted transition-colors hover:border-primary/50"
                >
                  ✕
                </button>
              )}
            </div>

            <input
              ref={videoInputRef}
              type="file"
              accept="video/*"
              className="hidden"
              onChange={(e) => {
                void handleUpload(e.target.files?.[0], setCustomHeroVideo, "video");
                e.target.value = "";
              }}
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => videoInputRef.current?.click()}
                className="flex-1 rounded-lg border border-border px-3 py-2 text-xs font-medium text-muted transition-colors hover:border-primary/50"
              >
                Upload video
              </button>
              {customHeroVideo && (
                <button
                  type="button"
                  onClick={() => setCustomHeroVideo(null)}
                  aria-label="Remove uploaded video"
                  className="rounded-lg border border-border px-2 text-xs text-muted transition-colors hover:border-primary/50"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
          {uploadNotice && (
            <p className="mt-2 text-[11px] leading-snug text-primary">{uploadNotice}</p>
          )}
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
