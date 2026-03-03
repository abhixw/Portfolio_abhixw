import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Profiles from './components/Profiles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundTopology from './components/BackgroundTopology'

function App() {
  return (
    <div className="min-h-screen relative bg-surface">
      <BackgroundTopology />
      <Navbar />
      <Hero />
      <About />
      <Profiles />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
