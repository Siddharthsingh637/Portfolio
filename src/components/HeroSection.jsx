'use client';

import { motion } from 'framer-motion';

export default function HeroSection({ heroOpacity, heroScale, heroY, heroFilter }) {
  return (
    <motion.div
      style={{ opacity: heroOpacity, scale: heroScale, y: heroY, filter: heroFilter }}
      className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-sky-300/80 md:text-sm"
      >
        Portfolio
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl text-[clamp(2.5rem,8vw,5.5rem)] font-semibold leading-[1.02] tracking-tight"
      >
        <span className="bg-gradient-to-b from-white via-white to-white/55 bg-clip-text text-transparent">
          Built for the web,
        </span>
        <br />
        <span className="bg-gradient-to-r from-sky-200 via-indigo-200 to-violet-300 bg-clip-text text-transparent">
          engineered for clarity.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="mt-8 max-w-xl text-base text-white/45 md:text-lg"
      >
        Creative developer focused on resilient interfaces, thoughtful motion, and products
        that earn trust — whether you&apos;re shipping an MVP or scaling a mature codebase.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="pointer-events-auto mt-10 flex flex-wrap items-center justify-center gap-3"
      >
        <a
          href="#work"
          className="group relative rounded-full bg-white px-7 py-2.5 text-sm font-medium text-[#050508] transition-all hover:scale-[1.03] active:scale-[0.98] overflow-hidden"
        >
          <span className="relative z-10">View work</span>
          <span className="absolute inset-0 bg-gradient-to-r from-sky-100 to-violet-100 opacity-0 transition-opacity group-hover:opacity-100" />
        </a>
        <a
          href="mailto:siddharthsingh.6217@gmail.com"
          className="rounded-full border border-white/15 px-7 py-2.5 text-sm font-medium text-white/85 transition-all hover:border-white/25 hover:bg-white/[0.04] hover:scale-[1.02] active:scale-[0.98]"
        >
          Get in touch
        </a>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/25"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="1" y="1" width="14" height="22" rx="7" />
            <motion.circle
              cx="8"
              cy="8"
              r="2"
              fill="currentColor"
              animate={{ cy: [7, 14, 7] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}
