import { useState } from 'react'
import SectionWrapper from './SectionWrapper'

const categories = ['All Projects', 'AI / ML', 'Full Stack', 'Security']

const projects = [
    {
        title: 'InterXAI',
        category: 'AI / ML',
        tagline: 'AI-interview automation platform',
        description: 'Agent-based LLM workflows for dynamic question generation and scoring.',
        image: '/interxai_preview.png',
        repo: 'https://github.com/abhixw/InterXAI',
        tech: ['LLM Workflows', 'Python', 'Redis'],
        accent: 'primary'
    },
    {
        title: 'SignalStack',
        category: 'Full Stack',
        tagline: 'GitHub-based signal extraction platform',
        description: 'AI hiring platform evaluating candidates via GitHub-based signal extraction.',
        image: '/signalstack_preview.png',
        repo: 'https://github.com/abhixw/SignalStack',
        tech: ['FastAPI', 'React', 'Gemini'],
        accent: 'green'
    },
    {
        title: 'Transformer-Based WAF',
        category: 'Security',
        tagline: 'Anomalous HTTP detection system',
        description: 'Transformer-based Firewall to detect malicious requests without rule signatures.',
        image: '/waf_dashboard_preview.png',
        repo: 'https://github.com/abhixw/Web-Application-Firewall',
        tech: ['Transformers', 'PyTorch', 'FastAPI'],
        accent: 'orange'
    },
    {
        title: 'GitaMind',
        category: 'AI / ML',
        tagline: 'Agentic RAG Assistant',
        description: 'RAG assistant grounded in the Bhagavad Gita using LangGraph orchestration.',
        image: '/gitamind_preview.png',
        repo: 'https://github.com/abhixw/GitaMind',
        tech: ['LangGraph', 'Qdrant', 'FastAPI'],
        accent: 'primary'
    },
    {
        title: 'Telemedicine',
        category: 'Full Stack',
        tagline: 'Telemedicine & HomeCare Platform',
        description: 'Comprehensive platform for remote care, digital records, and emergency SOS support.',
        image: '/telemedicine_preview.png',
        repo: 'https://github.com/abhixw/Telemedicine',
        tech: ['Node.js', 'React Native', 'MongoDB'],
        accent: 'primary'
    },
    {
        title: 'SitePulse',
        category: 'Full Stack',
        tagline: 'Website Performance Audit Engine',
        description: 'Analyzes real-world websites using PageSpeed Insights API to generate actionable SEO and performance recommendations.',
        image: '/sitepulse_screenshot.png',
        repo: 'https://github.com/abhixw/SitePulse',
        tech: ['FastAPI', 'React', 'Python', 'SEO'],
        accent: 'primary'
    }
]

export default function Projects() {
    const [activeTab, setActiveTab] = useState('All Projects')

    const filteredProjects = activeTab === 'All Projects'
        ? projects
        : projects.filter(p => p.category === activeTab)

    return (
        <SectionWrapper id="projects" className="bg-transparent">
            {/* Header Section */}
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                    My Latest <span className="text-primary italic">Projects</span>
                </h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />

                {/* Custom Filtering Tabs */}
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-6 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${activeTab === cat
                                ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105'
                                : 'bg-surface-card/40 border-border text-text-secondary hover:border-primary/40'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
                {filteredProjects.map((project, index) => (
                    <div
                        key={project.title}
                        className="group bg-surface-card/60 backdrop-blur-md rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        {/* Image Container */}
                        <div className="aspect-[16/10] overflow-hidden relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface-card/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <a
                                    href={project.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-2 bg-primary text-sm font-bold text-white text-center rounded-lg shadow-lg"
                                >
                                    View Repository
                                </a>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <span className={`w-2 h-2 rounded-full ${project.accent === 'green' ? 'bg-accent-green' :
                                    project.accent === 'orange' ? 'bg-accent-orange' : 'bg-primary'
                                    }`} />
                                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">
                                    {project.category}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-2">
                                {project.description}
                            </p>

                            {/* Tech Badges */}
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span key={t} className="px-2 py-1 rounded-md bg-surface-elevated/50 text-[10px] font-bold text-text-muted border border-border/50">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty state if no projects in category */}
            {filteredProjects.length === 0 && (
                <div className="text-center py-20 bg-surface-card/40 rounded-2xl border border-dashed border-border">
                    <p className="text-text-muted italic">More projects in {activeTab} coming soon! 🚀</p>
                </div>
            )}
        </SectionWrapper>
    )
}
