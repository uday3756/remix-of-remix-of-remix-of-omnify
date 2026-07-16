import { useState } from "react";
import { SITE } from "@/data/nav";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useTheme } from "@/components/ThemeProvider";
import type { HeroBgId } from "@/lib/theme";
import heroPhoto from "@/assets/intro/1.jpg.asset.json";
import { NeoBrutalistHero } from "@/components/NeoBrutalistHero";
import { ObsidianHero } from "@/components/ObsidianHero";

/**
 * Sources for the Hero background. The mode (default / image / video) is
 * chosen live from the theme customizer (the 🎨 panel → "Hero background"),
 * which also lets a visitor upload their own photo/video from their device
 * (saved to their browser only — see ThemeProvider).
 *
 * These are the fallbacks used when nothing has been uploaded:
 * PHOTO: swap the import above (`2.jpg.asset.json` … `6.jpg.asset.json`) to
 *        use a different gym photo, or point at any uploaded asset's `url`.
 * VIDEO: drop a file in `public/` (served at "/<filename>") and set
 *        HERO_VIDEO_SRC below, or point it at an uploaded asset url. Until a
 *        real video exists the "Video" option falls back to the brand color.
 */
const HERO_IMAGE_SRC = heroPhoto.url;
const HERO_VIDEO_SRC = "/hero-video.mp4";

type HeroBackground =
  | { type: "color" }
  | { type: "image"; src: string }
  | { type: "video"; src: string; poster?: string };

function resolveBackground(
  mode: HeroBgId,
  customImage: string | null,
  customVideo: string | null,
): HeroBackground {
  switch (mode) {
    case "image":
      return { type: "image", src: customImage ?? HERO_IMAGE_SRC };
    case "video":
      return {
        type: "video",
        src: customVideo ?? HERO_VIDEO_SRC,
        poster: customImage ?? HERO_IMAGE_SRC,
      };
    // "gradient" is a page-wide background handled by <SiteBackground/>; the
    // hero itself stays transparent (washed) so the page gradient shows through.
    default:
      return { type: "color" };
  }
}

/**
 * "SaaS" hero background: a fixed, high-contrast golden-yellow layout with a
 * bracket-highlighted headline and a browser-style stat mockup, inspired by
 * modern SaaS landing pages. Unlike the other modes this is a full custom
 * hero layout (not just a background layer), so it's rendered standalone
 * from <Hero/> rather than composed with HeroBackgroundLayer.
 */
function SaasHero() {
  return (
    <section
      className="relative isolate overflow-hidden border-b border-border"
      style={{ backgroundColor: "#F5D442" }}
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-black/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black">
            New · Personal Training
          </span>
          <h1 className="font-display mt-6 text-4xl font-extrabold leading-tight tracking-tight text-black sm:text-5xl">
            Master Your Fitness with{" "}
            <span className="rounded-md bg-black px-2 py-0.5 text-[#F5D442]">Expert-Led</span>{" "}
            Precision
          </h1>
          <p className="mt-4 max-w-md text-base text-black/70">
            Find the perfect class, camp, or party for your family — hyper-personal coaching, real
            results, real fast.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-semibold text-[#F5D442] shadow-sm transition-transform hover:scale-[1.03]"
            >
              Begin Your Journey
              <span aria-hidden>→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-black px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-black/5"
            >
              Watch Demo
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md rounded-2xl border border-black/10 bg-white p-4 shadow-2xl">
          <div className="flex items-center gap-1.5 pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-end gap-1.5 rounded-lg bg-black/5 p-4">
              {[40, 70, 55, 90, 65].map((h, i) => (
                <span key={i} className="w-2 rounded-sm bg-black" style={{ height: `${h}px` }} />
              ))}
            </div>
            <div className="rounded-lg bg-black p-4 text-[#F5D442]">
              <p className="text-[10px] font-semibold uppercase tracking-wide opacity-70">
                Next Class
              </p>
              <p className="mt-2 text-sm font-bold">Toddler Tumbling</p>
              <p className="mt-1 text-xs opacity-70">Today · 4:30 PM</p>
              <div className="mt-3 h-1.5 w-full rounded-full bg-[#F5D442]/20">
                <div className="h-1.5 w-2/3 rounded-full bg-[#F5D442]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
  const { heroBg, customHeroImage, customHeroVideo } = useTheme();

  if (heroBg === "saas") return <SaasHero />;
  if (heroBg === "neobrutalist") return <NeoBrutalistHero />;
  if (heroBg === "obsidian") return <ObsidianHero />;

  const background = resolveBackground(heroBg, customHeroImage, customHeroVideo);

  const words = [
    { text: "Welcome" },
    { text: "to" },
    { text: SITE.name, className: "text-primary" },
  ];
  return (
    <section className="page-surface relative isolate border-b border-border bg-foreground text-background">
      {/* key forces the failed-state to reset when the mode or source changes */}
      <HeroBackgroundLayer
        key={`${heroBg}:${background.type === "color" ? "" : background.src}`}
        background={background}
      />
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:py-28">
        <p className="text-sm opacity-80 sm:text-base">The road to fitness starts from here</p>
        <TypewriterEffectSmooth
          words={words}
          className="font-display [&_span]:!text-background [&_span]:font-display"
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
