import { createFileRoute, Link } from '@tanstack/react-router'
import { Notebook, MdCell, CodeCell } from '../components/notebook'

const aboutCode = `about = {
    "name":       "Matthew (Hyunjoon) Jo",
    "role":       "Software Engineer · ML Researcher",
    "university": "Johns Hopkins University",
    "degrees":    ["B.S. Computer Science", "Applied Math & Statistics"],
    "location":   "Seoul, South Korea",
    "status":     "Open to new opportunities",
}`

const techStack = [
  'Python', 'PyTorch', 'TensorFlow', 'OpenAI API',
  'TypeScript', 'React', 'Node.js', 'Flask',
  'Go', 'C/C++', 'PostgreSQL',
  'pandas', 'NumPy', 'HuggingFace Transformers',
]

export const Route = createFileRoute('/')({
  component: () => (
    <Notebook filename="home">
      <MdCell>
        <div className="py-2">
          {/* Status badge */}
          <div className="mb-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 dark:border-emerald-800/50 dark:bg-emerald-950/20 dark:text-emerald-400">
              <span
                className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"
                style={{ animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite' }}
              />
              Open to new opportunities
            </span>
          </div>

          {/* Hero name */}
          <h1 className="mb-2 gradient-text text-4xl font-black tracking-tight leading-tight sm:text-5xl">
            Matthew Jo
          </h1>
          <p className="mb-5 text-base font-medium text-[var(--color-text-h)] opacity-60">
            Hyunjoon Jo · Software Engineer &amp; ML Researcher
          </p>

          {/* Location line */}
          <p className="mb-5 flex items-center gap-1.5 text-sm text-[var(--color-text)]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-70">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Seoul, South Korea · Johns Hopkins University (B.S. CS + Applied Math)
          </p>

          {/* Bio */}
          <p className="mb-7 max-w-lg text-[var(--color-text)] leading-relaxed">
            Building at the intersection of ML research and full-stack engineering. Currently focused on
            cross-lingual transfer in LLMs, PEFT via LoRA, and developer tooling that doesn't get in the way.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <Link to="/projects" className="btn-primary">
              View Projects
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/resume" className="btn-secondary">Resume</Link>
            <Link to="/contact" className="btn-ghost">Get in Touch</Link>
          </div>
        </div>
      </MdCell>

      <CodeCell n={1} code={aboutCode} />

      <MdCell>
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--color-text)] opacity-40">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {techStack.map(name => (
            <span
              key={name}
              className="inline-flex items-center rounded-md border border-[var(--color-border)] bg-[var(--color-code-bg)] px-2.5 py-1 font-mono text-xs font-medium text-[var(--color-text-h)] hover:border-[var(--color-accent-border)] hover:bg-[var(--color-accent-bg)] hover:text-[var(--color-accent)] transition-colors cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </MdCell>
    </Notebook>
  ),
})
