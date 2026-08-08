import { useMemo } from 'react'
import Markdown from 'react-markdown'
import { Notebook, MdCell, CodeCell } from './notebook'

// ── ipynb types ───────────────────────────────────────────────────────────────

export interface IpynbOutputData {
  'text/plain'?: string[]
  'text/html'?: string[]
  'image/png'?: string
}

export interface IpynbOutput {
  output_type: 'stream' | 'execute_result' | 'display_data' | 'error'
  name?: string
  text?: string[]
  data?: IpynbOutputData
  traceback?: string[]
  execution_count?: number | null
}

export interface IpynbCell {
  cell_type: 'markdown' | 'code' | 'raw'
  source: string[]
  outputs?: IpynbOutput[]
  execution_count?: number | null
}

export interface IpynbData {
  cells: IpynbCell[]
}

// ── helpers ───────────────────────────────────────────────────────────────────

// eslint-disable-next-line no-control-regex
const ANSI_RE = /\x1B\[[0-9;]*[mGKHF]/g
function stripAnsi(s: string) {
  return s.replace(ANSI_RE, '')
}

function joinLines(lines: string[] | undefined): string {
  return (lines ?? []).join('')
}

// ── cell output ───────────────────────────────────────────────────────────────

function CellOutput({ output }: { output: IpynbOutput }) {
  // error traceback
  if (output.output_type === 'error') {
    const text = (output.traceback ?? []).map(stripAnsi).join('\n')
    if (!text) return null
    return (
      <div className="flex px-4 pb-3">
        <div className="w-[72px] shrink-0" />
        <pre className="min-w-0 flex-1 overflow-x-auto rounded border border-red-200 bg-red-50 px-4 py-3 font-mono text-sm leading-relaxed text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-400">
          {text}
        </pre>
      </div>
    )
  }

  // image output (matplotlib plots, etc.)
  if (output.data?.['image/png']) {
    return (
      <div className="flex px-4 pb-3">
        <div className="w-[72px] shrink-0" />
        <img
          src={`data:image/png;base64,${output.data['image/png']}`}
          alt="cell output"
          className="max-w-full rounded border border-[var(--color-border)]"
        />
      </div>
    )
  }

  // text output (stream stdout/stderr, execute_result, display_data text/plain)
  const text = joinLines(output.text ?? output.data?.['text/plain'])
  if (!text) return null

  return (
    <div className="flex px-4 pb-3">
      <div className="w-[72px] shrink-0" />
      <pre className="min-w-0 flex-1 overflow-x-auto rounded border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 font-mono text-sm leading-relaxed text-[var(--color-text-h)]">
        {text}
      </pre>
    </div>
  )
}

// ── markdown component overrides ──────────────────────────────────────────────

const mdComponents = {
  h1: ({ children }: { children?: React.ReactNode }) => (
    <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-[var(--color-text-h)]">
      {children}
    </h1>
  ),
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="mb-2 mt-5 text-2xl font-bold text-[var(--color-text-h)]">{children}</h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="mb-2 mt-4 text-xl font-semibold text-[var(--color-text-h)]">{children}</h3>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="mb-3 text-[var(--color-text)]">{children}</p>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="mb-3 list-disc pl-5 text-[var(--color-text)]">{children}</ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="mb-3 list-decimal pl-5 text-[var(--color-text)]">{children}</ol>
  ),
  li: ({ children }: { children?: React.ReactNode }) => <li className="mb-1">{children}</li>,
  pre: ({ children }: { children?: React.ReactNode }) => (
    <pre className="mb-3 overflow-x-auto rounded border border-[var(--color-border)] bg-[var(--color-code-bg)] px-4 py-3 font-mono text-sm leading-relaxed text-[var(--color-text-h)]">
      {children}
    </pre>
  ),
  code: ({ className, children }: { className?: string; children?: React.ReactNode }) =>
    className ? (
      <code className={className}>{children}</code>
    ) : (
      <code className="rounded bg-[var(--color-code-bg)] px-1 py-0.5 font-mono text-sm text-[var(--color-text-h)]">
        {children}
      </code>
    ),
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="font-semibold text-[var(--color-text-h)]">{children}</strong>
  ),
  em: ({ children }: { children?: React.ReactNode }) => <em className="italic">{children}</em>,
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="my-3 border-l-2 border-[var(--color-accent)] pl-4 italic opacity-80">
      {children}
    </blockquote>
  ),
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--color-accent)] underline underline-offset-2"
    >
      {children}
    </a>
  ),
  hr: () => <hr className="my-4 border-[var(--color-border)]" />,
}

// ── main renderer ─────────────────────────────────────────────────────────────

export function NotebookRenderer({
  data,
  filename,
  defaultOpen = true,
}: {
  data: IpynbData
  filename: string
  defaultOpen?: boolean
}) {
  const execNums = useMemo(() => {
    let counter = 0
    return data.cells.map(cell =>
      cell.cell_type === 'code' ? (cell.execution_count ?? ++counter) : null,
    )
  }, [data.cells])

  return (
    <Notebook filename={filename} defaultOpen={defaultOpen}>
      {data.cells.map((cell, i) => {
        if (cell.cell_type === 'markdown') {
          return (
            <MdCell key={i}>
              <Markdown components={mdComponents}>{joinLines(cell.source)}</Markdown>
            </MdCell>
          )
        }

        if (cell.cell_type === 'code') {
          return (
            <div key={i}>
              <CodeCell n={execNums[i]!} code={joinLines(cell.source)} />
              {cell.outputs?.map((out, j) => <CellOutput key={j} output={out} />)}
            </div>
          )
        }

        return null
      })}
    </Notebook>
  )
}
