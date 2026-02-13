import SectionWrapper, { SectionTitle } from './SectionWrapper'

const contactItems = [
    {
        label: 'Email',
        value: 'abhinavshrimali03@gmail.com',
        href: 'mailto:abhinavshrimali03@gmail.com',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        label: 'Phone',
        value: '+91 8094051891',
        href: 'tel:+918094051891',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
    },
    {
        label: 'Location',
        value: 'Bengaluru, India',
        href: null,
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
]

export default function Contact() {
    return (
        <SectionWrapper id="get-in-touch">
            <SectionTitle
                title="Get in Touch"
                subtitle="Let's connect. I'm always open to discussions about AI, backend engineering, and new opportunities."
                accent="orange"
            />

            <div className="grid sm:grid-cols-3 gap-5 max-w-3xl">
                {contactItems.map((item) => {
                    const Wrapper = item.href ? 'a' : 'div'
                    const props = item.href
                        ? { href: item.href, target: item.href.startsWith('mailto') ? undefined : '_blank', rel: 'noopener noreferrer' }
                        : {}

                    return (
                        <Wrapper
                            key={item.label}
                            {...props}
                            className="group flex flex-col items-center text-center p-6 rounded-xl bg-surface-card border border-border hover:border-border-light transition-colors"
                        >
                            <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            <p className="text-xs text-text-muted uppercase tracking-wider font-medium mb-1">
                                {item.label}
                            </p>
                            <p className="text-sm font-medium text-text-primary break-all">
                                {item.value}
                            </p>
                        </Wrapper>
                    )
                })}
            </div>
        </SectionWrapper>
    )
}
