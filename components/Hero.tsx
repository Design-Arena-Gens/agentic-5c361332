import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 sm:pb-32">
      <div className="absolute inset-0 -z-10 mesh-gradient opacity-70" aria-hidden="true" />
      <div className="absolute inset-x-0 top-40 -z-10 h-[30rem] bg-gradient-to-t from-slate-950 via-transparent to-transparent blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center lg:px-8">
        <span className="eyebrow">Indian Institute of Future Skills</span>
        <h1 className="section-heading max-w-4xl">
          Reimagining India&apos;s learning future with an AI-first curriculum
        </h1>
        <p className="mt-8 max-w-3xl text-lg text-slate-300 sm:text-xl">
          IIFS (Indian Institute of Future Skills) is a national platform aligning industry, academia, and government to deliver adaptive learning journeys, immersive labs, and real-world problem statements powered by responsible AI.
        </p>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="#programs"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent-purple via-brand to-accent-teal px-8 py-3 text-base font-semibold text-white shadow-[0_20px_45px_rgba(76,29,149,0.25)] transition hover:opacity-95"
          >
            Explore Future-Ready Programs
          </Link>
          <Link
            href="#impact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-slate-200 transition hover:border-accent-teal/60 hover:text-accent-teal"
          >
            View National Impact Report
          </Link>
        </div>
        <dl className="mt-16 grid w-full gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-left backdrop-blur-xl sm:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-[0.3em] text-slate-400">Learners onboard</dt>
            <dd className="mt-3 text-3xl font-semibold text-white">1.2M+</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.3em] text-slate-400">AI Innovation Hubs</dt>
            <dd className="mt-3 text-3xl font-semibold text-white">72 Cities</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.3em] text-slate-400">Industry Partners</dt>
            <dd className="mt-3 text-3xl font-semibold text-white">280+</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
