'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050508]/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:h-16 md:px-8">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-white/90 transition-colors hover:text-white md:text-base"
        >
          Siddharth<span className="text-sky-400">.</span>
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
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-white/90 transition-all hover:border-white/20 hover:bg-white/[0.08] hover:scale-[1.02] active:scale-[0.98]"
          >
            GitHub
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
