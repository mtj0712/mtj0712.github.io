import { useState, useCallback } from 'react'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

function useTheme() {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains('dark'),
  )

  const toggle = useCallback(() => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }, [isDark])

  return { isDark, toggle }
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
] as const

function RootComponent() {
  const { isDark, toggle } = useTheme()

  return (
    <div className="mx-auto flex min-h-svh max-w-[1126px] flex-col border-x border-[var(--color-border)] box-border">
      <header className="sticky top-0 z-10 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-md">
        <nav className="flex items-center gap-1 px-6 py-4">
          <Link
            to="/"
            className="mr-auto font-bold tracking-tight text-[var(--color-text-h)] hover:text-[var(--color-accent)] transition-colors"
          >
            Matthew Jo
          </Link>
          {navLinks.slice(1).map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-accent-bg)] hover:text-[var(--color-accent)] transition-colors"
              activeProps={{
                className:
                  'rounded-lg px-3 py-1.5 text-sm font-semibold bg-[var(--color-accent-bg)] text-[var(--color-accent)]',
              }}
              activeOptions={{ exact: false }}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="ml-2 rounded-lg p-2 text-[var(--color-text)] hover:bg-[var(--color-accent-bg)] hover:text-[var(--color-accent)] transition-colors"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
      </header>
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <footer className="border-t border-[var(--color-border)] px-6 py-8">
        <div className="flex flex-col items-center gap-1 text-sm text-[var(--color-text)]">
          <span className="font-semibold text-[var(--color-text-h)]">Matthew Jo</span>
          <span>© {new Date().getFullYear()} · Built with React &amp; TanStack Router</span>
        </div>
      </footer>
    </div>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
})
