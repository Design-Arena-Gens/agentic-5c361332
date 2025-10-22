const pillars = [
  {
    title: "Adaptive AI Mentorship",
    description:
      "Personalised mentor intelligence pairs every learner with adaptive AI mentors trained on national curricula, local languages, and industry competencies.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 text-accent-teal">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.75a4.5 4.5 0 014.5 4.5v1.5a4.5 4.5 0 11-9 0v-1.5a4.5 4.5 0 014.5-4.5z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 9.75H5.25v2.25m0 0h1.5m-1.5 0V18m12-8.25h1.5v2.25m0 0h-1.5m1.5 0V18" />
      </svg>
    )
  },
  {
    title: "Future Skills Labs",
    description:
      "Immersive labs bring robotics, synthetic biology, climate tech, and quantum computing to campuses with project-based challenges sourced from industry.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 text-accent-purple">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v6m0 6v6M9 6h6m-6 12h6M4.5 9h3m9 0h3M4.5 15h3m9 0h3" />
      </svg>
    )
  },
  {
    title: "National Impact Engine",
    description:
      "Data-driven governance dashboards align school districts, skilling centers, and enterprises to track equitable access and skill mastery in real time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 text-brand-light">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 9l9-6 9 6-9 6-9-6zm0 6l9 6 9-6"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9 6 9-6" />
      </svg>
    )
  }
];

export default function Pillars() {
  return (
    <section className="relative isolate mx-auto mt-0 max-w-6xl px-6 py-24 lg:px-8">
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-[40px] bg-white/[0.02] shadow-[0_120px_120px_-90px_rgba(59,130,246,0.45)]" />
      <div className="relative grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <span className="eyebrow">Three pillars</span>
          <h2 className="section-heading text-left">
            A unified ecosystem to elevate India&apos;s learners into future-ready creators.
          </h2>
          <p className="mt-6 text-base text-slate-300">
            Nationwide partnerships connect schools, universities, and industry with a shared AI infrastructure. Each pillar blends human expertise, indigenous knowledge systems, and global innovations.
          </p>
        </div>
        <div className="lg:col-span-2 grid gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="glass-panel relative overflow-hidden rounded-3xl p-8">
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-accent-purple/10 blur-3xl" />
              <div className="relative flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-display text-white">{pillar.title}</h3>
                <p className="text-base text-slate-300">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
