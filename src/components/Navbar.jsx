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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-surface/95 backdrop-blur-md border-b border-border'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Name / Logo */}
                <a
                    href="#hero"
                    className="text-lg font-bold text-primary tracking-tight hover:text-primary-light transition-colors"
                >
                    <span className="text-accent-orange">&lt;./&gt;</span>{' '}
                    Abhinav Shrimali
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <ThemeToggle />
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2 text-text-muted hover:text-primary"
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

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden bg-surface-card border-t border-border px-6 pb-6 pt-2 space-y-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="block text-sm font-medium text-text-muted hover:text-primary py-2"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="flex justify-center pt-2">
                        <ThemeToggle />
                    </div>
                </div>
            )}
        </nav>
    )
}
