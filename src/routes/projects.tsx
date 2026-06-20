import { createFileRoute } from '@tanstack/react-router'

function EmptyState({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] px-8 py-20 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-accent-bg)]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      </div>
      <p className="mb-1 font-semibold text-[var(--color-text-h)]">{label}</p>
      <p className="text-sm text-[var(--color-text)]">Check back soon.</p>
    </div>
  )
}

export const Route = createFileRoute('/projects')({
  component: () => (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <div className="mb-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          Portfolio
        </p>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-[var(--color-text-h)]">
          Projects
        </h1>
        <p className="text-[var(--color-text)]">Things I've built and shipped.</p>
      </div>
      <EmptyState label="Projects coming soon" />
    </div>
  ),
})
