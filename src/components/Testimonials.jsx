import { Star } from "lucide-react";
import { testimonials } from "../data/content";
import Media from "./Media";
import Reveal from "./Reveal";

function Card({ item }) {
  return (
    <div className="mx-3 flex w-[340px] shrink-0 flex-col justify-between rounded-2xl border border-ink/[0.06] bg-white p-7 shadow-card sm:w-[380px]">
      <div>
        <div className="flex gap-0.5 text-gold">
          {Array.from({ length: item.rating }).map((_, i) => (
            <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
        <p className="mt-4 text-[14.5px] leading-relaxed text-ink">
          “{item.quote}”
        </p>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <Media
          src={item.avatar}
          alt={item.name}
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-ink">{item.name}</p>
          <p className="chip mt-0.5">{item.treatment}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="eyebrow justify-center">Patient Notes</p>
          <h2 className="section-heading text-balance mt-4">
            Charted by us. Told by them.
          </h2>
        </Reveal>
      </div>

      <div className="mask-fade-r mt-16">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {loop.map((item, i) => (
            <Card item={item} key={`${item.name}-${i}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
