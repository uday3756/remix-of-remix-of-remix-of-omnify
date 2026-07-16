/**
 * "Obsidian & Lime" — a dark-mode-first glassmorphism hero/landing background.
 * Floating-shell architecture: the whole page lives inside a rounded obsidian
 * container over a black viewport, with glass cards, a bento grid, a light
 * contrast section, and a watermark footer. Space Grotesk + JetBrains Mono.
 */
export function ObsidianHero() {
  return (
    <div style={{ backgroundColor: "#000000" }} className="min-h-screen py-4 sm:py-8">
      {/* Floating shell */}
      <div
        className="relative mx-auto overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-white/10 font-space"
        style={{ maxWidth: "1600px", backgroundColor: "#0c0c0c", color: "var(--obs-white)" }}
      >
        {/* Grid + noise + glow spheres */}
        <div className="pointer-events-none absolute inset-0 obs-grid-bg" aria-hidden />
        <div className="pointer-events-none absolute inset-0 obs-noise" aria-hidden />
        <div
          className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] obs-glow-lime"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-40 top-1/3 h-[500px] w-[500px] obs-glow-emerald"
          aria-hidden
        />

        {/* Navigation */}
        <nav className="relative z-20 flex items-center justify-between px-6 py-6 sm:px-10">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold text-black"
              style={{ backgroundColor: "var(--obs-lime)" }}
            >
              G
            </div>
            <span className="text-lg font-semibold tracking-tight">MyGym</span>
          </div>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-md md:flex">
            {["Classes", "Camps", "Training", "About"].map((link) => (
              <a
                key={link}
                href="#"
                className="rounded-full px-4 py-1.5 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="obs-status-tag hidden sm:inline-flex">
              <span className="obs-status-dot" />
              System Online
            </span>
            <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-transform hover:scale-105">
              Book Now
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative z-10 grid grid-cols-1 gap-10 px-6 pb-20 pt-10 sm:px-10 lg:grid-cols-12 lg:pt-16">
          {/* Left 7 cols */}
          <div className="lg:col-span-7">
            <span className="obs-status-tag mb-6">
              <span className="obs-status-dot" />
              AI-Powered Coaching
            </span>
            <h1
              className="font-space font-light tracking-tight"
              style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)", lineHeight: 0.85, letterSpacing: "-0.06em" }}
            >
              Master your
              <br />
              fitness with <span className="obs-gradient-text">precision</span>
            </h1>
            <p className="mt-8 max-w-md text-lg text-white/60">
              Find the perfect class, camp, or party for your family. Data-driven coaching that
              adapts to every body.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button className="obs-btn-neon">Begin Your Journey</button>
              <button className="rounded-full border border-white/20 px-8 py-4 font-medium text-white transition-colors hover:bg-white/5">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right 5 cols — glass mockup */}
          <div className="relative lg:col-span-5">
            <div className="obs-glass obs-float-anim relative p-6">
              <div className="obs-status-tag mb-4">
                <span className="obs-status-dot" />
                Live Dashboard
              </div>
              <div className="mb-6 flex items-end gap-2" style={{ height: "120px" }}>
                {[45, 70, 55, 90, 65, 80].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-md"
                    style={{
                      height: `${h}%`,
                      background:
                        i === 3
                          ? "var(--obs-lime)"
                          : "linear-gradient(to top, rgba(204,255,0,0.15), rgba(204,255,0,0.4))",
                    }}
                  />
                ))}
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-jetmono text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Next Class
                </p>
                <p className="mt-1 font-semibold">Toddler Tumbling · 4:30 PM</p>
              </div>
            </div>

            {/* Floating AI cursor label */}
            <div
              className="obs-float-anim-delay absolute -bottom-4 -left-4 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-black shadow-lg"
              style={{ backgroundColor: "var(--obs-lime)" }}
            >
              <span>✦</span> AI Coach
            </div>
          </div>
        </section>

        {/* Bento grid features */}
        <section className="relative z-10 px-6 pb-20 sm:px-10">
          <div className="mb-8 flex items-center gap-3">
            <span className="obs-status-tag">
              <span className="obs-status-dot" />
              Features
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {/* Large 2x2 */}
            <div className="obs-glass group col-span-1 p-8 transition-colors hover:border-[#ccff00]/40 md:col-span-2 md:row-span-2">
              <h3 className="text-2xl font-medium tracking-tight">Progress Analytics</h3>
              <p className="mt-2 max-w-sm text-white/60">
                Every rep, every class, tracked and visualized in real time.
              </p>
              <div className="mt-8 flex items-end gap-2" style={{ height: "160px" }}>
                {[30, 55, 40, 75, 60, 85, 70, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t"
                    style={{
                      height: `${h}%`,
                      background: "linear-gradient(to top, rgba(204,255,0,0.1), rgba(204,255,0,0.5))",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Tall 1x2 — swatches */}
            <div className="obs-glass col-span-1 p-6 transition-colors hover:border-[#ccff00]/40 md:row-span-2">
              <h3 className="text-lg font-medium">Class Types</h3>
              <div className="mt-6 space-y-3">
                {[
                  { label: "Gymnastics", c: "#ccff00" },
                  { label: "Camps", c: "#10b981" },
                  { label: "Parties", c: "#ebebeb" },
                  { label: "Open Play", c: "#666" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <span className="h-6 w-6 rounded-lg" style={{ backgroundColor: s.c }} />
                    <span className="font-jetmono text-xs uppercase tracking-wider text-white/60">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accent card — solid lime */}
            <div
              className="relative col-span-1 overflow-hidden rounded-[2.5rem] p-6 text-black md:col-span-1"
              style={{ backgroundColor: "var(--obs-lime)" }}
            >
              <div className="obs-noise pointer-events-none absolute inset-0" aria-hidden />
              <p className="relative font-jetmono text-[10px] uppercase tracking-[0.2em]">
                Members
              </p>
              <p className="relative mt-2 text-4xl font-bold tracking-tight">2,400+</p>
              <p className="relative mt-1 text-sm font-medium">Happy families</p>
            </div>

            {/* Small glass */}
            <div className="obs-glass col-span-1 p-6 transition-colors hover:border-[#ccff00]/40">
              <p className="font-jetmono text-[10px] uppercase tracking-[0.2em] text-white/40">
                Rating
              </p>
              <p className="mt-2 text-4xl font-bold tracking-tight" style={{ color: "var(--obs-lime)" }}>
                4.9
              </p>
              <p className="mt-1 text-sm text-white/60">★★★★★</p>
            </div>
          </div>
        </section>

        {/* Contrast / methodology section */}
        <section
          className="relative z-10 rounded-t-[4rem] px-6 py-20 sm:px-10"
          style={{ backgroundColor: "#e5e5e5", color: "#000000" }}
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <span className="font-jetmono text-[10px] uppercase tracking-[0.2em] text-black/50">
                / Methodology
              </span>
              <h2
                className="mt-4 font-space font-light tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 0.95, letterSpacing: "-0.04em" }}
              >
                How we get results
              </h2>
              <div className="mt-10 space-y-8">
                {[
                  { n: "01", t: "Assess", d: "We map your goals and current fitness baseline." },
                  { n: "02", t: "Train", d: "Personalized coaching adapts every single session." },
                  { n: "03", t: "Achieve", d: "Track measurable progress toward your milestones." },
                ].map((step) => (
                  <div key={step.n} className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-black font-jetmono text-sm font-bold">
                      {step.n}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{step.t}</h3>
                      <p className="mt-1 text-black/60">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Portrait + testimonial */}
            <div className="relative flex items-center justify-center">
              <div
                className="h-72 w-72 rounded-full sm:h-80 sm:w-80"
                style={{
                  background: "linear-gradient(135deg, #999, #444)",
                  filter: "grayscale(1)",
                }}
              />
              <div className="obs-glass absolute -bottom-4 left-1/2 w-64 -translate-x-1/2 p-5" style={{ color: "#000" }}>
                <div className="rounded-xl bg-white/80 p-4">
                  <p className="text-sm font-medium">"My daughter loves every class. The coaches truly care."</p>
                  <p className="mt-2 font-jetmono text-[10px] uppercase tracking-wider text-black/50">
                    — Sarah M., Parent
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 overflow-hidden px-6 py-16 sm:px-10" style={{ backgroundColor: "#000000" }}>
          {/* Watermark */}
          <p
            className="pointer-events-none absolute inset-x-0 top-0 select-none text-center font-space font-bold leading-none text-white"
            style={{ fontSize: "clamp(5rem, 15vw, 10rem)", opacity: 0.05 }}
            aria-hidden
          >
            MYGYM
          </p>

          <div className="relative flex flex-col items-center pt-24 text-center">
            <h2
              className="font-space font-light tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.04em" }}
            >
              Ready to move?
            </h2>
            <button className="obs-btn-neon mt-8">Start Free Trial</button>
          </div>

          <div className="relative mt-16 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
            <div className="flex gap-6">
              {["Privacy", "Terms", "Cookies"].map((l) => (
                <a key={l} href="#" className="text-sm text-white/50 transition-colors hover:text-white">
                  {l}
                </a>
              ))}
            </div>
            <div className="flex justify-center gap-3">
              {["X", "IG", "FB"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs text-white/60 transition-colors hover:border-white hover:text-white"
                >
                  {s}
                </a>
              ))}
            </div>
            <p className="font-jetmono text-[10px] uppercase tracking-[0.2em] text-white/40 sm:text-right">
              © 2026 MyGym Walnut Creek
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
