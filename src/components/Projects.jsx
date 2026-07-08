const projects = [
  {
    title: 'Luxury Portfolio',
    category: 'Identity & Launch'
  },
  {
    title: 'SaaS Growth Site',
    category: 'Conversion Design'
  },
  {
    title: 'Creative Studio Hub',
    category: 'Experience System'
  }
]


function Projects() {
  return (
    <section className="section-card" id="projects" data-reveal>
      <h2 data-reveal>Selected Projects</h2>
      <p className="section-intro" data-reveal>
        A snapshot of the polished work we create for modern teams.
      </p>
      <div className="grid-3">
        {projects.map((project) => (
          <article className="card project-card" data-reveal key={project.title}>
            <span className="badge">{project.category}</span>
            <h3>{project.title}</h3>
            <p>Premium storytelling, sharp UI, and smooth UX designed to impress every visitor.</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects

