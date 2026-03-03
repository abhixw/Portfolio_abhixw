import SectionWrapper, { SectionTitle } from './SectionWrapper'

export default function About() {
    const highlights = [
        { icon: '🤖', label: 'Generative AI', desc: 'LLM orchestration & RAG pipelines' },
        { icon: '⚡', label: 'Backend Engineering', desc: 'FastAPI, REST APIs' },
        { icon: '🧠', label: 'Problem Solving', desc: 'DSA & system-level thinking' },
    ]

    return (
        <SectionWrapper id="about" alt>
            <SectionTitle
                title="About"
                subtitle="Computer Science and Design student at DSCE, specializing in AI and secure system design."
                accent="green"
            />

            <div className="grid md:grid-cols-2 gap-10">
                <div>
                    <p className="text-text-secondary leading-relaxed mb-6">
                        🎓 I’m a Computer Science and Design student (Batch of 2027) at
                        Dayananda Sagar College of Engineering, with a strong interest in
                        Artificial Intelligence and secure system design.
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                        🤖 AI-focused developer specializing in Generative AI systems, LLM
                        orchestration, and backend engineering. Experienced in building RAG
                        pipelines, adaptive AI workflows, and scalable REST APIs using FastAPI.
                    </p>
                </div>

                <div className="grid gap-4">
                    {highlights.map((item) => (
                        <div
                            key={item.label}
                            className="flex items-start gap-4 p-4 rounded-xl bg-surface-card border border-border hover:border-border-light transition-colors"
                        >
                            <span className="text-2xl mt-0.5">{item.icon}</span>
                            <div>
                                <h3 className="font-semibold text-text-primary">{item.label}</h3>
                                <p className="text-sm text-text-muted">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}
