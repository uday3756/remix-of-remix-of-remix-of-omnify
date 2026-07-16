import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import img1 from "@/assets/intro/1.jpg.asset.json";
import img2 from "@/assets/intro/2.jpg.asset.json";
import img3 from "@/assets/intro/3.jpg.asset.json";
import img4 from "@/assets/intro/4.jpg.asset.json";

/** A gym photo behind a brand-colored tint, with an emoji + label on top. */
function OfferCard({ image, tint, label }: { image: string; tint: string; label: string }) {
  return (
    <div className="relative h-full w-full">
      <img src={image} alt={label} className="h-full w-full object-cover" />
      <div className={`absolute inset-0 bg-gradient-to-br ${tint}`} />
      <div className="absolute inset-0 flex items-center justify-center gap-2 text-3xl font-bold text-white drop-shadow-md sm:text-4xl">
        {label}
      </div>
    </div>
  );
}

const CONTENT = [
  {
    title: "Enrollments",
    description:
      "Sign up your kids for our ongoing gymnastics, tumbling, and movement classes. Small groups, expert coaches, and flexible schedules that fit your week.",
    content: <OfferCard image={img1.url} tint="from-cyan-500/70 to-emerald-500/70" label="🎓 Enroll" />,
  },
  {
    title: "Camps & Events",
    description:
      "Summer, winter, and spring-break camps packed with games, obstacle courses, and challenges. Book a single session or the whole week.",
    content: <OfferCard image={img2.url} tint="from-pink-500/70 to-indigo-500/70" label="⛺ Camps" />,
  },
  {
    title: "Birthday Parties",
    description:
      "Let us throw the party. Themed setups, private gym time, and party hosts so parents can relax while the kids burn off energy.",
    content: <OfferCard image={img3.url} tint="from-orange-500/70 to-yellow-500/70" label="🎉 Parties" />,
  },
  {
    title: "Gear & Merch",
    description:
      "T-shirts, water bottles, resistance bands, mats and more — everything you need for practice at home or repping the gym on the go.",
    content: <OfferCard image={img4.url} tint="from-violet-500/70 to-cyan-400/70" label="🛍️ Shop" />,
  },
];

export function Overview() {
  return (
    <section id="overview" className="page-surface-light py-16">
      <h2 className="text-center text-2xl font-bold tracking-tight">What we offer</h2>
      <div className="mt-10">
        <StickyScroll content={CONTENT} className="page-surface rounded-none" />
      </div>
    </section>
  );
}
