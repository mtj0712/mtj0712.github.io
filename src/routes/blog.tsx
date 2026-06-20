import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog')({
  component: () => (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <div className="mb-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          Writing
        </p>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-[var(--color-text-h)]">
          Blog
        </h1>
        <p className="text-[var(--color-text)]">Articles, write-ups, and thoughts.</p>
      </div>
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] px-8 py-20 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-accent-bg)]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
        </div>
        <p className="mb-1 font-semibold text-[var(--color-text-h)]">Posts coming soon</p>
        <p className="text-sm text-[var(--color-text)]">Check back soon.</p>
      </div>
    </div>
  ),
})
