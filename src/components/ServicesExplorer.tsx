import { useState } from "react";
import { CategoryBrowse } from "./CategoryBrowse";
import { ServicesFilterGrid } from "./ServicesFilterGrid";
import { FilterPanel } from "./FilterPanel";
import type { FilterSelection } from "@/data/filters";

/** Services facet options that map onto an existing service category. */
const SERVICE_FACET_TO_CATEGORY: Record<string, string> = {
  parties: "parties",
  camps: "camps",
};

export function ServicesExplorer() {
  const [filter, setFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const handleCategorySelect = (id: string) => {
    setFilter(id);
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleApplyFilters = (selection: FilterSelection) => {
    // Map any selected "Services" facet onto the existing category filter where
    // the names overlap; otherwise show everything.
    const services = selection.services ?? [];
    const matched = services.map((id) => SERVICE_FACET_TO_CATEGORY[id]).filter(Boolean);
    setFilter(matched[0] ?? "all");
    setShowFilters(false);
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <CategoryBrowse activeCategory={filter} onSelect={handleCategorySelect} />

      <section id="services" className="page-surface scroll-mt-20 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16">
          <h2 className="text-center text-2xl font-bold tracking-tight text-background">
            Our Services
          </h2>

          {/* Mobile: a button that reveals the filter panel. */}
          <div className="mt-8 lg:hidden">
            <button
              type="button"
              onClick={() => setShowFilters((v) => !v)}
              aria-expanded={showFilters}
              className="inline-flex items-center gap-2 rounded-lg border border-background/25 bg-background/5 px-4 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-background/10"
            >
              <span aria-hidden>⚙️</span>
              {showFilters ? "Hide filters" : "Filters"}
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-8 lg:mt-10 lg:grid-cols-[280px_1fr]">
            {/* Sidebar filter — sticky on desktop, collapsible on mobile. */}
            <div className={showFilters ? "block" : "hidden lg:block"}>
              <div className="lg:sticky lg:top-24">
                <FilterPanel onApply={handleApplyFilters} className="lg:max-h-[calc(100vh-8rem)]" />
              </div>
            </div>

            <div>
              <ServicesFilterGrid filter={filter} onFilterChange={setFilter} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
