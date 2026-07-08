import '../styles/Navbar.css'

function Navbar({ theme, toggleTheme }) {
  return (
    <header className="topbar">
      <a href="#home" className="brand">
        <img src="/./Codimp logo.png" className="brand-mark" />
        <span>Codimp</span>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <button className="theme-btn" onClick={toggleTheme} type="button">
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>
    </header>
  )
}

export default Navbar
