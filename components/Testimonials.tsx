const testimonials = [
  {
    quote:
      "IIFS gave our district access to AI-powered labs that are culturally relevant and multilingual. Our students now publish research with global mentors while staying rooted in their communities.",
    name: "Anita Narayan",
    role: "Principal, Government High School, Mysuru",
    avatarColor: "bg-accent-teal/50"
  },
  {
    quote:
      "Through the Future Skills Diploma, we built India&apos;s first drone-based climate monitoring startup. The mentorship network connected us to investors and policy makers in record time.",
    name: "Ishan & Meera",
    role: "Co-founders, VayuSutra Labs",
    avatarColor: "bg-accent-purple/50"
  },
  {
    quote:
      "IIFS&apos; AI Workforce Guild helped our women-led MSME integrate automation responsibly, resulting in 30% higher productivity while reskilling every worker for new digital roles.",
    name: "Farida Khan",
    role: "Director, Harmony Textiles Cooperative",
    avatarColor: "bg-brand-light/50"
  }
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
      <span className="eyebrow">Voices from the network</span>
      <h2 className="section-heading">
        Trusted by educators, founders, and policymakers championing India&apos;s future skills.
      </h2>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="glass-panel flex h-full flex-col justify-between rounded-3xl p-8 text-left">
            <p className="text-lg text-slate-200">“{testimonial.quote}”</p>
            <div className="mt-6 flex items-center gap-4">
              <span className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold text-white ${testimonial.avatarColor}`}>
                {testimonial.name
                  .split(" ")
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join("")}
              </span>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
