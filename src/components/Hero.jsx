function Hero() {
  return (
<section className="hero" id="home" data-reveal>
      <div>
        <span className="badge" data-reveal>Modern digital studio</span>
        <h1 data-reveal>We build refined web experiences for ambitious brands.</h1>
        <p data-reveal>
          Codimp blends design, and engineering to shape fast, premium websites that feel as impressive as they perform.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">Explore work</a>
          <a href="#contact" className="btn-secondary">Start a project</a>
        </div>
      </div>

      <div className="hero-panel">
        <ul>
          <li>✨ Luxury-inspired UI systems</li>
          <li>⚡ Lightning-fast frontends</li>
          <li>🛠️ End-to-end product support</li>
          <li>📈 Growth-ready digital launches</li>
        </ul>
      </div>
    </section>
  )
}

export default Hero
