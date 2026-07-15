import { useState } from "react";
import { SITE } from "@/data/nav";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import heroPhoto from "@/assets/intro/1.jpg.asset.json";

/**
 * Hero background options.
 *
 * Switch the look of the Hero section by changing `HERO_BACKGROUND` below:
 *   - { type: "color" }                          → solid brand color (original look)
 *   - { type: "image", src: "…" }                → full-bleed photo background
 *   - { type: "video", src: "…", poster?: "…" }  → auto-playing, looping video background
 *
 * PHOTO: point `src` at any uploaded image asset's `url` (see `src/assets`).
 *        Swap the import above (e.g. `2.jpg.asset.json` … `6.jpg.asset.json`)
 *        to use a different gym photo.
 *
 * VIDEO: upload a video and set, for example,
 *          { type: "video", src: "/hero-video.mp4", poster: heroPhoto.url }
 *        (a file in `public/` is served at "/<filename>"). `poster` shows a
 *        still image until the video is ready to play.
 */
type HeroBackground =
  | { type: "color" }
  | { type: "image"; src: string }
  | { type: "video"; src: string; poster?: string };

const HERO_BACKGROUND: HeroBackground = {
  type: "image",
  src: heroPhoto.url,
};

function HeroBackgroundLayer({ background }: { background: HeroBackground }) {
  // If the media fails to load, fall back to the solid brand color rather
  // than showing a broken/empty hero.
  const [failed, setFailed] = useState(false);

  if (background.type === "color" || failed) return null;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {background.type === "image" ? (
        <img
          src={background.src}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <video
          className="h-full w-full object-cover"
          src={background.src}
          poster={background.poster}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          onError={() => setFailed(true)}
        />
      )}
      {/* Gradient scrim: lets the photo/video show through while keeping the
          headline and button readable. */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/45 to-foreground/70" />
    </div>
  );
}

export function Hero() {
  const words = [
    { text: "Welcome" },
    { text: "to" },
    { text: SITE.name, className: "text-primary" },
  ];
  return (
    <section className="relative isolate bg-foreground text-background border-b border-border">
      <HeroBackgroundLayer background={HERO_BACKGROUND} />
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:py-28">
        <p className="text-sm opacity-80 sm:text-base">
          The road to fitness starts from here
        </p>
        <TypewriterEffectSmooth
          words={words}
          className="[&_span]:!text-background"
        />
        <p className="mx-auto mt-2 max-w-xl text-base opacity-80">
          Find the perfect class, camp, or party for your family.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03]"
          >
            Book Now
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
