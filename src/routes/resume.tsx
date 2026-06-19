import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/resume')({
  component: () => (
    <div>
      <h1>Resume</h1>
      <p>Coming soon.</p>
    </div>
  ),
})
