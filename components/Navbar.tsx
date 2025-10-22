"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Programs", href: "#programs" },
  { name: "AI Labs", href: "#labs" },
  { name: "Impact", href: "#impact" },
  { name: "Enroll", href: "#enroll" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm lg:px-8">
        <Link href="#top" className="group flex items-center gap-3">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-accent-purple/30 via-brand/40 to-accent-teal/40 text-lg font-semibold text-white shadow-lg shadow-brand/20 transition group-hover:shadow-brand/40">
            AI
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-white transition group-hover:text-accent-teal">
            IIFS
          </span>
        </Link>
        <div className="hidden items-center gap-12 md:flex">
          <div className="flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-200 transition hover:text-accent-teal"
              >
                {link.name}
              </a>
            ))}
          </div>
          <Link
            href="#enroll"
            className="rounded-full bg-gradient-to-r from-accent-purple via-brand to-accent-teal px-5 py-2 font-semibold text-white shadow-lg shadow-accent-purple/30 transition hover:shadow-accent-teal/40"
          >
            Join the Network
          </Link>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-slate-200 transition hover:border-accent-teal/60 hover:text-accent-teal md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            className="h-6 w-6"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/80 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-slate-100 transition hover:text-accent-teal"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Link
              href="#enroll"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent-purple via-brand to-accent-teal px-5 py-2 text-base font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              Join the Network
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
