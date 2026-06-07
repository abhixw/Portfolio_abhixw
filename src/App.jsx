import { useEffect } from 'react'
import Frame from './components/Frame'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Dispatches from './components/Dispatches'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // 1. Scroll Progress Ruler
    const onScroll = () => {
      const h = document.documentElement
      const scrollHeight = h.scrollHeight - h.clientHeight
      if (scrollHeight > 0) {
        const p = (h.scrollTop / scrollHeight) * 100
        const prog = document.getElementById('prog')
        if (prog) prog.style.width = p + '%'
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    // 2. Scroll reveal Observer for general section elements
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    // Observe elements with reveal class (excluding hero reveals to handle them via staggered animation)
    const revealEls = document.querySelectorAll('.reveal:not(#hero .reveal)')
    revealEls.forEach((el) => io.observe(el))

    // 3. Hero reveal animation staggered on page mount
    const heroReveals = document.querySelectorAll('#hero .reveal')
    heroReveals.forEach((el, i) => {
      setTimeout(() => el.classList.add('in'), 120 + i * 110)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  return (
    <div id="top">
      {/* Scroll progress bar */}
      <div className="progress" aria-hidden="true">
        <i id="prog"></i>
      </div>

      {/* Technical border frame */}
      <Frame />

      {/* Navigation header */}
      <Navbar />

      <main>
        {/* §01 Hero */}
        <Hero />
      </main>

      {/* Loop Ticker */}
      <Ticker />

      <main>
        {/* §02 Profile */}
        <About />

        {/* §03 Capabilities */}
        <Capabilities />

        {/* §04 Field Work */}
        <Projects />
      </main>

      {/* §05 Service Record */}
      <Experience />

      <main>
        {/* §06 Dispatches */}
        <Dispatches />

        {/* §07 Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
