export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="font-display text-lg text-white">IIFS · Indian Institute of Future Skills</p>
          <p className="mt-1 max-w-xl text-xs text-slate-500">
            A not-for-profit coalition accelerating India&apos;s transition into an AI-empowered knowledge economy.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-right text-xs sm:text-left">
          <a href="mailto:hello@iifs.org.in" className="transition hover:text-accent-teal">
            hello@iifs.org.in
          </a>
          <p className="text-slate-600">© {new Date().getFullYear()} IIFS Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
