import { SITE } from "@/data/nav";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function Hero() {
  const words = [
    { text: "Welcome" },
    { text: "to" },
    { text: SITE.name, className: "text-primary" },
  ];
  return (
    <section className="bg-foreground text-background border-b border-border">
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
