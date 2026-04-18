'use client';

import { useMemo } from 'react';
import { motion, useTransform } from 'framer-motion';

export default function CosmicBackdrop({ progress, bgY, meshScale }) {
  const stars = useMemo(
    () =>
      Array.from({ length: 64 }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        top: `${(i * 61) % 100}%`,
        size: 1 + (i % 3),
        opacity: 0.12 + (i % 5) * 0.06,
        delay: (i % 8) * 0.4,
      })),
    []
  );

  const starY = useTransform(progress, [0, 1], [0, -140]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Main gradient mesh */}
      <motion.div style={{ y: bgY }} className="absolute inset-[-15%]">
        <motion.div
          style={{ scale: meshScale }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,189,248,0.18),transparent),radial-gradient(ellipse_60%_50%_at_100%_40%,rgba(139,92,246,0.14),transparent),radial-gradient(ellipse_50%_40%_at_0%_80%,rgba(14,165,233,0.10),transparent)]"
        />
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)] opacity-30" />

      {/* Stars with twinkle */}
      <motion.div style={{ y: starY }} className="absolute inset-0">
        {stars.map((s) => (
          <motion.span
            key={s.id}
            className="absolute rounded-full bg-white"
            animate={{
              opacity: [s.opacity, s.opacity * 2.5, s.opacity],
            }}
            transition={{
              duration: 3 + (s.id % 3),
              repeat: Infinity,
              delay: s.delay,
              ease: 'easeInOut',
            }}
            style={{
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
            }}
          />
        ))}
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050508]" />
    </div>
  );
}
