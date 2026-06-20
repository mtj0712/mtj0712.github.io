import { createFileRoute, Link } from '@tanstack/react-router'

const techStack = [
  'TypeScript',
  'React',
  'Node.js',
  'Python',
  'Go',
  'PostgreSQL',
]

export const Route = createFileRoute('/')({
  component: () => (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-28 text-center">
      <div className="hero-glow" />

      <div className="relative z-10 max-w-2xl">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-accent-border)] bg-[var(--color-accent-bg)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-accent)]" />
          Open to new opportunities
        </p>

        <h1 className="mb-4 text-5xl font-extrabold tracking-tight md:text-7xl">
          <span className="block text-[var(--color-text-h)]">Hi, I'm</span>
          <span className="gradient-text block leading-tight">Matthew Jo</span>
        </h1>

        <p className="mb-4 text-base font-semibold text-[var(--color-text)]">
          Software Engineer · Seoul, South Korea
        </p>

        <p className="mb-10 text-lg leading-relaxed text-[var(--color-text)]">
          I craft performant, user-focused software for the web. Passionate about clean
          architecture and great developer experience.
        </p>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <Link to="/projects" className="btn-primary">
            View Projects
          </Link>
          <Link to="/resume" className="btn-secondary">
            Resume
          </Link>
          <Link to="/contact" className="btn-ghost">
            Get in Touch
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-code-bg)] px-3 py-1 text-xs font-medium text-[var(--color-text)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  ),
})
