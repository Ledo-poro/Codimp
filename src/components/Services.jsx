const services = [
  {
    title: 'Brand-led Web Design',
    description: 'Crafting expressive visual systems that turn first impressions into lasting trust.'
  },
  {
    title: 'React & Vite Development',
    description: 'Building responsive and high-performing frontends with clean architectural patterns.'
  },
  {
    title: 'Launch & Growth Support',
    description: 'Providing ongoing improvements, performance tuning, and product refinement.'
  }
]


function Services() {
  return (
    <section className="section-card" id="services" data-reveal>
      <h2 data-reveal>Services</h2>
      <p className="section-intro" data-reveal>
        Focused support for teams that want a premium digital presence without friction.
      </p>
      <div className="grid-3">
        {services.map((service) => (
          <article className="card" data-reveal key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services

