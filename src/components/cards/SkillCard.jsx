export default function SkillCard ({ skill }) {
  return (
    <div className='skill-card'>
      <img src={skill.image} alt={skill.name} />
      <h3>{skill.name}</h3>
    </div>
  )
}
