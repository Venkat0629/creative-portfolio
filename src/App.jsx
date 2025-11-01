import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Resume from './Resume'

function App() {
  const [theme, setTheme] = useState('light')
  const [menuOpen, setMenuOpen] = useState(false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || saved === 'light') setTheme(saved)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    fetch('/portfolio.json')
      .then((r) => {
        if (!r.ok) throw new Error('Failed to load portfolio data')
        return r.json()
      })
      .then((json) => {
        setData(json)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error loading portfolio data:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  const toggleMenu = () => setMenuOpen((prev) => !prev)

  if (error) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Error Loading Portfolio</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    )
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar
              theme={theme}
              toggleTheme={toggleTheme}
              menuOpen={menuOpen}
              toggleMenu={toggleMenu}
              profileName={data?.profile?.name}
            />
            <main>
              <Hero
                loading={loading}
                profile={data?.profile}
                links={data?.links}
              />
              <About about={data?.about} />
              <Skills skills={data?.skills} />
              <Projects projects={data?.projects} />
              <Experience experience={data?.experience} />
              <Certifications
                accomplishments={data?.accomplishments}
                certifications={data?.certifications}
              />
              <Education
                education={data?.education}
                educationItems={data?.educationItems}
              />
              <Contact email={data?.links?.email} />
            </main>
            <Footer name={data?.profile?.name} />
          </>
        } />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  )
}

export default App

// Moved EducationItem to Education.jsx for better organization