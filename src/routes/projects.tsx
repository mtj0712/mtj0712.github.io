import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  component: () => (
    <div>
      <h1>Projects</h1>
      <p>Coming soon.</p>
    </div>
  ),
})
