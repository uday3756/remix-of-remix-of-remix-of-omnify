import { useState } from "react";
import { CategoryBrowse } from "./CategoryBrowse";
import { ServicesFilterGrid } from "./ServicesFilterGrid";

export function ServicesExplorer() {
  const [filter, setFilter] = useState("all");

  const handleCategorySelect = (id: string) => {
    setFilter(id);
    document
      .getElementById("services")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <CategoryBrowse activeCategory={filter} onSelect={handleCategorySelect} />

      <section id="services" className="scroll-mt-20 bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-16">
          <h2 className="text-center text-2xl font-bold tracking-tight text-white">
            Our Services
          </h2>

          <div className="mt-10">
            <ServicesFilterGrid filter={filter} onFilterChange={setFilter} />
          </div>
        </div>
      </section>
    </>
  );
}
