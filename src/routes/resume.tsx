import { createFileRoute } from '@tanstack/react-router'
import { Notebook, MdCell, CodeCell } from '../components/notebook'

const educationCode = `education = {
    "school":       "Johns Hopkins University",
    "location":     "Baltimore, MD",
    "degree":       "B.S. in Computer Science",
    "double_major": "Applied Mathematics and Statistics",
    "period":       "Aug. 2019 – Current",
    "courses": [
        "Machine Learning",
        "Machine Learning: Deep Learning",
        "NLP: Self-Supervised Model",
    ],
}`

const workCode = `work_experience = [
    {
        "title":  "Research Assistant",
        "org":    "Spelix Corp.",
        "loc":    "Seoul, South Korea",
        "period": "Sept. 2024 – Nov. 2024",
        "highlights": [
            "Extracted numerical data from 30+ EDR line graphs using PyMuPDF & OpenAI API",
            "Processed 100+ tables in 120+ EDR files from ~14 auto manufacturers via OpenAI Assistant & Upstage OCR API",
            "Unified data with pandas for downstream ML model training",
        ],
    },
    {
        "title":  "Full-stack Developer",
        "org":    "JHU Biomedical Informatics and Data Science",
        "loc":    "Baltimore, MD",
        "period": "May 2023 – July 2023",
        "highlights": [
            "Troubleshot 10+ bugs in TermHub, an internal medical terminology management system",
            "Added 3 new features to streamline medical treatment processes",
        ],
    },
    {
        "title":  "Back-end Developer",
        "org":    "ABLY Corporation",
        "loc":    "Seoul, South Korea",
        "period": "May 2022 – June 2022",
        "highlights": [
            "Built web scrapers with >95% accuracy for 300+ markets on Pastel (e-commerce platform) using Python/JSON",
            "Designed a reusable parent class; standardized structure across 7+ markets",
            "Reduced new-market onboarding time by ~30 min per market",
        ],
    },
    {
        "title":  "Signalman",
        "org":    "Republic of Korea Army",
        "loc":    "South Korea",
        "period": "Oct. 2020 – Apr. 2022",
        "highlights": [
            "Authored military radio manual; trained 10+ new recruits annually",
            "Maintained signal encryption through ~24 hr/week radio operation",
            "Retrained 5+ senior officers on radio use",
        ],
    },
]`

const researchCode = `research_experience = [
    {
        "title":  "Research Assistant",
        "lab":    "Philipp Koehn's Lab",
        "loc":    "Baltimore, MD",
        "period": "Feb. 2025 – Present",
        "highlights": [
            "Evaluating cross-lingual transfer in LLMs by fine-tuning on OPUS corpora",
            "Implementing PEFT via LoRA to reduce memory and computation requirements",
            "Applying TRL frameworks to investigate alignment in multilingual contexts",
            "Building a Hugging Face Transformers pipeline to benchmark multilingual models",
        ],
    },
]`

const projectsCode = `projects = [
    {
        "name":   "AI-Powered Event Scheduler with Weather Forecasting",
        "period": "June 2025 – July 2025",
        "stack":  ["Python", "Flask", "JavaScript", "WeatherAPI", "SARIMAX", "ONNX", "Falcon-RW-1B"],
        "highlights": [
            "Online calendar with local weather (WeatherAPI: past 7 days to +3 days)",
            "SARIMAX forecasting for weather 4–6 days out",
            "User accounts, location settings, and event CRUD",
            "AI event recommendations via Falcon-RW-1B exported to ONNX",
        ],
    },
]`

const certificatesCode = `certificates = [
    {
        "name":   "DeepLearning.AI TensorFlow Developer",
        "issuer": "Coursera Inc.",
        "date":   "Dec. 10, 2024",
        "skills": ["TensorFlow", "NLP", "Deep Learning"],
    },
    {
        "name":   "Korean Olympiad in Informatics – Finalist",
        "issuer": "National Information Society Agency",
        "date":   "July 2018",
        "skills": ["Algorithm"],
    },
]`

const skillsCode = `skills = {
    "languages":            ["Python", "C/C++", "Java", "JavaScript", "HTML/CSS"],
    "frameworks_and_tools": ["OpenAI API", "Upstage OCR", "Git", "VS Code", "Jupyter Notebook", "Flask"],
    "libraries":            ["pandas", "NumPy", "Matplotlib", "PyMuPDF"],
    "machine_learning":     ["PyTorch", "TensorFlow", "HuggingFace Transformers", "LoRA / PEFT", "TRL"],
}`

function Divider({ label }: { label: string }) {
  return (
    <MdCell>
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-[var(--color-border)]" />
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--color-accent)] opacity-80">
          {label}
        </span>
        <div className="h-px flex-1 bg-[var(--color-border)]" />
      </div>
    </MdCell>
  )
}

export const Route = createFileRoute('/resume')({
  component: () => (
    <Notebook filename="resume">
      <MdCell>
        <h1 className="mb-1 gradient-text text-4xl font-black tracking-tight sm:text-5xl">
          Resume
        </h1>
        <p className="text-[var(--color-text)]">
          Matthew (Hyunjoon) Jo · Software Engineer &amp; ML Researcher
        </p>
      </MdCell>

      <Divider label="Education" />
      <CodeCell n={1} code={educationCode} />

      <Divider label="Work Experience" />
      <CodeCell n={2} code={workCode} />

      <Divider label="Research Experience" />
      <CodeCell n={3} code={researchCode} />

      <Divider label="Projects" />
      <CodeCell n={4} code={projectsCode} />

      <Divider label="Certificates" />
      <CodeCell n={5} code={certificatesCode} />

      <Divider label="Technical Skills" />
      <CodeCell n={6} code={skillsCode} />
    </Notebook>
  ),
})
