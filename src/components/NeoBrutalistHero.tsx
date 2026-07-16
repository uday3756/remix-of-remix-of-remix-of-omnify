import { useState } from "react";

export function NeoBrutalistHero() {
  const [mounted, setMounted] = useState(false);

  return (
    <>
      {/* Fixed Header */}
      <header className="neo-header fixed top-0 left-0 right-0 z-50">
        <div className="neo-header-logo">
          <div className="neo-header-logo-square" />
          <span className="text-cabinet text-lg">GYM</span>
        </div>
        <nav className="neo-header-nav">
          <a href="#classes">Classes</a>
          <a href="#camps">Camps</a>
          <a href="#training">Training</a>
          <a href="#about">About</a>
        </nav>
        <button className="neo-btn-primary">Contact</button>
      </header>

      {/* Hero Section */}
      <section
        className="pt-20 pb-20"
        style={{ backgroundColor: "var(--neo-yellow)" }}
      >
        <div className="pattern-dots-32 absolute inset-0 opacity-10" />
        <div className="mx-auto max-w-6xl px-6 relative">
          <div className="grid grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-black px-4 py-2 text-xs font-bold text-black mb-8 shadow-hard-sm">
                NEW · PERSONAL TRAINING
              </div>
              <h1 className="text-cabinet text-7xl font-bold text-black leading-tight mb-6">
                Master Your Fitness with{" "}
                <span className="bg-black text-yellow-300 px-2 py-1 text-stroke">
                  Expert-Led
                </span>{" "}
                Precision
              </h1>
              <p className="text-satoshi text-lg text-black/80 max-w-sm mb-8">
                Find the perfect class, camp, or party for your family — hyper-personal coaching,
                real results, real fast.
              </p>
              <div className="flex gap-4">
                <button className="neo-btn-primary">Begin Your Journey</button>
                <button className="neo-btn-secondary">Watch Demo</button>
              </div>
            </div>

            {/* Right Column - Browser Mockup */}
            <div className="relative">
              <div
                className="rounded-lg border-2 border-black bg-white shadow-hard-md"
                style={{ borderRadius: "12px" }}
              >
                {/* Title Bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b-2 border-black bg-gray-100">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#febc2e" }} />
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28c840" }} />
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-end gap-1.5 mb-6">
                    {[40, 70, 55, 90, 65].map((h, i) => (
                      <span
                        key={i}
                        className="w-3 rounded-sm flex-1"
                        style={{
                          height: `${h}px`,
                          backgroundColor: "var(--neo-charcoal)",
                        }}
                      />
                    ))}
                  </div>
                  <div
                    className="p-4 rounded-lg text-white"
                    style={{ backgroundColor: "var(--neo-charcoal)" }}
                  >
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: "var(--neo-sage)" }}
                    >
                      Next Class
                    </p>
                    <p className="text-sm font-bold mb-2">Toddler Tumbling</p>
                    <p className="text-xs opacity-70 mb-3">Today · 4:30 PM</p>
                    <div className="h-1.5 w-full rounded-full" style={{ backgroundColor: "#333" }}>
                      <div
                        className="h-1.5 rounded-full"
                        style={{
                          width: "66%",
                          backgroundColor: "var(--neo-yellow)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Marquee */}
      <section
        className="overflow-hidden py-12"
        style={{ backgroundColor: "var(--neo-charcoal)" }}
      >
        <div className="flex">
          <div className="marquee flex shrink-0">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12 px-12">
                {["Elite Fitness", "Peak Performance", "Strength Labs", "Motion Studio"].map(
                  (org, j) => (
                    <span
                      key={j}
                      className="text-4xl font-cabinet text-center opacity-50 whitespace-nowrap"
                      style={{ color: "var(--neo-sage)" }}
                    >
                      {org}
                    </span>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--neo-white)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-cabinet text-5xl text-black mb-12 text-center">
            The Challenge & The Solution
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {/* Problem Card */}
            <div
              className="p-8 rounded-3xl border-2 border-dashed"
              style={{
                backgroundColor: "#f4f4f5",
                borderColor: "#999",
                opacity: 0.7,
              }}
            >
              <h3 className="text-cabinet text-2xl text-black mb-6">The Problem</h3>
              <ul className="space-y-4">
                {["One-size-fits-all classes", "Limited schedule flexibility", "No progress tracking"].map(
                  (item, i) => (
                    <li key={i} className="flex items-center gap-3 text-black">
                      <span className="text-xl" style={{ color: "#ff5f57" }}>
                        ✕
                      </span>
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Solution Card */}
            <div
              className="p-8 rounded-3xl border-2 shadow-hard-md"
              style={{
                backgroundColor: "var(--neo-yellow)",
                borderColor: "var(--neo-black)",
              }}
            >
              <h3 className="text-cabinet text-2xl text-black mb-6">Our Solution</h3>
              <ul className="space-y-4">
                {["Personalized coaching", "Flexible scheduling", "Real-time progress tracking"].map(
                  (item, i) => (
                    <li key={i} className="flex items-center gap-3 text-black">
                      <div
                        className="w-6 h-6 flex items-center justify-center text-white"
                        style={{ backgroundColor: "var(--neo-black)" }}
                      >
                        ✓
                      </div>
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section
        className="py-20 pattern-dots-32"
        style={{ backgroundColor: "var(--neo-yellow)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-cabinet text-5xl text-black mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { icon: "📊", title: "Data-Driven", desc: "Track every workout and progress" },
              { icon: "👥", title: "Expert Coaches", desc: "Certified trainers guide your journey" },
              { icon: "🎯", title: "Personalized", desc: "Plans tailored to your goals" },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 bg-white border-2 border-black shadow-hard-sm"
                style={{ borderRadius: "8px" }}
              >
                <div
                  className="w-16 h-16 flex items-center justify-center mb-4 border-2 border-black transition-colors hover:bg-yellow-300"
                  style={{ backgroundColor: "var(--neo-sage)", borderRadius: "4px" }}
                >
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-cabinet text-2xl text-black mb-2">{feature.title}</h3>
                <p className="text-satoshi text-black/70">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Flow */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--neo-charcoal)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-cabinet text-5xl mb-12 text-center" style={{ color: "var(--neo-white)" }}>
            Our Process
          </h2>
          <div className="flex items-center justify-between relative">
            {/* Connecting line */}
            <div
              className="absolute top-12 left-0 right-0 h-1"
              style={{
                backgroundColor: "#444",
                zIndex: 0,
              }}
            />
            {/* Steps */}
            {[
              { num: "01", label: "Assessment", glow: "glow-sage" },
              { num: "02", label: "Training", glow: "glow-yellow" },
              { num: "03", label: "Achieve", glow: "glow-white" },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center relative z-10">
                <div
                  className={`w-24 h-24 rounded-full flex items-center justify-center border-2 border-black ${step.glow} relative`}
                  style={{ backgroundColor: "var(--neo-charcoal)" }}
                >
                  <span className="text-cabinet text-4xl text-white">{step.num}</span>
                </div>
                <p className="text-satoshi text-white mt-4">{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--neo-sage)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-cabinet text-5xl text-black mb-12 text-center">What Our Members Say</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { name: "Sarah", quote: "Amazing experience, life-changing results!" },
              { name: "Michael", quote: "Best decision I made for my fitness journey." },
              { name: "Jessica", quote: "The personal attention is unmatched." },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="asymmetric-card"
                style={{
                  borderTopRightRadius: "1.875rem",
                  borderBottomLeftRadius: "1.875rem",
                  borderTopLeftRadius: "2px",
                  borderBottomRightRadius: "2px",
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} style={{ color: "#ffbc2e" }}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-satoshi text-black mb-4">"{testimonial.quote}"</p>
                <p className="text-cabinet text-black font-bold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 border-t-2 border-black"
        style={{ backgroundColor: "var(--neo-charcoal)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-4 gap-8 mb-12">
            {[
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Contact"],
              },
              {
                title: "Product",
                links: ["Classes", "Coaching", "Camps", "Pricing"],
              },
              {
                title: "Resources",
                links: ["FAQ", "Support", "Community", "Events"],
              },
              {
                title: "Connect",
                links: ["Twitter", "Instagram", "Facebook", "LinkedIn"],
              },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="text-cabinet text-white mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-white/50 text-satoshi hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-satoshi" style={{ color: "rgba(255, 255, 255, 0.1)" }}>
              © 2024 My Gym. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
