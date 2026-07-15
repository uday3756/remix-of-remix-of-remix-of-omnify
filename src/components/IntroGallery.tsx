import { useEffect, useState } from "react";
import InfiniteGallery from "@/components/ui/3d-gallery-photography";

const sampleImages = [
  { src: "https://images.unsplash.com/photo-1741332966416-414d8a5b8887?w=800&auto=format&fit=crop&q=60", alt: "Image 1" },
  { src: "https://images.unsplash.com/photo-1754769440490-2eb64d715775?w=800&auto=format&fit=crop&q=60", alt: "Image 2" },
  { src: "https://images.unsplash.com/photo-1758640920659-0bb864175983?w=800&auto=format&fit=crop&q=60", alt: "Image 3" },
  { src: "https://plus.unsplash.com/premium_photo-1758367454070-731d3cc11774?w=800&auto=format&fit=crop&q=60", alt: "Image 4" },
  { src: "https://images.unsplash.com/photo-1746023841657-e5cd7cc90d2c?w=800&auto=format&fit=crop&q=60", alt: "Image 5" },
  { src: "https://images.unsplash.com/photo-1741715661559-6149723ea89a?w=800&auto=format&fit=crop&q=60", alt: "Image 6" },
  { src: "https://images.unsplash.com/photo-1725878746053-407492aa4034?w=800&auto=format&fit=crop&q=60", alt: "Image 7" },
  { src: "https://images.unsplash.com/photo-1752588975168-d2d7965a6d64?w=800&auto=format&fit=crop&q=60", alt: "Image 8" },
];

export function IntroGallery({ onFinish }: { onFinish: () => void }) {
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // prevent page scroll during intro
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const fadeTimer = setTimeout(() => setFadingOut(true), 4500);
    const doneTimer = setTimeout(() => {
      document.body.style.overflow = prevOverflow;
      onFinish();
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = prevOverflow;
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-foreground transition-opacity duration-500 ${
        fadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <InfiniteGallery images={sampleImages} className="h-full w-full" />
      <div className="pointer-events-none absolute inset-x-0 top-8 flex justify-center">
        <h1 className="text-3xl font-bold tracking-widest text-background sm:text-5xl">
          My Gym Walnut Creek
        </h1>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center">
        <p className="text-sm text-background/80 sm:text-base">
          Loading your experience…
        </p>
      </div>
    </div>
  );
}
