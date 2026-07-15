import { SITE } from "@/data/nav";

export function Hero() {
  return (
    <section className="hero-gradient border-b border-border">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-28">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Welcome to {SITE.name}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted">
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
