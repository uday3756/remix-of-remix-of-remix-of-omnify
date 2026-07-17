/**
 * Filter groups for the services sidebar. Each group renders a heading + a list
 * of toggleable checkbox options. Kept as plain data so the FilterPanel stays
 * presentational and new facets can be added without touching the component.
 */
export interface FilterOption {
  id: string;
  label: string;
}

export interface FilterGroup {
  id: string;
  label: string;
  /** Long lists (e.g. Trainer) collapse to `collapseAfter` rows with a toggle. */
  collapseAfter?: number;
  options: FilterOption[];
}

const opt = (label: string): FilterOption => ({
  id: label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  label,
});

export const FILTER_GROUPS: FilterGroup[] = [
  {
    id: "services",
    label: "Services",
    options: [
      "Classes",
      "Programs & Classpacks",
      "Memberships",
      "Appointments",
      "Facilities",
      "Parties",
      "Camps",
    ].map(opt),
  },
  {
    id: "trainer",
    label: "Trainer",
    collapseAfter: 5,
    options: [
      "Admin nn general",
      "Amy Meyer",
      "Zack Fischer",
      "Ash",
      "Moinak Mukherjee",
      "Matt Thompson",
      "Test Trainer",
      "test",
      "Neeraj Chopra",
      "jack",
      "Arjit S",
      "Mason Joseph",
      "Prasad",
      "prasad all",
      "mufour",
    ].map(opt),
  },
  {
    id: "age-group",
    label: "Age Group",
    options: ["7-10", "12-18", "26-40"].map(opt),
  },
  {
    id: "skills",
    label: "Skills",
    options: ["Beginnier", "Advance", "Intermediate"].map(opt),
  },
  {
    id: "gender",
    label: "Gender",
    options: ["Male", "Female"].map(opt),
  },
  {
    id: "venue",
    label: "Venue",
    options: ["US"].map(opt),
  },
];

/** Shape of the applied selection: { groupId: Set<optionId> }. */
export type FilterSelection = Record<string, string[]>;
