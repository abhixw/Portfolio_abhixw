import SectionWrapper, { SectionTitle } from './SectionWrapper'

const certifications = [
    {
        title: 'Full Stack Generative and Agentic AI with Python',
        issuer: 'Udemy',
        instructors: 'Hitesh Choudhary, Piyush Garg',
        file: '/UC-33754541-fc0a-4501-9cf8-fbb82f923b0e.pdf',
        accent: 'primary',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: 'Alpha — DSA with Java',
        issuer: 'Apna College',
        instructors: 'Shradha Khapra',
        file: '/certificate-sigma-30-66a7cc80d84663336c0980cf.pdf',
        accent: 'orange',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
    },
]

const accentBg = {
    primary: 'bg-primary/15 text-primary',
    orange: 'bg-accent-orange/15 text-accent-orange',
}

const accentBorder = {
    primary: 'border-l-primary',
    orange: 'border-l-accent-orange',
}

export default function Certifications() {
    return (
        <SectionWrapper id="certifications" alt>
            <SectionTitle
                title="Certifications"
                subtitle="Courses and certifications I've completed."
                accent="orange"
            />

            <div className="grid sm:grid-cols-2 gap-5 max-w-4xl">
                {certifications.map((cert) => (
                    <div
                        key={cert.title}
                        className={`p-6 rounded-xl bg-surface-card border border-border hover:border-border-light transition-colors border-l-4 ${accentBorder[cert.accent]}`}
                    >
                        <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-xl ${accentBg[cert.accent]} flex items-center justify-center shrink-0`}>
                                {cert.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-text-primary text-base leading-snug">
                                    {cert.title}
                                </h3>
                                <p className="text-sm text-text-secondary mt-1">{cert.issuer}</p>
                                <p className="text-xs text-text-muted mt-0.5">by {cert.instructors}</p>
                            </div>
                        </div>

                        <a
                            href={cert.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg text-sm font-semibold ${accentBg[cert.accent]} hover:opacity-80 transition-opacity`}
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                            </svg>
                            View Certificate
                        </a>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    )
}
