import { createFileRoute } from '@tanstack/react-router'

const links = [
  {
    label: 'Email',
    href: 'mailto:mtj0712@gmail.com',
    display: 'mtj0712@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/mtj0712',
    display: 'github.com/mtj0712',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/mtj0712',
    display: 'linkedin.com/in/mtj0712',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

export const Route = createFileRoute('/contact')({
  component: () => (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <div className="mb-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          Reach out
        </p>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-[var(--color-text-h)]">
          Contact
        </h1>
        <p className="text-[var(--color-text)]">
          I'm always open to new projects and conversations.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {links.map(({ label, href, display, icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group flex items-center gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-4 transition-all hover:border-[var(--color-accent-border)] hover:bg-[var(--color-accent-bg)]"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-code-bg)] text-[var(--color-text)] group-hover:bg-[var(--color-accent-bg)] group-hover:text-[var(--color-accent)] transition-colors">
              {icon}
            </span>
            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text)]">
                {label}
              </span>
              <span className="text-sm font-medium text-[var(--color-text-h)] group-hover:text-[var(--color-accent)] transition-colors">
                {display}
              </span>
            </div>
            <svg className="ml-auto h-4 w-4 text-[var(--color-border)] group-hover:text-[var(--color-accent)] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  ),
})
