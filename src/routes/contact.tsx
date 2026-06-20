import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: () => (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="mb-2 text-4xl font-semibold tracking-tight text-[var(--color-text-h)]">
        Contact
      </h1>
      <p className="mb-12 text-[var(--color-text)]">Let's get in touch.</p>
      <div className="rounded-xl border border-[var(--color-border)] p-8">
        <a
          href="mailto:mtj0712@gmail.com"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent-bg)] px-5 py-3 text-sm font-medium text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-white"
        >
          mtj0712@gmail.com
        </a>
      </div>
    </div>
  ),
})
