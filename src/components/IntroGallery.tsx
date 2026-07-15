import { useEffect, useState } from "react";
import InfiniteGallery from "@/components/ui/3d-gallery-photography";
import img1 from "@/assets/intro/1.jpg.asset.json";
import img2 from "@/assets/intro/2.jpg.asset.json";
import img3 from "@/assets/intro/3.jpg.asset.json";
import img4 from "@/assets/intro/4.jpg.asset.json";
import img5 from "@/assets/intro/5.jpg.asset.json";
import img6 from "@/assets/intro/6.jpg.asset.json";

const sampleImages = [
  { src: img1.url, alt: "My Gym 1" },
  { src: img2.url, alt: "My Gym 2" },
  { src: img3.url, alt: "My Gym 3" },
  { src: img4.url, alt: "My Gym 4" },
  { src: img5.url, alt: "My Gym 5" },
  { src: img6.url, alt: "My Gym 6" },
];

export function IntroGallery({ onFinish }: { onFinish: () => void }) {
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Start timers after first paint so slow first-frame doesn't eat intro
    const raf = requestAnimationFrame(() => {
      var fadeTimer = window.setTimeout(() => setFadingOut(true), 5000);
      var doneTimer = window.setTimeout(() => {
        document.body.style.overflow = prevOverflow;
        onFinish();
      }, 5700);
      (raf as unknown as { _t?: number[] })._t = [fadeTimer, doneTimer];
    });

    return () => {
      cancelAnimationFrame(raf);
      const t = (raf as unknown as { _t?: number[] })._t;
      if (t) t.forEach((id) => window.clearTimeout(id));
      document.body.style.overflow = prevOverflow;
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-foreground transition-opacity duration-700 ${
        fadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-radial from-foreground via-foreground to-background/20" />
      <InfiniteGallery images={sampleImages} className="relative h-full w-full" />
      <div className="pointer-events-none absolute inset-x-0 top-8 flex justify-center">
        <h1 className="text-3xl font-bold tracking-widest text-background sm:text-5xl">
          My Gym Walnut Creek
        </h1>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center">
        <p className="text-sm text-background/70 sm:text-base">
          Welcome — your experience is starting
        </p>
      </div>
    </div>
  );
}
