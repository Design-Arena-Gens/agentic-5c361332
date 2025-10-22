const tracks = [
  {
    title: "AI Commons Labs",
    tagline: "District innovation for Bharat",
    description:
      "Satellite labs across 72 smart cities foster grassroots innovation. Learners prototype solutions for agriculture, climate resilience, and healthcare using open datasets.",
    highlights: [
      "Edge AI kits in 9 regional languages",
      "Mentorship from 200+ research partners",
      "Rapid prototyping micro-grants"
    ]
  },
  {
    title: "Metaverse Learning Pods",
    tagline: "Immersive classrooms without borders",
    description:
      "Mixed-reality classrooms link CBSE, State Board, and higher-ed institutions into collaborative studios with shared digital twins and AI-driven assessment.",
    highlights: [
      "Spatial computing curriculum",
      "XR device lending libraries",
      "Inclusive, low-bandwidth modes"
    ]
  },
  {
    title: "National Challenge League",
    tagline: "Problem statements from India@2047",
    description:
      "Annual challenge cycles crowdsource solutions to national missions across energy, healthcare, mobility, and defense with international juries and venture studios.",
    highlights: [
      "Govt policy sandboxes",
      "Global mentorship residencies",
      "Impact investment matchmaking"
    ]
  }
];

export default function InnovationTracks() {
  return (
    <section id="labs" className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="absolute inset-0 -z-10 rounded-[40px] border border-white/10 bg-white/[0.02] blur-3xl" aria-hidden="true" />
      <div className="relative dot-grid overflow-hidden rounded-[40px] border border-white/5 bg-white/[0.03] p-12">
        <div className="relative z-10 flex flex-col gap-12 lg:flex-row">
          <div className="max-w-md">
            <span className="eyebrow">Innovation tracks</span>
            <h2 className="section-heading text-left text-white">
              Launch pads for India&apos;s next generation of ethical AI innovators.
            </h2>
            <p className="mt-6 text-base text-slate-300">
              Labs are co-governed with state governments and industry alliances, ensuring equitable access and responsible deployment across sectors critical to India&apos;s future competitiveness.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-8">
            {tracks.map((track) => (
              <div key={track.title} className="glass-panel rounded-3xl border border-white/10 p-8 lg:p-10">
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-sm uppercase tracking-[0.3em] text-accent-teal/80">
                      {track.tagline}
                    </h3>
                    <p className="mt-2 text-2xl font-display text-white">{track.title}</p>
                  </div>
                  <p className="text-sm text-slate-300">{track.description}</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                    {track.highlights.map((item) => (
                      <li key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs font-medium tracking-wide text-slate-200">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
