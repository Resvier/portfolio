import { skills } from '../../data/skills'
import SkillCard from '../cards/SkillCard'

export default function SkillsSection () {
  const skillsList = skills.map((skill) => (
    <SkillCard key={skill.id} skill={skill} />
  ))
  return (
    <section id='skills' className='skills-section'>
      <h2>Habilidades</h2>
      <div className='skills-container'>
        <ul className='skills-types'>
          <li><button>Todas</button></li>
          <li><button>Frontend</button></li>
          <li><button>Backend</button></li>
          <li><button>Lenguajes</button></li>
          <li><button>Bases de datos</button></li>
          <li><button>Herramientas</button></li>
        </ul>
        <ul className='skills-list'>
          {skillsList}
        </ul>
      </div>
    </section>
  )
}
