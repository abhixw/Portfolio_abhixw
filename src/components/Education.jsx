import SectionWrapper, { SectionTitle } from './SectionWrapper'

export default function Education() {
    return (
        <SectionWrapper id="education">
            <SectionTitle
                title="Education"
                subtitle="Academic background."
                accent="green"
            />

            <div className="max-w-2xl space-y-5">
                <div className="flex items-start gap-5 p-6 rounded-xl bg-surface-card border border-border hover:border-border-light transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                    </div>

                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-text-primary">
                            Bachelor's Degree
                        </h3>
                        <p className="text-sm text-text-secondary mt-0.5">DSCE, Bengaluru</p>
                        <div className="flex flex-wrap items-center gap-3 mt-1.5 mb-3">
                            <span className="inline-flex items-center gap-1.5 text-sm text-text-muted">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Sept 2023 – Sept 2027
                            </span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent-green/10 border border-accent-green/20">
                            <span className="text-accent-green font-bold text-lg">8.9</span>
                            <span className="text-sm text-text-muted">/ 10.0 CGPA</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-start gap-5 p-6 rounded-xl bg-surface-card border border-border hover:border-border-light transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-accent-orange/15 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>

                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-text-primary">
                            Class 12th (CBSE)
                        </h3>
                        <p className="text-sm text-text-secondary mt-0.5">MDS Public School, Udaipur, Rajasthan</p>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent-orange/10 border border-accent-orange/20 mt-3">
                            <span className="text-accent-orange font-bold text-lg">80.40</span>
                            <span className="text-sm text-text-muted">% Score</span>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}
