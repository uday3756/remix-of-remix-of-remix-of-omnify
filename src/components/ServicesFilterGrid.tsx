import { SERVICE_SECTIONS } from "@/data/services";
import { FlipReveal, FlipRevealItem } from "@/components/ui/flip-reveal";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ServiceCard } from "./ServiceCard";

const FILTERS = [
  { value: "all", label: "All" },
  ...SERVICE_SECTIONS.map((section) => ({
    value: section.id,
    label: section.heading.replace(" & Events", ""),
  })),
];

const ITEMS = SERVICE_SECTIONS.flatMap((section) =>
  section.services.map((service) => ({ service, sectionId: section.id })),
);

interface ServicesFilterGridProps {
  filter: string;
  onFilterChange: (value: string) => void;
}

export function ServicesFilterGrid({
  filter,
  onFilterChange,
}: ServicesFilterGridProps) {
  return (
    <div>
      <div className="flex justify-center">
        <ToggleGroup
          type="single"
          value={filter}
          onValueChange={(value) => value && onFilterChange(value)}
          className="flex-wrap rounded-lg border border-border bg-surface p-1"
        >
          {FILTERS.map((option) => (
            <ToggleGroupItem
              key={option.value}
              value={option.value}
              className="px-4 text-background data-[state=on]:bg-background data-[state=on]:text-foreground hover:bg-background/10 hover:text-background"
            >
              {option.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <FlipReveal
        keys={[filter]}
        showClass="flex"
        hideClass="hidden"
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {ITEMS.map(({ service, sectionId }) => (
          <FlipRevealItem key={service.id} flipKey={sectionId} className="w-full">
            <ServiceCard service={service} />
          </FlipRevealItem>
        ))}
      </FlipReveal>
    </div>
  );
}
