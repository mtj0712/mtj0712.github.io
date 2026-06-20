import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
] as const

export const Route = createRootRoute({
  component: () => (
    <div className="mx-auto flex min-h-svh max-w-[1126px] flex-col border-x border-[var(--color-border)] box-border">
      <header className="sticky top-0 z-10 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-sm">
        <nav className="flex items-center gap-1 px-6 py-4">
          <Link
            to="/"
            className="mr-auto font-semibold text-[var(--color-text-h)] hover:text-[var(--color-accent)] transition-colors"
          >
            Matthew (Hyunjoon) Jo
          </Link>
          {navLinks.slice(1).map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="rounded-md px-3 py-1.5 text-sm text-[var(--color-text)] hover:bg-[var(--color-accent-bg)] hover:text-[var(--color-accent)] transition-colors"
              activeProps={{ className: 'rounded-md px-3 py-1.5 text-sm bg-[var(--color-accent-bg)] text-[var(--color-accent)] font-medium' }}
              activeOptions={{ exact: false }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <footer className="border-t border-[var(--color-border)] px-6 py-6 text-center text-sm text-[var(--color-text)]">
        © {new Date().getFullYear()} Matthew Jo
      </footer>
    </div>
  ),
})
