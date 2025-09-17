export default function SkillsSection ({ skills }) {
  const skillsList = skills.map((skill) => (
    <li key={skill.id}>{skill.name}</li>
  ))
  return (
    <section className='skills-section'>
      <h2>Skills</h2>
      <div className='skills-container'>
        <ul className='skills-types'>
          <li>All</li>
          <li>frontend</li>
          <li>backend</li>
          <li>lenguajes</li>
          <li>bases de datos</li>
          <li>herramientas</li>
        </ul>
        <ul className='skills-list'>
          {skillsList}
        </ul>
      </div>
    </section>
  )
}
