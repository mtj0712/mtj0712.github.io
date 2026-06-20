import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  component: () => (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="mb-2 text-4xl font-semibold tracking-tight text-[var(--color-text-h)]">
        Projects
      </h1>
      <p className="mb-12 text-[var(--color-text)]">Things I've built and shipped.</p>
      <div className="rounded-xl border border-dashed border-[var(--color-border)] px-8 py-16 text-center text-[var(--color-text)]">
        Coming soon.
      </div>
    </div>
  ),
})
