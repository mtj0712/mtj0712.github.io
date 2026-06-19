import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: () => (
    <div>
      <h1>Contact</h1>
      <p>Coming soon.</p>
    </div>
  ),
})
