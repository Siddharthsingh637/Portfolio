'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Icon from './Icon';

const pillars = [
  {
    title: 'Product-grade interfaces',
    subtitle: 'From design systems to motion — interfaces that feel intentional.',
    icon: 'layout',
    tags: ['Design Systems', 'UI/UX', 'Animation'],
  },
  {
    title: 'Full-stack delivery',
    subtitle: 'Next.js, APIs, databases, and deployment with clarity and care.',
    icon: 'stack',
    tags: ['Next.js', 'Node.js', 'Databases'],
  },
  {
    title: 'Performance & polish',
    subtitle: 'Fast loads, accessible markup, and details that compound over time.',
    icon: 'bolt',
    tags: ['Web Vitals', 'A11y', 'Optimization'],
  },
  {
    title: 'Collaboration-first',
    subtitle: 'Clear communication, pragmatic tradeoffs, and shipping in iterations.',
    icon: 'users',
    tags: ['Agile', 'Code Review', 'Documentation'],
  },
];

export { pillars };

export function PillarsIntro({ opacity }) {
  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 px-6 md:flex-row md:gap-14"
    >
      {pillars.slice(0, 3).map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex max-w-[220px] flex-col items-center text-center md:items-start md:text-left"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-sky-200/90">
            <Icon name={p.icon} />
          </div>
          <h3 className="text-lg font-semibold text-white/90">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/45">{p.subtitle}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function PillarsTrack({ opacity, pillarIndex }) {
  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 z-10 flex items-center px-5 md:px-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-10">
        {/* Left — text */}
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
          {/* Progress dots */}
          <div className="mt-8 flex gap-2">
            {pillars.map((_, i) => (
              <span
                key={i}
                className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                  i === pillarIndex
                    ? 'bg-gradient-to-r from-sky-400 to-violet-400'
                    : i < pillarIndex
                    ? 'bg-white/20'
                    : 'bg-white/[0.07]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right — card */}
        <div className="relative flex min-h-[280px] items-center justify-center md:col-span-7 md:justify-end">
          <div className="absolute inset-0 rounded-[2rem] border border-white/[0.05] bg-gradient-to-br from-sky-500/10 via-transparent to-violet-600/10 blur-sm" />
          <div className="relative flex h-full min-h-[260px] w-full max-w-[520px] flex-col justify-between rounded-[2rem] border border-white/10 bg-[#07070c]/80 p-8 shadow-[0_0_80px_-20px_rgba(56,189,248,0.25)] backdrop-blur-md md:p-10">
            <div className="flex items-center gap-3 text-white/80">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sky-200">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={pillarIndex}
                    initial={{ opacity: 0, rotate: -10 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon name={pillars[pillarIndex].icon} className="h-6 w-6" />
                  </motion.div>
                </AnimatePresence>
              </div>
              <span className="text-sm text-white/40">Snapshot</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={pillarIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 text-lg leading-relaxed text-white/70 md:text-xl"
              >
                Every engagement is a chance to raise the bar on UX, performance, and code
                health — without losing velocity.
              </motion.p>
            </AnimatePresence>

            <div className="mt-8 flex flex-wrap gap-2 text-xs text-white/35">
              <AnimatePresence mode="wait">
                <motion.div
                  key={pillarIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-wrap gap-2"
                >
                  {pillars[pillarIndex].tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
