import SectionWrapper, { SectionTitle } from './SectionWrapper'

const projects = [
    {
        title: 'InterXAI',
        tagline: 'AI-Powered Interview Automation System',
        subtitle: null,
        repo: 'https://github.com/abhixw/InterXAI',
        role: 'AI Engineer',
        overview:
            'AI-driven interview automation platform using agent-based LLM workflows for dynamic question generation and scoring.',
        contributions: [
            'Reduced interview coordination time by 70% through structured evaluation logic and workflow automation',
            'Designed an NLP-based answer evaluation pipeline with quantitative scoring metrics for consistent candidate assessment',
            'Dockerized backend services and integrated Redis caching to optimize inference latency and scalability',
        ],
        tech: [
            ['Python', 'LLM Workflows', 'NLP'],
            ['Docker', 'Redis'],
        ],
        accent: 'primary',
    },
    {
        title: 'SignalStack',
        tagline: 'GitHub-Based Signal Extraction Hiring Platform',
        subtitle: 'Hackathon 2026',
        repo: 'https://github.com/abhixw/SignalStack', // Placeholder as not explicitly in img but pattern suggests
        role: 'Full-Stack Developer',
        overview:
            'AI-powered hiring platform evaluating candidates via GitHub-based signal extraction instead of resumes.',
        contributions: [
            'Built FastAPI backend integrating GitHub API and Gemini 2.5 Flash for task decomposition and intelligent scoring',
            'Designed React + Vite dashboard for outcome creation, candidate evaluation, and reviewer workflows',
            'Implemented structured scoring, audit logging, and feedback-driven system learning',
        ],
        tech: [
            ['FastAPI', 'GitHub API', 'Gemini 2.5 Flash'],
            ['React', 'Vite'],
        ],
        accent: 'green',
    },
    {
        title: 'Transformer-Based WAF',
        tagline: 'Anomalous HTTP Request Detection System',
        subtitle: 'Smart India Hackathon 2025',
        repo: 'https://github.com/abhixw/Transformer-WAF', // Placeholder
        role: 'Backend & ML Developer',
        overview:
            'Transformer-based Web Application Firewall to detect anomalous HTTP requests without rule-based signatures.',
        contributions: [
            'Trained and fine-tuned a sequence classification model on HTTP payload data for malicious request detection',
            'Developed real-time detection and retraining APIs using FastAPI and PyTorch with structured logging via SQLite',
            'Enabled Docker-based deployment and Nginx integration for end-to-end traffic evaluation',
        ],
        tech: [
            ['Transformer', 'FastAPI', 'PyTorch'],
            ['SQLite', 'Docker', 'Nginx'],
        ],
        accent: 'orange',
    },
    {
        title: 'GitaMind',
        tagline: 'Agentic RAG Assistant',
        subtitle: '2026',
        repo: 'https://github.com/abhixw/GitaMind', // Placeholder
        role: 'AI Engineer',
        overview:
            'Agentic RAG assistant grounded in the Bhagavad Gita using LangGraph-based orchestration.',
        contributions: [
            'Implemented planner, router, and critic reflection loop to enforce strict verse-level citation and prevent hallucination',
            'Integrated Groq LLaMA-3.1, HuggingFace embeddings, and Qdrant vector search for multilingual grounded responses',
            'Built FastAPI backend with Streamlit UI supporting voice interaction via Whisper (STT) and gTTS (TTS)',
        ],
        tech: [
            ['LangGraph', 'LLaMA-3.1', 'Groq'],
            ['Qdrant', 'FastAPI', 'Streamlit'],
            ['Whisper (STT)', 'gTTS (TTS)'],
        ],
        accent: 'primary',
    },
]

const accentBorders = {
    primary: 'border-t-primary',
    green: 'border-t-accent-green',
    orange: 'border-t-accent-orange',
}

const accentBg = {
    primary: 'bg-primary/15 text-primary',
    green: 'bg-accent-green/15 text-accent-green',
    orange: 'bg-accent-orange/15 text-accent-orange',
}

export default function Projects() {
    return (
        <SectionWrapper id="projects">
            <SectionTitle
                title="Projects"
                subtitle="Selected work showcasing AI engineering, RAG systems, and backend architecture."
                accent="orange"
            />

            <div className="space-y-10">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className={`rounded-2xl border border-border border-t-4 ${accentBorders[project.accent]} bg-surface-card p-6 md:p-8 hover:border-border-light transition-colors`}
                    >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-text-primary">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-text-muted mt-1">{project.tagline}</p>
                                {project.subtitle && (
                                    <p className="text-sm text-text-secondary mt-0.5 italic">
                                        {project.subtitle}
                                    </p>
                                )}
                            </div>
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-text-muted hover:text-primary hover:border-primary/40 transition-colors shrink-0"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                                Repository
                            </a>
                        </div>

                        {project.role && (
                            <div className={`inline-block px-3 py-1 rounded-md text-xs font-semibold mb-4 ${accentBg[project.accent]}`}>
                                Role: {project.role}
                            </div>
                        )}

                        <p className="text-text-secondary leading-relaxed mb-5">{project.overview}</p>

                        {project.contributions && (
                            <div className="mb-5">
                                <h4 className="text-sm font-semibold text-text-muted mb-2 uppercase tracking-wider">
                                    My Contributions
                                </h4>
                                <ul className="space-y-1.5">
                                    {project.contributions.map((c, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                                            <span className="text-accent-green mt-1">▸</span>
                                            {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div>
                            <h4 className="text-sm font-semibold text-text-muted mb-3 uppercase tracking-wider">
                                Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.flat().map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1 rounded-full text-xs font-medium bg-surface-elevated text-text-secondary border border-border"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    )
}
