import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Profiles', href: '#profiles' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Achievements', href: '#achievements' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-2xl border border-primary/20 bg-primary/10 dark:bg-primary/15 backdrop-blur-xl shadow-2xl shadow-primary/10 transition-all duration-500 hover:scale-[1.01] hover:bg-primary/20"
        >
            <div className="mx-auto px-6 py-3 flex items-center justify-between">
                {/* Name / Logo */}
                <a
                    href="#hero"
                    className="text-lg font-bold text-primary tracking-tight hover:text-primary-light transition-colors"
                >
                    <span className="text-accent-orange">&lt;./&gt;</span>{' '}
                    Abhinav Shrimali
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="px-4 py-2 text-xs font-bold text-text-muted hover:text-primary transition-all duration-300 hover:bg-primary/5 rounded-lg"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="ml-2 pl-4 border-l border-border/50">
                        <ThemeToggle />
                    </div>
                </div>

                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2 text-text-muted hover:text-primary z-50 transition-colors"
                    aria-label="Toggle menu"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        {mobileOpen ? (
                            <>
                                <line x1="6" y1="6" x2="18" y2="18" />
                                <line x1="6" y1="18" x2="18" y2="6" />
                            </>
                        ) : (
                            <>
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu overlay */}
            <div
                className={`fixed inset-0 z-40 md:hidden bg-surface/98 backdrop-blur-xl transition-all duration-500 ease-in-out ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className={`text-2xl font-bold text-text-primary hover:text-primary transition-all duration-300 transform ${mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div
                        className={`pt-8 transition-all duration-500 transform ${mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                        style={{ transitionDelay: `${navLinks.length * 100}ms` }}
                    >
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    )
}
