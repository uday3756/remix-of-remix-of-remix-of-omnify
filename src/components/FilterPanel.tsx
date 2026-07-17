import { useMemo, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { FILTER_GROUPS, type FilterSelection } from "@/data/filters";
import { cn } from "@/lib/utils";

interface FilterPanelProps {
  /** Fires when the user commits their selection with Apply. */
  onApply?: (selection: FilterSelection) => void;
  className?: string;
}

/**
 * Faceted filter sidebar: grouped checkbox lists (Services, Trainer, Age Group,
 * Skills, Gender, Venue) with Clear Filters and a sticky Apply button. Holds a
 * draft selection internally so nothing filters until the user hits Apply; long
 * groups (Trainer) collapse to a few rows with a show-all toggle.
 *
 * Fully theme-aware — every colour comes from the shared CSS variables so it
 * reads correctly on all themes.
 */
export function FilterPanel({ onApply, className }: FilterPanelProps) {
  const [draft, setDraft] = useState<FilterSelection>({});
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const totalSelected = useMemo(
    () => Object.values(draft).reduce((sum, ids) => sum + ids.length, 0),
    [draft],
  );

  const toggle = (groupId: string, optionId: string) => {
    setDraft((prev) => {
      const current = prev[groupId] ?? [];
      const next = current.includes(optionId)
        ? current.filter((id) => id !== optionId)
        : [...current, optionId];
      const copy = { ...prev };
      if (next.length) copy[groupId] = next;
      else delete copy[groupId];
      return copy;
    });
  };

  const clearAll = () => setDraft({});

  return (
    <aside
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-surface text-foreground shadow-sm",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-4">
        <h3 className="text-lg font-bold tracking-tight">Filters</h3>
        <button
          type="button"
          onClick={clearAll}
          disabled={totalSelected === 0}
          className="rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-foreground/5 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Clear Filters
        </button>
      </div>

      {/* Groups */}
      <div className="flex-1 divide-y divide-border overflow-y-auto">
        {FILTER_GROUPS.map((group) => {
          const selected = draft[group.id] ?? [];
          const isExpanded = expanded[group.id];
          const limit = group.collapseAfter;
          const visibleOptions =
            limit && !isExpanded ? group.options.slice(0, limit) : group.options;
          const hiddenCount = limit ? group.options.length - limit : 0;

          return (
            <div key={group.id} className="px-5 py-4">
              <div className="mb-3 flex items-center gap-2">
                <h4 className="text-sm font-bold uppercase tracking-wide text-accent">
                  {group.label}
                </h4>
                {selected.length > 0 && (
                  <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[11px] font-semibold text-primary">
                    {selected.length}
                  </span>
                )}
              </div>

              <ul className="space-y-2.5">
                {visibleOptions.map((option) => {
                  const checked = selected.includes(option.id);
                  return (
                    <li key={option.id}>
                      <label className="flex cursor-pointer items-center gap-2.5 text-sm text-foreground">
                        <Checkbox
                          checked={checked}
                          onCheckedChange={() => toggle(group.id, option.id)}
                          aria-label={option.label}
                        />
                        <span className={cn(checked && "font-medium")}>{option.label}</span>
                      </label>
                    </li>
                  );
                })}
              </ul>

              {limit && hiddenCount > 0 && (
                <button
                  type="button"
                  onClick={() =>
                    setExpanded((prev) => ({ ...prev, [group.id]: !prev[group.id] }))
                  }
                  className="mt-3 text-xs font-semibold text-primary hover:underline"
                >
                  {isExpanded ? "Show less" : `Show all ${group.options.length}`}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Apply */}
      <div className="border-t border-border bg-surface p-4">
        <button
          type="button"
          onClick={() => onApply?.(draft)}
          className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-sm transition-transform duration-150 hover:brightness-110 active:scale-[0.98]"
        >
          Apply{totalSelected > 0 ? ` (${totalSelected})` : ""}
        </button>
      </div>
    </aside>
  );
}
