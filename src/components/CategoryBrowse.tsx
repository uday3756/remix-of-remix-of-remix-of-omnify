import { CATEGORIES } from "@/data/services";

interface CategoryBrowseProps {
  activeCategory: string;
  onSelect: (id: string) => void;
}

export function CategoryBrowse({ activeCategory, onSelect }: CategoryBrowseProps) {
  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-background">
          Browse by Category
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onSelect(isActive ? "all" : category.id)}
                aria-pressed={isActive}
                className={`flex w-32 flex-col items-center gap-2 rounded-xl border bg-surface p-5 text-center text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${
                  isActive
                    ? "border-primary ring-1 ring-primary"
                    : "border-border hover:border-primary/40"
                }`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-soft text-xl">
                  {category.icon}
                </span>
                <span className="text-sm font-semibold">{category.label}</span>
                <span className="text-xs text-muted">
                  {category.count} service{category.count === 1 ? "" : "s"}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
