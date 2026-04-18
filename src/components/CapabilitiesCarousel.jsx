'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

const spotlightCards = [
  {
    title: 'Ecommerce & platforms',
    body: 'End-to-end flows: catalog, cart, auth, and resilient checkout patterns.',
    tag: 'Case study',
    gradient: 'from-sky-500/20 to-blue-600/10',
  },
  {
    title: 'Dashboards & admin',
    body: 'Data-heavy UIs with tables, filters, and role-aware experiences.',
    tag: 'Product',
    gradient: 'from-violet-500/20 to-purple-600/10',
  },
  {
    title: 'Marketing sites',
    body: 'Landing pages with scroll storytelling and brand-forward motion.',
    tag: 'Web',
    gradient: 'from-indigo-500/20 to-sky-600/10',
  },
  {
    title: 'APIs & integrations',
    body: 'Connecting services, webhooks, and third-party tools safely.',
    tag: 'Backend',
    gradient: 'from-emerald-500/20 to-teal-600/10',
  },
];

export default function CapabilitiesCarousel() {
  const carouselRef = useRef(null);

  const scrollCarousel = (dir) => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(420, el.clientWidth * 0.85), behavior: 'smooth' });
  };

  return (
    <section className="relative border-t border-white/[0.06] bg-[#050508] px-5 py-20 md:px-10 md:py-28">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[1px] w-[60%] bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-300/80">
              Capabilities
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Momentum across the stack
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollCarousel(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all hover:border-white/20 hover:bg-white/[0.05] hover:scale-105 active:scale-95"
              aria-label="Previous"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all hover:border-white/20 hover:bg-white/[0.05] hover:scale-105 active:scale-95"
              aria-label="Next"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </motion.div>

        <div
          ref={carouselRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
        >
          {spotlightCards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group w-[min(100%,380px)] shrink-0 snap-start rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-8 transition-all duration-300 hover:border-sky-500/25 hover:shadow-lg hover:shadow-sky-500/5"
            >
              {/* Hover glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative">
                <span className="text-xs font-medium uppercase tracking-wider text-sky-300/70">
                  {card.tag}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/45">{card.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
