import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <div>
      <h1>Hi, I'm [Your Name]</h1>
      <p>Software engineer. This is my corner of the internet.</p>
    </div>
  ),
})
