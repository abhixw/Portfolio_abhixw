import useReveal from '../hooks/useReveal'

export default function SectionWrapper({ id, children, className = '', alt = false }) {
    const [ref, visible] = useReveal(0.1)

    return (
        <section
            id={id}
            ref={ref}
            className={`py-20 md:py-28 px-6 ${alt ? 'bg-surface-alt' : 'bg-surface'} ${visible ? 'reveal-visible' : 'reveal-hidden'} ${className}`}
        >
            <div className="max-w-6xl mx-auto">{children}</div>
        </section>
    )
}

export function SectionTitle({ title, subtitle, accent = 'primary' }) {
    const accentColors = {
        primary: 'bg-primary',
        green: 'bg-accent-green',
        orange: 'bg-accent-orange',
    }

    return (
        <div className="mb-14">
            <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-1 rounded-full ${accentColors[accent]}`} />
                <h2 className="text-3xl md:text-4xl font-bold text-primary">{title}</h2>
            </div>
            {subtitle && (
                <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    )
}
