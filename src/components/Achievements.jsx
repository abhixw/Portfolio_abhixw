import SectionWrapper, { SectionTitle } from './SectionWrapper'

const achievements = [
    {
        title: 'Selected Project, Smart India Hackathon (2025)',
        description: 'Transformer-based Web Application Firewall shortlisted in the internal round',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A2.396 2.396 0 0118.813 15h-1.626l-1.121 4.484a.75.75 0 01-1.458 0L13.487 15H10.512l-1.121 4.484a.75.75 0 01-1.458 0L6.812 15H5.187A2.396 2.396 0 013 13.255V5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 5v8.255z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m-3-3h6m-3-6h.008v.008H12V6z" />
            </svg>
        ),
        // Simple trophy icon
        iconSvg: (
            <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-5.25c-.622 0-1.125.504-1.125 1.125v3.375m9 0h-9M15 12V4.875C15 4.115 14.385 3.5 13.625 3.5h-3.25C9.615 3.5 9 4.115 9 4.875V12m6 0H9" />
            </svg>
        )
    },
    {
        title: 'Operations Team Member, Team Recursion',
        description: 'Organized and managed activities for the Udaya Hackathon',
        iconSvg: (
            <svg className="w-10 h-10 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-3.75 9.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12 12.75l.007.007m-.007-.007l-.007.007" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 12.75l-1.5 1.5-1.5-1.5M12.75 12.75l1.5 1.5 1.5-1.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75v3m6-3v3m-3-3v3m-3 3h6" />
            </svg>
        )
    }
]

export default function Achievements() {
    return (
        <SectionWrapper id="achievements">
            <SectionTitle
                title="Achievements"
                subtitle="Recognition and leadership roles."
                accent="primary"
            />

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {/* SIH Achievement */}
                <div className="p-8 rounded-2xl bg-surface-card border border-border hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center group">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-5.25c-.622 0-1.125.504-1.125 1.125v3.375m9 0h-9M15 12V4.875C15 4.115 14.385 3.5 13.625 3.5h-3.25C9.615 3.5 9 4.115 9 4.875V12m6 0H9" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-4 leading-tight">
                        Selected Project, <br /> Smart India Hackathon (2025)
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed max-w-[250px]">
                        Transformer-based Web Application Firewall shortlisted in the internal round
                    </p>
                </div>

                {/* Operations Team Achievement */}
                <div className="p-8 rounded-2xl bg-surface-card border border-border hover:border-accent-orange/30 transition-all duration-300 flex flex-col items-center text-center group">
                    <div className="w-20 h-20 rounded-2xl bg-accent-orange/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-10 h-10 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.302 60.302 0 015.491-6.347A48.01 48.01 0 0012 3.033a48.01 48.01 0 002.249.767 60.372 60.372 0 015.491 6.347c.307.452.413.97.411 1.488a4.5 4.5 0 01-9 0 4.5 4.5 0 01-9 0c-.002-.518.104-1.036.411-1.488z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c3.037 0 5.5 2.463 5.5 5.5s-2.463 5.5-5.5 5.5-5.5-2.463-5.5-5.5 2.463-5.5 5.5-5.5z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-4 leading-tight">
                        Operations Team Member, <br /> Team Recursion
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed max-w-[250px]">
                        Organized and managed activities for the Udaya Hackathon
                    </p>
                </div>
            </div>
        </SectionWrapper>
    )
}
