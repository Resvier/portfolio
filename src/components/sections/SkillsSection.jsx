import { skills } from '../../data/skills'
import SkillCard from '../cards/SkillCard'

export default function SkillsSection () {
  const skillsList = skills.map((skill) => (
    <SkillCard key={skill.id} skill={skill} />
  ))
  return (
    <section className='skills-section'>
      <h2>- Habilidades</h2>
      <div className='skills-container'>
        <ul className='skills-types'>
          <li><button>All</button></li>
          <li><button>frontend</button></li>
          <li><button>backend</button></li>
          <li><button>lenguajes</button></li>
          <li><button>bases de datos</button></li>
          <li><button>herramientas</button></li>
        </ul>
        <ul className='skills-list'>
          {skillsList}
        </ul>
      </div>
    </section>
  )
}
