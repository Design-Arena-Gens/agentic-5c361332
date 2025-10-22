const impactStats = [
  {
    metric: "82%",
    label: "Graduates employed within 90 days",
    detail: "Powered by the IIFS Talent Exchange platform spanning 320 enterprise partners."
  },
  {
    metric: "47%",
    label: "Learners from tier-2 & tier-3 cities",
    detail: "Ensuring equitable access with multilingual AI mentoring and low-bandwidth learning pods."
  },
  {
    metric: "1.8x",
    label: "Increase in STEM participation by girls",
    detail: "National fellowships and community labs prioritise inclusive access and mentorship."
  }
];

const caseStudies = [
  {
    title: "AI for Climate Resilience",
    partner: "Government of Maharashtra",
    summary:
      "IIFS fellows developed AI models forecasting crop stress for 1.2M farmers, leading to a 23% increase in crop protection efficiency.",
    tags: ["Remote sensing", "AgriTech", "Responsible AI"]
  },
  {
    title: "Precision Healthcare Navigator",
    partner: "NITI Aayog x Apollo Hospitals",
    summary:
      "A triaging assistant deployed across 150 primary health centres reduced diagnosis time by 34% while meeting privacy and ethics benchmarks.",
    tags: ["Digital Public Good", "Health AI", "Clinical Safety"]
  }
];

export default function ImpactShowcase() {
  return (
    <section id="impact" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <span className="eyebrow">National impact</span>
          <h2 className="section-heading text-left">
            measurable transformation aligned with India&apos;s national missions.
          </h2>
          <p className="mt-6 text-base text-slate-300">
            IIFS operates as a public-private coalition. Dynamic dashboards share live progress with policymakers, industry, and communities to ensure that every learner benefits from AI advancements.
          </p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            {impactStats.map((item) => (
              <div key={item.metric} className="glass-panel rounded-3xl p-6">
                <dt className="text-3xl font-semibold text-white">{item.metric}</dt>
                <dd className="mt-3 text-sm font-medium text-slate-300">{item.label}</dd>
                <p className="mt-4 text-xs text-slate-400">{item.detail}</p>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex flex-col gap-6">
          {caseStudies.map((study) => (
            <article key={study.title} className="glass-panel glow-ring rounded-3xl p-8">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-sm uppercase tracking-[0.3em] text-accent-purple/80">
                    {study.partner}
                  </h3>
                  <p className="mt-2 text-2xl font-display text-white">{study.title}</p>
                </div>
                <p className="text-sm text-slate-300">{study.summary}</p>
                <div className="flex flex-wrap gap-3">
                  {study.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
