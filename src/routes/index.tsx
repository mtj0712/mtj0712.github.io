import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]">
          Software Engineer
        </p>
        <h1 className="mb-6 text-5xl font-semibold tracking-tight text-[var(--color-text-h)] md:text-6xl">
          Hi, I'm Matthew Jo
        </h1>
        <p className="mb-10 text-lg leading-relaxed text-[var(--color-text)]">
          I build things for the web. Welcome to my corner of the internet.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/projects"
            className="rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="rounded-lg border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-text-h)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  ),
})
