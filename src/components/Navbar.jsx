import { useEffect, useState } from 'react'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const sections = ['profile', 'capabilities', 'work', 'record', 'contact', 'hero']

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  // Close menu on scroll
  useEffect(() => {
    const onScroll = () => setMenuOpen(false)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#profile', label: '§01 Profile', id: 'profile' },
    { href: '#capabilities', label: '§02 Capabilities', id: 'capabilities' },
    { href: '#work', label: '§03 Field Work', id: 'work' },
    { href: '#record', label: '§04 Service Record', id: 'record' },
    { href: '#contact', label: '§05 Contact', id: 'contact' },
  ]

  return (
    <>
      <nav>
        <a className="brand" href="#top">
          <b></b>ABS
        </a>

        {/* Desktop links */}
        <div className="links">
          {navLinks.map(({ href, label, id }) => (
            <a
              key={id}
              href={href}
              style={activeSection === id ? { color: 'var(--acid)' } : {}}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <div className="status">
            <span className="dot"></span>Active · 2026
          </div>
          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-drawer${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        {navLinks.map(({ href, label, id }) => (
          <a
            key={id}
            href={href}
            className={activeSection === id ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="drawer-resume">
          Résumé ↗
        </a>
      </div>
    </>
  )
}
