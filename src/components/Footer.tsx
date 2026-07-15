import { FOOTER_LINKS, SITE } from "@/data/nav";

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="border-t border-border bg-surface-alt">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start gap-3">
            <span aria-hidden className="text-lg">📍</span>
            <div>
              <p className="text-sm font-semibold">Location</p>
              <p className="text-sm text-muted">{SITE.fullAddress}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span aria-hidden className="text-lg">🕐</span>
            <div>
              <p className="text-sm font-semibold">Timezone</p>
              <p className="text-sm text-muted">{SITE.timezone}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span aria-hidden className="text-lg">✉️</span>
            <div>
              <p className="text-sm font-semibold">Email</p>
              <a
                href={`mailto:${SITE.email}`}
                className="text-sm text-primary hover:underline"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2">
          <div>
            <a href="/" className="flex items-center gap-2.5 font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
                {SITE.initials}
              </span>
              <span className="text-[15px]">{SITE.name}</span>
            </a>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted">
              <span aria-hidden>📍</span>
              {SITE.address}
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-1 flex items-center gap-2 text-sm text-muted hover:text-primary"
            >
              <span aria-hidden>✉️</span>
              {SITE.email}
            </a>
          </div>

          <div className="sm:justify-self-end">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-muted sm:flex-row">
            <span>
              &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
            </span>
            <span>Powered by Omnify</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
