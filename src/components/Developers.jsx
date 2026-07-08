const team = [
  { name: 'Waleed', role: 'FullStack Developer' },
  { name: 'Samuel', role: 'Frontend Developer' },
  { name: 'Shadow', role: 'Frontend Developer' },
  { name: 'Thái Dũng', role: 'UI Designer' }
]


function Developers() {
  return (
    <section className="section-card" id="team" data-reveal>
      <h2 data-reveal>Meet the Team</h2>
      <p className="section-intro" data-reveal>
        Small, focused, and deeply collaborative — built to ship standout work.
      </p>
      <div className="team-list">
        {team.map((member) => (
          <div className="team-item" data-reveal key={member.name}>
            <strong>{member.name}</strong>
            <span>{member.role}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Developers

