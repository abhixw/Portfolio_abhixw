import SectionWrapper, { SectionTitle } from './SectionWrapper'

const projects = [
    {
        title: 'InterXAI',
        tagline: 'AI-Powered Interview Automation System',
        subtitle: 'Adaptive Interview Engine with AI-Driven Questioning & Evaluation',
        repo: 'https://github.com/abhixw/InterXAI',
        role: 'GenAI Engineer',
        overview:
            'AI-powered interview automation platform that conducts adaptive interviews using LLM-based question generation and semantic evaluation integrated with a scalable backend architecture.',
        contributions: [
            'Designed adaptive question generation using LangChain + LLaMA',
            'Built semantic evaluation and scoring logic',
            'Engineered structured prompts for technical and communication assessment',
            'Tuned model parameters for stable outputs',
            'Integrated AI outputs with Django backend APIs',
        ],
        tech: [
            ['Python', 'LangChain', 'Meta LLaMA'],
            ['Django', 'PostgreSQL', 'Redis'],
            ['React', 'WebSockets'],
            ['Docker'],
        ],
        accent: 'primary',
    },
    {
        title: 'Bhagavad Gita RAG Assistant',
        tagline: 'Intent-Aware RAG Chatbot',
        subtitle: null,
        repo: 'https://github.com/abhixw/Bhagavad_Gita_RAG_Assistant',
        role: null,
        overview:
            'Built a Retrieval-Augmented Generation chatbot grounded strictly in the Bhagavad Gita using vector search and LangGraph-based routing to prevent hallucination and ensure context-aware responses.',
        contributions: null,
        tech: [
            ['Python', 'FastAPI', 'LangChain', 'LangGraph'],
            ['Qdrant (Vector DB)'],
            ['HuggingFace Embeddings'],
            ['Groq LLM'],
            ['Streamlit'],
        ],
        accent: 'green',
    },
    {
        title: 'Multilingual Movie Recommender',
        tagline: 'Context-Aware Multilingual Movie Recommendation System',
        subtitle: 'Multi-language, Context-aware, Explainable, and Production-friendly',
        repo: 'https://github.com/abhixw/Multilingual_Movie_Recommender',
        role: null,
        overview:
            'AI-powered movie recommendation system that provides personalized, multilingual, and context-aware suggestions by incorporating user mood, time of day, weather, and preferred language. Combines Collaborative Filtering, Content-based Similarity, and XGBoost ML for explainable and diverse recommendations.',
        contributions: null,
        tech: [
            ['Python', 'XGBoost', 'Streamlit'],
            ['pandas', 'NumPy', 'scikit-learn'],
            ['Matplotlib', 'Seaborn', 'Plotly'],
        ],
        accent: 'orange',
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
