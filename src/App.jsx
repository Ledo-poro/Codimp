import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import './App.css'
import Header from './components/header'
import Hero from './components/hero'



function HomePage() {
  return (
    <div className="page">
      <Hero />

      <section className="section" id="features">
        <div className="container">
          <div className="sectionHead reveal">
            <p className="eyebrow">What we do</p>
            <h2 className="h2">Design. Development. Growth.</h2>
            <p className="subtext">
              Modern websites that look premium, load fast, and convert visitors into customers.
            </p>
          </div>

          <div className="grid3">
            {[
              {
                title: 'Modern UI',
                desc: 'Clean layouts, tasteful motion, and consistent components.',
                icon: '✨',
              },
              {
                title: 'Performance',
                desc: 'Optimized rendering patterns and responsive design.',
                icon: '⚡',
              },
              {
                title: 'SEO Ready',
                desc: 'Semantic structure with strong accessibility fundamentals.',
                icon: '🔎',
              },
            ].map((c) => (
              <div key={c.title} className="card reveal">
                <div className="cardIcon" aria-hidden="true">
                  {c.icon}
                </div>
                <h3 className="h3">{c.title}</h3>
                <p className="p">{c.desc}</p>
                <div className="cardGlow" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="container">
          <div className="split">
            <div className="reveal">
              <h2 className="h2">Animations that feel premium</h2>
              <p className="subtext">
                Scroll reveal + micro-interactions create depth without slowing the page.
              </p>
              <div className="checkList">
                {[
                  'Smooth motion with reduced-motion support',
                  'GPU-friendly transforms + opacity',
                  'Reusable reveal components',
                ].map((t) => (
                  <div key={t} className="check">
                    <span className="checkMark" aria-hidden="true">
                      ✓
                    </span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>

              <div className="ctaRow">
                <a className="btn btnPrimary" href="#contact">
                  Start a project
                </a>
                <a className="btn btnGhost" href="/work">
                  View work
                </a>
              </div>
            </div>

            <div className="reveal techCard">
              <div className="techTop">
                <span className="dot dotRed" />
                <span className="dot dotYellow" />
                <span className="dot dotGreen" />
                <span className="techTitle">Live preview</span>
              </div>
              <div className="techBody">
                <div className="meter">
                  <div className="meterLabel">UI polish</div>
                  <div className="meterBar">
                    <div className="meterFill" style={{ width: '92%' }} />
                  </div>
                </div>
                <div className="meter">
                  <div className="meterLabel">Speed</div>
                  <div className="meterBar">
                    <div className="meterFill meterFill2" style={{ width: '86%' }} />
                  </div>
                </div>
                <div className="meter">
                  <div className="meterLabel">Conversion</div>
                  <div className="meterBar">
                    <div className="meterFill meterFill3" style={{ width: '78%' }} />
                  </div>
                </div>
                <div className="spark" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="testimonials">
        <div className="container">
          <div className="sectionHead reveal">
            <p className="eyebrow">Proof</p>
            <h2 className="h2">Clients love the experience</h2>
          </div>

          <div className="grid3">
            {[
              {
                quote:
                  'The animations are smooth and the site feels premium. Our leads went up the first week.',
                name: 'Mina R.',
                role: 'Startup founder',
              },
              {
                quote:
                  'Fast, responsive, and exactly on-brand. The layout is clean and modern.',
                name: 'Jordan K.',
                role: 'Marketing lead',
              },
              {
                quote:
                  'Great communication and excellent execution. It looks like a product, not a template.',
                name: 'Sofia T.',
                role: 'Product manager',
              },
            ].map((t) => (
              <figure key={t.name} className="quoteCard reveal">
                <div className="quoteMark" aria-hidden="true">
                  “
                </div>
                <blockquote className="quote">{t.quote}</blockquote>
                <figcaption className="quoteBy">
                  <span className="quoteName">{t.name}</span>
                  <span className="quoteRole">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt" id="contact">
        <div className="container">
          <div className="ctaPanel reveal">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="h2">Let’s build your next website</h2>
              <p className="subtext">Tell us what you’re working on — we’ll reply with a plan.</p>
            </div>
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <label className="field">
                <span className="label">Name</span>
                <input className="input" placeholder="Your name" required />
              </label>
              <label className="field">
                <span className="label">Email</span>
                <input className="input" type="email" placeholder="you@example.com" required />
              </label>
              <label className="field">
                <span className="label">Project</span>
                <textarea className="input textarea" placeholder="What do you need?" required />
              </label>
              <button className="btn btnPrimary" type="submit">
                Send message
              </button>
              <p className="formHint">(Demo form — wire it to your backend later)</p>
            </form>
            <div className="ctaBlobs" aria-hidden="true">
              <span className="blob b1" />
              <span className="blob b2" />
              <span className="blob b3" />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <div className="footerBrand">
            <div className="brandMark" aria-hidden="true" />
            <div>
              <div className="footerTitle">Codimp</div>
              <div className="footerSub">Modern websites with tasteful motion.</div>
            </div>
          </div>
          <div className="footerLinks">
            <a href="#features">Features</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function WorkPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <div className="sectionHead reveal">
            <p className="eyebrow">Work</p>
            <h2 className="h2">Selected projects</h2>
            <p className="subtext">Animated landing pages, e-commerce UI, and brand websites.</p>
          </div>

          <div className="grid3">
            {[
              { name: 'Aurora Landing', tag: 'Landing • Motion', color: 'a' },
              { name: 'Nova Shop', tag: 'E-commerce UI', color: 'b' },
              { name: 'Pulse Studio', tag: 'Brand site', color: 'c' },
              { name: 'Sierra Docs', tag: 'Docs + SEO', color: 'd' },
              { name: 'Lumen Portfolio', tag: 'Personal brand', color: 'e' },
              { name: 'Atlas Landing', tag: 'Conversion page', color: 'f' },
            ].map((p) => (
              <div key={p.name} className={`workCard reveal work-${p.color}`}>
                <div className="workThumb" aria-hidden="true" />
                <div className="workMeta">
                  <div className="workName">{p.name}</div>
                  <div className="workTag">{p.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="page">
      <section className="section sectionAlt">
        <div className="container">
          <div className="ctaPanel reveal">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="h2">Reach out</h2>
              <p className="subtext">This page is separate route (per your request).</p>
            </div>
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <label className="field">
                <span className="label">Name</span>
                <input className="input" placeholder="Your name" required />
              </label>
              <label className="field">
                <span className="label">Email</span>
                <input className="input" type="email" placeholder="you@example.com" required />
              </label>
              <label className="field">
                <span className="label">Message</span>
                <textarea className="input textarea" placeholder="How can we help?" required />
              </label>
              <button className="btn btnPrimary" type="submit">
                Send
              </button>
              <p className="formHint">(Demo form)</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null
    return saved === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    const revealEls = Array.from(document.querySelectorAll('.reveal'))
    if (!revealEls.length || prefersReduced) {
      revealEls.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12 }
    )

    revealEls.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <BrowserRouter>
      <Header theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

