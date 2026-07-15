import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const CONTENT = [
  {
    title: "Enrollments",
    description:
      "Sign up your kids for our ongoing gymnastics, tumbling, and movement classes. Small groups, expert coaches, and flexible schedules that fit your week.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-white">
        🎓 Enroll
      </div>
    ),
  },
  {
    title: "Camps & Events",
    description:
      "Summer, winter, and spring-break camps packed with games, obstacle courses, and challenges. Book a single session or the whole week.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-white">
        ⛺ Camps
      </div>
    ),
  },
  {
    title: "Birthday Parties",
    description:
      "Let us throw the party. Themed setups, private gym time, and party hosts so parents can relax while the kids burn off energy.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-white">
        🎉 Parties
      </div>
    ),
  },
  {
    title: "Gear & Merch",
    description:
      "T-shirts, water bottles, resistance bands, mats and more — everything you need for practice at home or repping the gym on the go.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-white">
        🛍️ Shop
      </div>
    ),
  },
];

export function Overview() {
  return (
    <section id="overview" className="py-16">
      <h2 className="text-center text-2xl font-bold tracking-tight">
        What we offer
      </h2>
      <div className="mt-10">
        <StickyScroll content={CONTENT} className="rounded-none" />
      </div>
    </section>
  );
}
