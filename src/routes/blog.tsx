import { createFileRoute } from '@tanstack/react-router'
import { Notebook, MdCell, CodeCell } from '../components/notebook'

export const Route = createFileRoute('/blog')({
  component: () => (
    <Notebook filename="blog">
      <MdCell>
        <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-[var(--color-text-h)]">
          Blog
        </h1>
        <p className="text-[var(--color-text)]">Articles, write-ups, and thoughts.</p>
      </MdCell>
      <CodeCell n={1} code={`posts = []  # coming soon`} />
    </Notebook>
  ),
})
