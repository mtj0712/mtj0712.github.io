import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog')({
  component: () => (
    <div>
      <h1>Blog</h1>
      <p>Coming soon.</p>
    </div>
  ),
})
