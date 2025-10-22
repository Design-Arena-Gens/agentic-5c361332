const programs = [
  {
    name: "National AI Foundation",
    duration: "Classes VI-XII",
    summary:
      "Adaptive core curriculum blending computational thinking, ethics, and interdisciplinary design challenges for school learners.",
    modules: ["AI Literacy", "Responsible Tech", "Maker Labs"]
  },
  {
    name: "Future Skills Diplomas",
    duration: "18 Month Hybrid",
    summary:
      "University-accredited diploma tracks co-created with industry councils spanning climate-tech, deep tech, and creative computing.",
    modules: ["Industry Studios", "Startup Clinics", "Global Fellowships"]
  },
  {
    name: "AI Workforce Guilds",
    duration: "12 Week Sprints",
    summary:
      "Upskilling cohorts for government, MSMEs, and social enterprises with stackable digital credentials and job matching.",
    modules: ["Micro Credentials", "Policy Labs", "Talent Exchange"]
  }
];

export default function ProgramGrid() {
  return (
    <section id="programs" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <span className="eyebrow">Future-ready pathways</span>
          <h2 className="section-heading text-left">
            Modular programs for every learner journey—from school classrooms to national workforce skilling.
          </h2>
          <p className="mt-6 text-base text-slate-300">
            Every pathway is mapped to NEP 2020 outcomes, industry frameworks, and global credentials. Learners access AI copilots, multilingual content, and project-based portfolios tracked in real time.
          </p>
        </div>
        <div className="grid flex-1 gap-6 sm:grid-cols-2">
          {programs.map((program) => (
            <div key={program.name} className="glass-panel glow-ring relative rounded-3xl p-8">
              <div className="absolute -top-6 right-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-200/80">
                {program.duration}
              </div>
              <h3 className="text-2xl font-display text-white">{program.name}</h3>
              <p className="mt-4 text-sm text-slate-300">{program.summary}</p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {program.modules.map((module) => (
                  <li
                    key={module}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-slate-200"
                  >
                    {module}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
