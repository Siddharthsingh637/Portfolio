'use client';

import { useRef, useState, useEffect, useMemo } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from 'framer-motion';

const pillars = [
  {
    title: 'Product-grade interfaces',
    subtitle: 'From design systems to motion — interfaces that feel intentional.',
    icon: 'layout',
  },
  {
    title: 'Full-stack delivery',
    subtitle: 'Next.js, APIs, databases, and deployment with clarity and care.',
    icon: 'stack',
  },
  {
    title: 'Performance & polish',
    subtitle: 'Fast loads, accessible markup, and details that compound over time.',
    icon: 'bolt',
  },
  {
    title: 'Collaboration-first',
    subtitle: 'Clear communication, pragmatic tradeoffs, and shipping in iterations.',
    icon: 'users',
  },
];

const spotlightCards = [
  {
    title: 'Ecommerce & platforms',
    body: 'End-to-end flows: catalog, cart, auth, and resilient checkout patterns.',
    tag: 'Case study',
  },
  {
    title: 'Dashboards & admin',
    body: 'Data-heavy UIs with tables, filters, and role-aware experiences.',
    tag: 'Product',
  },
  {
    title: 'Marketing sites',
    body: 'Landing pages with scroll storytelling and brand-forward motion.',
    tag: 'Web',
  },
  {
    title: 'APIs & integrations',
    body: 'Connecting services, webhooks, and third-party tools safely.',
    tag: 'Backend',
  },
];

const ctas = [
  { label: 'Open to opportunities', detail: 'Full-time & contract', tone: 'primary' },
  { label: 'Selected work', detail: 'Scroll below', tone: 'ghost' },
  { label: 'Let’s talk', detail: 'siddharthsingh.6217@gmail.com', tone: 'ghost' },
];

function Icon({ name, className = 'h-6 w-6' }) {
  const common = { className, fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, viewBox: '0 0 24 24' };
  switch (name) {
    case 'layout':
      return (
        <svg {...common}>
          <path strokeLinecap="round" d="M4 5h16M4 12h10M4 19h16" />
        </svg>
      );
    case 'stack':
      return (
        <svg {...common}>
          <path strokeLinecap="round" d="M12 4L4 8l8 4 8-4-8-4zM4 12l8 4 8-4M4 16l8 4 8-4" />
        </svg>
      );
    case 'bolt':
      return (
        <svg {...common}>
          <path strokeLinecap="round" d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
        </svg>
      );
    case 'users':
      return (
        <svg {...common}>
          <path strokeLinecap="round" d="M17 20v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1M9 10a4 4 0 100-8 4 4 0 000 8zm8 1a3 3 0 10-6 0 3 3 0 006 0z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function AntigravityLanding() {
  const storyRef = useRef(null);
  const carouselRef = useRef(null);
  const [pillarIndex, setPillarIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 35, mass: 0.8 });

  const bgY = useTransform(smoothProgress, [0, 1], ['0%', '18%']);
  const meshScale = useTransform(smoothProgress, [0, 1], [1, 1.12]);

  const heroOpacity = useTransform(scrollYProgress, [0, 0.14], [1, 0]);
  const heroBlur = useTransform(scrollYProgress, [0, 0.12], [0, 14]);
  const heroFilter = useTransform(heroBlur, (b) => `blur(${b}px)`);
  const heroScale = useTransform(scrollYProgress, [0, 0.18], [1, 0.94]);
  const heroY = useTransform(scrollYProgress, [0, 0.16], [0, -48]);

  const taglineOpacity = useTransform(scrollYProgress, [0.08, 0.2, 0.34, 0.42], [0, 1, 1, 0]);
  const taglineY = useTransform(scrollYProgress, [0.1, 0.38], [40, -24]);

  const pillarsIntroOpacity = useTransform(scrollYProgress, [0.32, 0.42, 0.52, 0.62], [0, 1, 1, 0]);
  const pillarsTrackOpacity = useTransform(scrollYProgress, [0.5, 0.58, 0.92, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      const start = 0.58;
      const end = 0.9;
      if (v < start) setPillarIndex(0);
      else if (v >= end) setPillarIndex(pillars.length - 1);
      else {
        const t = (v - start) / (end - start);
        setPillarIndex(Math.min(pillars.length - 1, Math.floor(t * pillars.length)));
      }
    });
    return () => unsub();
  }, [scrollYProgress]);

  const scrollCarousel = (dir) => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(420, el.clientWidth * 0.85), behavior: 'smooth' });
  };

  return (
    <>
      <header
        className="fixed left-0 right-0 top-0 z-50 bg-transparent"
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:h-16 md:px-8">
          <a href="#" className="text-sm font-semibold tracking-tight text-white/90 md:text-base">
            Siddharth
          </a>
          <nav className="flex items-center gap-5 text-sm text-white/55 md:gap-7">
            <a href="#work" className="transition-colors hover:text-white">
              Work
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
            <a
              href="https://github.com/siddharth637"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-white/90 transition-colors hover:border-white/20 hover:bg-white/[0.08]"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <div ref={storyRef} className="relative h-[480vh]">
        <div className="sticky top-0 h-[100dvh] w-full overflow-hidden bg-[#050508]">
          <CosmicBackdrop progress={smoothProgress} bgY={bgY} meshScale={meshScale} />

          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale, y: heroY, filter: heroFilter }}
            className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-sky-300/80 md:text-sm">
              Portfolio
            </p>
            <h1 className="max-w-5xl text-[clamp(2.5rem,8vw,5.5rem)] font-semibold leading-[1.02] tracking-tight">
              <span className="bg-gradient-to-b from-white via-white to-white/55 bg-clip-text text-transparent">
                Built for the web,
              </span>
              <br />
              <span className="bg-gradient-to-r from-sky-200 via-indigo-200 to-violet-300 bg-clip-text text-transparent">
                engineered for clarity.
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-base text-white/45 md:text-lg">
              Creative developer focused on resilient interfaces, thoughtful motion, and products
              that earn trust — whether you are shipping an MVP or scaling a mature codebase.
            </p>
            <div className="pointer-events-auto mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#work"
                className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-[#050508] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                View work
              </a>
              <a
                href="mailto:siddharthsingh.6217@gmail.com"
                className="rounded-full border border-white/15 px-6 py-2.5 text-sm font-medium text-white/85 transition-colors hover:border-white/25 hover:bg-white/[0.04]"
              >
                Get in touch
              </a>
            </div>
            <motion.div
              className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-xs uppercase tracking-widest">Scroll</span>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ opacity: taglineOpacity, y: taglineY }}
            className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6"
          >
            <p className="max-w-4xl text-center text-[clamp(1.75rem,5vw,3.25rem)] font-medium leading-snug tracking-tight text-white/88">
              I bridge design intent and technical execution — so experiences stay fast,
              accessible, and maintainable as they grow.
            </p>
          </motion.div>

          <motion.div
            style={{ opacity: pillarsIntroOpacity }}
            className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-10 px-6 md:flex-row md:gap-16"
          >
            {pillars.slice(0, 3).map((p) => (
              <div
                key={p.title}
                className="flex max-w-[220px] flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-sky-200/90">
                  <Icon name={p.icon} />
                </div>
                <h3 className="text-lg font-semibold text-white/90">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/45">{p.subtitle}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            style={{ opacity: pillarsTrackOpacity }}
            className="absolute inset-0 z-10 flex items-center px-5 md:px-16"
          >
            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-10">
              <div className="flex flex-col justify-center md:col-span-5 md:pr-6">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-indigo-300/80">
                  Focus areas
                </p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={pillarIndex}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                      {pillars[pillarIndex].title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-white/50 md:text-lg">
                      {pillars[pillarIndex].subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>
                <div className="mt-8 flex gap-2">
                  {pillars.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                        i === pillarIndex ? 'bg-gradient-to-r from-sky-400 to-violet-400' : 'bg-white/10'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="relative flex min-h-[280px] items-center justify-center md:col-span-7 md:justify-end">
                <div className="absolute inset-0 rounded-[2rem] border border-white/[0.07] bg-gradient-to-br from-sky-500/10 via-transparent to-violet-600/10 blur-px" />
                <div className="relative flex h-full min-h-[260px] w-full max-w-[520px] flex-col justify-between rounded-[2rem] border border-white/10 bg-[#07070c]/80 p-8 shadow-[0_0_80px_-20px_rgba(56,189,248,0.35)] backdrop-blur-md md:p-10">
                  <div className="flex items-center gap-3 text-white/80">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sky-200">
                      <Icon name={pillars[pillarIndex].icon} className="h-6 w-6" />
                    </div>
                    <span className="text-sm text-white/40">Snapshot</span>
                  </div>
                  <p className="mt-6 text-lg leading-relaxed text-white/70 md:text-xl">
                    Every engagement is a chance to raise the bar on UX, performance, and code
                    health — without losing velocity.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2 text-xs text-white/35">
                    <span className="rounded-full border border-white/10 px-3 py-1">React</span>
                    <span className="rounded-full border border-white/10 px-3 py-1">Next.js</span>
                    <span className="rounded-full border border-white/10 px-3 py-1">Node</span>
                    <span className="rounded-full border border-white/10 px-3 py-1">Tailwind</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="relative border-t border-white/[0.06] bg-[#050508] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
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
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
                aria-label="Previous"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M15 6l-6 6 6 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
                aria-label="Next"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
          >
            {spotlightCards.map((card) => (
              <article
                key={card.title}
                className="w-[min(100%,380px)] shrink-0 snap-start rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-transparent p-8 transition-colors hover:border-sky-500/25"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-sky-300/70">
                  {card.tag}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/45">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-white/[0.06] bg-[#040406] px-5 py-16 md:px-10 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {ctas.map((c) => (
            <a
              key={c.label}
              href={c.detail.includes('@') ? `mailto:${c.detail}` : '#work'}
              className={`group flex flex-col rounded-2xl border px-6 py-8 transition-all md:min-h-[160px] ${
                c.tone === 'primary'
                  ? 'border-sky-500/30 bg-gradient-to-br from-sky-500/15 via-transparent to-violet-600/10 hover:border-sky-400/40'
                  : 'border-white/[0.08] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]'
              }`}
            >
              <span className="text-lg font-medium text-white">{c.label}</span>
              <span className="mt-2 text-sm text-white/45 transition-colors group-hover:text-white/60">
                {c.detail}
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

function CosmicBackdrop({ progress, bgY, meshScale }) {
  const stars = useMemo(
    () =>
      Array.from({ length: 48 }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        top: `${(i * 61) % 100}%`,
        size: 1 + (i % 3),
        opacity: 0.15 + (i % 5) * 0.08,
      })),
    []
  );

  const starY = useTransform(progress, [0, 1], [0, -120]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-[-15%]">
        <motion.div
          style={{ scale: meshScale }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,189,248,0.22),transparent),radial-gradient(ellipse_60%_50%_at_100%_40%,rgba(139,92,246,0.18),transparent),radial-gradient(ellipse_50%_40%_at_0%_80%,rgba(14,165,233,0.12),transparent)]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)] opacity-40" />
      <motion.div style={{ y: starY }} className="absolute inset-0">
        {stars.map((s) => (
          <span
            key={s.id}
            className="absolute rounded-full bg-white"
            style={{
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              opacity: s.opacity,
            }}
          />
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050508]" />
    </div>
  );
}
