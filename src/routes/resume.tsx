import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/resume')({
  component: () => (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <div className="mb-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          Background
        </p>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-[var(--color-text-h)]">
          Resume
        </h1>
        <p className="text-[var(--color-text)]">Skills, experience, and education.</p>
      </div>
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] px-8 py-20 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-accent-bg)]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        </div>
        <p className="mb-1 font-semibold text-[var(--color-text-h)]">Resume coming soon</p>
        <p className="text-sm text-[var(--color-text)]">Check back soon.</p>
      </div>
    </div>
  ),
})
