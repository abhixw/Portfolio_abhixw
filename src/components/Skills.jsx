import SectionWrapper, { SectionTitle } from './SectionWrapper'

const skillCategories = [
    {
        title: 'Programming',
        icon: '💻',
        items: ['Python', 'Java', 'C++', 'C', 'OOP'],
        accent: 'primary',
    },
    {
        title: 'AI / ML',
        icon: '🧠',
        items: [
            'LangChain', 'LangGraph', 'Transformers', 'PyTorch', 'Scikit-learn',
            'LLMs', 'NLP', 'RAG', 'Vector Search', 'Embeddings', 'Prompt Engineering',
        ],
        accent: 'green',
    },
    {
        title: 'Backend',
        icon: '⚙️',
        items: ['FastAPI', 'Django', 'REST APIs', 'Microservices', 'Uvicorn', 'Pydantic'],
        accent: 'orange',
    },
    {
        title: 'Databases',
        icon: '🗄️',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Qdrant'],
        accent: 'primary',
    },
    {
        title: 'Data Tools',
        icon: '📊',
        items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
        accent: 'green',
    },
]

const accentLeft = {
    primary: 'border-l-primary',
    green: 'border-l-accent-green',
    orange: 'border-l-accent-orange',
}

const pillColors = {
    primary: 'bg-primary/10 text-primary-light border-primary/20',
    green: 'bg-accent-green/10 text-accent-green-light border-accent-green/20',
    orange: 'bg-accent-orange/10 text-accent-orange-light border-accent-orange/20',
}

export default function Skills() {
    return (
        <SectionWrapper id="skills" alt>
            <SectionTitle
                title="Technical Skills"
                subtitle="Technologies and tools I work with daily."
                accent="primary"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {skillCategories.map((cat) => (
                    <div
                        key={cat.title}
                        className={`bg-surface-card rounded-xl p-5 border border-border border-l-4 ${accentLeft[cat.accent]} hover:border-border-light transition-colors`}
                    >
                        <div className="flex items-center gap-2.5 mb-4">
                            <span className="text-xl">{cat.icon}</span>
                            <h3 className="font-semibold text-text-primary">{cat.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {cat.items.map((item) => (
                                <span
                                    key={item}
                                    className={`px-2.5 py-1 rounded-md text-xs font-medium border ${pillColors[cat.accent]}`}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    )
}
