import { useState, useEffect } from 'react'

const roles = ['AI Engineer', 'GenAI Developer', 'Backend Developer']
const greeting = 'Hi, I am'
const name = 'Abhinav Shrimali'

function TypewriterText({ text, startDelay = 0, className = '' }) {
    const [visibleCount, setVisibleCount] = useState(0)

    useEffect(() => {
        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                setVisibleCount((prev) => {
                    if (prev >= text.length) {
                        clearInterval(interval)
                        return prev
                    }
                    return prev + 1
                })
            }, 70)
            return () => clearInterval(interval)
        }, startDelay)
        return () => clearTimeout(timeout)
    }, [text, startDelay])

    return (
        <span className={className}>
            {text.split('').map((char, i) => (
                <span
                    key={i}
                    style={{
                        opacity: i < visibleCount ? 1 : 0,
                        transition: 'opacity 0.15s ease',
                    }}
                >
                    {char}
                </span>
            ))}
        </span>
    )
}

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0)
    const [fade, setFade] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false)
            setTimeout(() => {
                setRoleIndex((prev) => (prev + 1) % roles.length)
                setFade(true)
            }, 400)
        }, 2500)
        return () => clearInterval(interval)
    }, [])

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center px-6 bg-surface relative overflow-hidden"
        >
            {/* Subtle glow accents */}
            <div className="absolute top-32 right-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-32 left-16 w-56 h-56 bg-accent-green/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-16 pt-20 relative z-10">
                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-green/10 text-accent-green text-sm font-medium mb-6 border border-accent-green/20 hero-fade-up">
                        <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                        Available for opportunities
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 hero-fade-up-delay-1">
                        <TypewriterText
                            text={greeting}
                            startDelay={300}
                            className="text-text-secondary text-2xl sm:text-3xl md:text-4xl font-semibold block mb-2"
                        />
                        <TypewriterText
                            text={name}
                            startDelay={1000}
                            className="text-primary"
                        />
                    </h1>

                    <div className="h-8 md:h-10 flex items-center justify-center md:justify-start mb-3 hero-fade-up-delay-2 overflow-hidden">
                        <p
                            className="text-lg md:text-xl font-semibold text-accent-orange transition-all duration-400"
                            style={{
                                opacity: fade ? 1 : 0,
                                transform: fade ? 'translateY(0)' : 'translateY(12px)',
                                transition: 'opacity 0.4s ease, transform 0.4s ease',
                            }}
                        >
                            {roles[roleIndex]}
                        </p>
                    </div>

                    <p className="text-base text-text-muted max-w-lg mb-8 leading-relaxed mx-auto md:mx-0 hero-fade-up-delay-2">
                        Building intelligent, scalable AI systems using LLMs, RAG
                        architectures, and structured backend engineering.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start hero-fade-up-delay-3">
                        <a
                            href="#projects"
                            className="px-7 py-3 rounded-lg bg-accent-orange text-white font-semibold hover:bg-accent-orange-light transition-colors"
                        >
                            View Projects
                        </a>
                        <a
                            href="#get-in-touch"
                            className="px-7 py-3 rounded-lg border border-border-light text-text-primary font-semibold hover:border-primary hover:text-primary transition-colors"
                        >
                            Get in Touch
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 mt-10 justify-center md:justify-start hero-fade-up-delay-4">
                        <a
                            href="mailto:abhinavshrimali03@gmail.com"
                            className="w-11 h-11 rounded-full bg-surface-card border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all duration-300"
                            aria-label="Email"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/abhinav-shrimali-ab63672a1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 rounded-full bg-surface-card border border-border flex items-center justify-center text-text-muted hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a
                            href="https://github.com/abhixw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 rounded-full bg-surface-card border border-border flex items-center justify-center text-text-muted hover:text-text-primary hover:border-text-primary transition-all duration-300"
                            aria-label="GitHub"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Circular Image */}
                <div className="flex-shrink-0 hero-slide-right animate-[float_1.2s_ease-in-out_infinite]">
                    <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-border-light bg-surface-card flex items-center justify-center relative overflow-hidden">
                        <img
                            src="/abhinav.jpg"
                            alt="Abhinav Shrimali"
                            className="w-full h-full rounded-full object-cover"
                        />
                        <div className="absolute inset-[-8px] rounded-full border border-dashed border-border animate-[spin_12s_linear_infinite]" />
                    </div>
                </div>
            </div>
        </section>
    )
}
