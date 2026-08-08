import { ReactNode, useState } from 'react'

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: open ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 200ms ease' }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export function Notebook({
  filename,
  children,
  defaultOpen = true,
}: {
  filename: string
  children: ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-6">
      <div className="overflow-hidden rounded-xl border border-[var(--color-border)] shadow-sm">
        <button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Collapse notebook' : 'Expand notebook'}
          className="flex w-full items-center gap-2.5 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 hover:bg-[var(--color-accent-bg)] transition-colors"
        >
          <span className="text-[var(--color-text)] opacity-40">
            <ChevronIcon open={open} />
          </span>
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 text-[var(--color-accent)] opacity-60"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          <span className="font-mono text-xs font-medium text-[var(--color-text-h)] opacity-70">
            {filename}.ipynb
          </span>
          <span className="ml-auto flex items-center gap-1.5 font-mono text-xs text-[var(--color-text)] opacity-40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Python 3 (ipykernel)
          </span>
        </button>
        {open && (
          <div className="divide-y divide-[var(--color-border)] bg-[var(--color-bg)]">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

export function MdCell({ children }: { children: ReactNode }) {
  return (
    <div className="flex px-4 py-5">
      <div className="w-16 shrink-0" />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  )
}

export function CodeCell({ n, code }: { n: number; code: string }) {
  return (
    <div className="flex px-4 py-3">
      <div className="w-16 shrink-0 select-none pr-3 pt-[14px] text-right font-mono text-xs font-semibold text-[var(--color-jupyter-in)]">
        In&nbsp;[{n}]:
      </div>
      <div className="min-w-0 flex-1 py-2">
        <pre className="m-0 overflow-x-auto rounded-lg border border-[var(--color-border)] bg-[var(--color-code-bg)] px-4 py-3.5 font-mono text-sm leading-relaxed text-[var(--color-text-h)]">
          {code}
        </pre>
      </div>
    </div>
  )
}
