import { useState, useEffect, useRef } from "react";
import { Menu, MenuItem, HoveredLink, ProductItem } from "@/components/ui/navbar-menu";
import { SITE } from "@/data/nav";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [scrollBlur, setScrollBlur] = useState(0);
  const headerRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Increase blur: 0px blur at top, max 15px blur after 300px scroll
      const blur = Math.min(scrollY / 20, 15);
      setScrollBlur(blur);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="shaped-edge shaped-header sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur"
      style={{ filter: `blur(${scrollBlur}px)` }}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-6">
        <a href="/" className="flex shrink-0 items-center gap-2.5 font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
            {SITE.initials}
          </span>
          <span className="text-[15px] tracking-tight">{SITE.name}</span>
        </a>

        <div className={cn("hidden lg:flex flex-1 justify-center")}>
          <Menu setActive={setActive}>
            <a href="/" className="text-foreground hover:opacity-80 cursor-pointer">
              Home
            </a>

            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-2 text-sm">
                <HoveredLink href="#services">All services</HoveredLink>
                <HoveredLink href="#services">Enrollments</HoveredLink>
                <HoveredLink href="#class-cards">Class Cards</HoveredLink>
                <HoveredLink href="#services">Camps</HoveredLink>
                <HoveredLink href="#services">Parties</HoveredLink>
                <HoveredLink href="#trials">Trials</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Programs">
              <div className="grid grid-cols-2 gap-6 p-2">
                <ProductItem
                  title="Waddlers"
                  href="#services"
                  src="/yogamat.svg"
                  description="Beginner enrollment for our youngest athletes."
                />
                <ProductItem
                  title="Little Bunnies"
                  href="#services"
                  src="/resistanceband.svg"
                  description="Intermediate class building strength and skill."
                />
                <ProductItem
                  title="Champions"
                  href="#services"
                  src="/gymbag.svg"
                  description="Advanced training for competitive gymnasts."
                />
                <ProductItem
                  title="Summer Camp"
                  href="#services"
                  src="/waterbottle.svg"
                  description="Week-long camps packed with fun and fitness."
                />
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Pricing">
              <div className="flex flex-col space-y-2 text-sm">
                <HoveredLink href="#class-cards">Class Cards</HoveredLink>
                <HoveredLink href="#trials">Free Trial</HoveredLink>
                <HoveredLink href="#services">Enrollments</HoveredLink>
                <HoveredLink href="#services">Party Packages</HoveredLink>
              </div>
            </MenuItem>

            <a href="/calendar" className="text-foreground hover:opacity-80 cursor-pointer">
              Calendar
            </a>
          </Menu>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/sign-in"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-[13px] font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <span aria-hidden>⇥</span>
            Sign In
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border lg:hidden"
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-4 bg-foreground" />
              <span className="block h-0.5 w-4 bg-foreground" />
              <span className="block h-0.5 w-4 bg-foreground" />
            </div>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="flex flex-col gap-0.5 border-t border-border px-6 py-3 lg:hidden">
          <a href="/" className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface-alt hover:text-primary">Home</a>
          <a href="#services" className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface-alt hover:text-primary">All services</a>
          <a href="#services" className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface-alt hover:text-primary">Enrollments</a>
          <a href="#class-cards" className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface-alt hover:text-primary">Class Cards</a>
          <a href="#services" className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface-alt hover:text-primary">Camps</a>
          <a href="#services" className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface-alt hover:text-primary">Parties</a>
          <a href="#trials" className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface-alt hover:text-primary">Trials</a>
          <a href="/calendar" className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface-alt hover:text-primary">Calendar</a>
        </nav>
      )}
    </header>
  );
}
