import SectionWrapper, { SectionTitle } from './SectionWrapper'

const achievements = [
    {
        title: 'Selected Project, Smart India Hackathon (2025)',
        description: 'Transformer-based Web Application Firewall shortlisted in the internal round',
        icon: (
            <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-5.25c-.622 0-1.125.504-1.125 1.125v3.375m9 0h-9M15 12V4.875C15 4.115 14.385 3.5 13.625 3.5h-3.25C9.615 3.5 9 4.115 9 4.875V12m6 0H9" />
            </svg>
        ),
        accent: 'primary',
    },
    {
        title: '3rd Runner Up, Hackedemia Hackathon',
        description: 'Placed in the top tier at the 24-Hour National Hackathon held in Bengaluru.',
        icon: (
            <svg className="w-10 h-10 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
        ),
        accent: 'orange',
    },
    {
        title: 'Top 32/1000+, Zenith Hackathon',
        description: 'Finalist in the 24-Hour Hackathon for building an AI-native job board.',
        icon: (
            <svg className="w-10 h-10 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        accent: 'green',
    },
]

const accentColors = {
    primary: 'bg-primary/10 text-primary border-primary/20',
    orange: 'bg-accent-orange/10 text-accent-orange border-accent-orange/20',
    green: 'bg-accent-green/10 text-accent-green border-accent-green/20',
}

const hoverColors = {
    primary: 'hover:border-primary/30',
    orange: 'hover:border-accent-orange/30',
    green: 'hover:border-accent-green/30',
}

export default function Achievements() {
    return (
        <SectionWrapper id="achievements">
            <SectionTitle
                title="Achievements"
                subtitle="Recognition in hackathons and competitive events."
                accent="primary"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {achievements.map((achievement, index) => (
                    <div
                        key={index}
                        className={`p-8 rounded-2xl bg-surface-card border border-border ${hoverColors[achievement.accent]} transition-all duration-300 flex flex-col items-center text-center group`}
                    >
                        <div className={`w-20 h-20 rounded-2xl ${accentColors[achievement.accent].split(' ')[0]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            {achievement.icon}
                        </div>
                        <h3 className="text-lg font-bold text-text-primary mb-3 leading-tight">
                            {achievement.title}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            {achievement.description}
                        </p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    )
}
