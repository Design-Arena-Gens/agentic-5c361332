import Link from "next/link";

export default function CtaBanner() {
  return (
    <section id="enroll" className="relative mx-auto max-w-5xl px-6 pb-32 lg:px-8">
      <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-brand-dark via-brand to-accent-purple/70 p-12 text-center shadow-[0_40px_120px_-50px_rgba(99,102,241,0.6)]">
        <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-24 top-10 h-56 w-56 rounded-full bg-accent-teal/40 blur-3xl opacity-50" />
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
            Admissions 2025
          </span>
          <h2 className="mt-6 text-4xl font-display tracking-tight text-white sm:text-5xl">
            Join India&apos;s most ambitious AI learning coalition.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/80">
            Partner with IIFS to launch AI labs in your institution, co-create programs with industry experts, and unlock scholarships for learners across India.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="https://iifs.future.skills/enrol"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-brand-dark transition hover:bg-slate-100"
            >
              Become a Partner Institute
            </Link>
            <Link
              href="mailto:partnerships@iifs.org.in"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-base font-semibold text-white transition hover:border-white"
            >
              Speak to an Advisor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
