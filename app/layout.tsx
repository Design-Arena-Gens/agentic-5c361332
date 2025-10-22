import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "IIFS | Indian Institute of Future Skills",
  description:
    "IIFS is an AI-first education initiative reshaping India's learning landscape with adaptive pathways, future-ready skills, and immersive digital experiences.",
  openGraph: {
    title: "IIFS | Indian Institute of Future Skills",
    description:
      "Discover India's most progressive AI-powered learning ecosystem bringing future skills to every learner.",
    url: "https://agentic-5c361332.vercel.app",
    siteName: "IIFS",
    images: [
      {
        url: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Learners collaborating in a futuristic AI lab"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "IIFS | Indian Institute of Future Skills",
    description:
      "Join India's AI-first learning network with future skills labs, adaptive mentoring, and national-scale innovation challenges.",
    creator: "@iifs_future"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <body className="font-sans bg-slate-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
