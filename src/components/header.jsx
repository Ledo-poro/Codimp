import { Link, NavLink } from 'react-router-dom'
import { useMemo } from 'react'

export default function Header({ theme, setTheme }) {
  const links = useMemo(
    () => [
      { to: '/', label: 'Home' },
      { to: '/work', label: 'Work' },
      { to: '/contact', label: 'Contact' },
    ],
    []
  )

  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <div className="brand">
          <img src="src\assets\Codimp logo.png" className='brandIcon' alt="" />
          <span className="brandText">Codimp</span>
        </div>

        <nav className="nav">
          <ul className="navList">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) => (isActive ? 'navLink active' : 'navLink')}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="headerActions">
          <button
            className="themeBtn"
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            <span className="themeBtnIcon" aria-hidden="true">
              {theme === 'dark' ? '🌙' : '☀️'}
            </span>
            <span className="themeBtnText">{theme === 'dark' ? 'Dark' : 'Light'}</span>
          </button>
          <Link className="btn btnPrimary btnSmall" to="/contact">
            Get started
          </Link>
        </div>
      </div>
    </header>
  )
}


