import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Notebook, MdCell, CodeCell } from '../components/notebook'
import { NotebookRenderer, type IpynbData } from '../components/notebook-renderer'

const OWNER = 'mtj0712'
const REPO = 'research_replications'
const API = `https://api.github.com/repos/${OWNER}/${REPO}/contents`

interface GHItem {
  name: string
  type: 'file' | 'dir' | 'symlink' | 'submodule'
  download_url: string | null
}

interface NotebookEntry {
  filename: string
  data: IpynbData
}

async function loadNotebooks(): Promise<NotebookEntry[]> {
  const rootRes = await fetch(API)
  if (!rootRes.ok) throw new Error(`GitHub API ${rootRes.status}: ${rootRes.statusText}`)

  const root: GHItem[] = await rootRes.json()
  const dirs = root.filter(item => item.type === 'dir' && !item.name.startsWith('.'))

  const perDir = await Promise.all(
    dirs.map(async dir => {
      const res = await fetch(`${API}/${dir.name}`)
      if (!res.ok) return []
      const items: GHItem[] = await res.json()

      return Promise.all(
        items
          .filter(item => item.type === 'file' && item.name.endsWith('.ipynb') && item.download_url)
          .map(async file => {
            const res = await fetch(file.download_url!)
            if (!res.ok) return null
            const data: IpynbData = await res.json()
            return { filename: file.name.replace(/\.ipynb$/, ''), data }
          }),
      )
    }),
  )

  return perDir
    .flat()
    .filter((nb): nb is NotebookEntry => nb !== null)
    .sort((a, b) => a.filename.localeCompare(b.filename))
}

function ProjectsPage() {
  const [notebooks, setNotebooks] = useState<NotebookEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadNotebooks()
      .then(setNotebooks)
      .catch(e => setError(e instanceof Error ? e.message : String(e)))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <Notebook filename="projects">
        <MdCell>
          <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-[var(--color-text-h)]">
            Projects
          </h1>
          <p className="text-[var(--color-text)]">
            Research replications and experiments — rendered live from{' '}
            <a
              href={`https://github.com/${OWNER}/${REPO}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] underline underline-offset-2"
            >
              {OWNER}/{REPO}
            </a>
            .
          </p>
        </MdCell>
        {loading && (
          <CodeCell
            n={1}
            code={`notebooks = fetch_from_github("${OWNER}/${REPO}")\n# Loading...`}
          />
        )}
        {error && (
          <CodeCell
            n={1}
            code={`# Failed to load notebooks\nraise ConnectionError("${error}")`}
          />
        )}
        {!loading && !error && notebooks.length === 0 && (
          <CodeCell n={1} code="notebooks = []  # no .ipynb files found" />
        )}
      </Notebook>
      {notebooks.map(nb => (
        <NotebookRenderer key={nb.filename} filename={nb.filename} data={nb.data} defaultOpen={false} />
      ))}
    </>
  )
}

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})
