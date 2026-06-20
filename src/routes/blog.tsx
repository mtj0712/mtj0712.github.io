import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog')({
  component: () => (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="mb-2 text-4xl font-semibold tracking-tight text-[var(--color-text-h)]">
        Blog
      </h1>
      <p className="mb-12 text-[var(--color-text)]">Articles and write-ups.</p>
      <div className="rounded-xl border border-dashed border-[var(--color-border)] px-8 py-16 text-center text-[var(--color-text)]">
        Coming soon.
      </div>
    </div>
  ),
})
