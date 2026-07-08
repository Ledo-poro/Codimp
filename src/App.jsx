import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Developers from './components/Developers'
import Contact from './components/Contact'
import useRevealOnScroll from './hooks/useRevealOnScroll'

function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  useRevealOnScroll({ selector: '[data-reveal]' })

  return (
    <div className={`app-shell ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Developers />
        <Contact />
      </main>
    </div>
  )
}

export default App
