'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Ecommerce Website',
    description:
      'Built a responsive full-stack e-commerce platform with product catalog, cart, and secure checkout.',
    tech: ['Node.js', 'MongoDB', 'Vercel'],
    link: 'https://github.com/repo',
    linkText: 'View on GitHub',
  },
  {
    title: 'Automobile Showroom',
    description:
      'Designed and developed a full-stack web platform for defense and telecom solutions using Next.js, Express.js, Prisma, and MySQL.',
    tech: ['Next.js', 'Express.js', 'Prisma', 'MySQL'],
    link: 'https://riddhinfratel.app',
    linkText: 'Visit Site',
  },
  {
    title: 'Teacher Admin Dashboard',
    description:
      'Built a scalable dashboard system using React + Express.js + MySQL for institutional management.',
    tech: ['React', 'Express.js', 'MySQL'],
    link: null,
    linkText: null,
  },
  {
    title: 'Frontend Developer Intern',
    description:
      'Gained hands-on experience in ReactJS and modern frontend development at Reviving India, building responsive and user-friendly web pages.',
    tech: ['ReactJS', 'APIs', 'State Management'],
    link: null,
    linkText: 'March 2025 - August 2025',
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent transition-all duration-500 hover:border-sky-500/25 hover:shadow-2xl hover:shadow-sky-500/[0.07]"
    >
      {/* Gradient glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-violet-600/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col justify-between p-8 min-h-[240px]">
        {/* Project number */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-white/90 transition-colors group-hover:text-white md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/45 md:text-base">
              {project.description}
            </p>
          </div>
          <span className="ml-4 shrink-0 text-4xl font-bold text-white/[0.04] transition-colors group-hover:text-white/[0.08]">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <div className="mt-auto pt-6">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/50 transition-colors group-hover:border-white/15 group-hover:text-white/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Link/CTA */}
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-all hover:text-sky-300 group/link"
            >
              {project.linkText}
              <svg
                className="h-4 w-4 transform transition-transform group-hover/link:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          ) : (
            project.linkText && (
              <p className="text-sm font-medium text-white/30">{project.linkText}</p>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      className="relative border-t border-white/[0.06] bg-[#050508] px-5 py-20 md:px-10 md:py-28"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[1px] w-[50%] bg-gradient-to-r from-transparent via-sky-500/25 to-transparent" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-sky-300/70">
            Selected work
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Recent projects
          </h2>
          <p className="mt-4 max-w-2xl text-base text-white/45 md:text-lg">
            A collection of projects showcasing my expertise in modern web development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
