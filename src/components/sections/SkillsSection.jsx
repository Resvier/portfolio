import { skills } from '../../data/skills'
import SkillCard from '../cards/SkillCard'
import { useState } from 'react'

export default function SkillsSection () {
  const [selectedType, setSelectedType] = useState('all')

  const filters = [
    { label: 'Todas', key: 'all' },
    { label: 'Frontend', key: 'frontend' },
    { label: 'Backend', key: 'backend' },
    { label: 'Lenguajes', key: 'language' },
    { label: 'Bases de datos', key: 'database' },
    { label: 'Herramientas', key: 'tools' }
  ]

  const filteredSkills = skills.filter((skill) => {
    const types = Array.isArray(skill.type) ? skill.type : [skill.type]
    const matchesType = selectedType === 'all' ? true : types.includes(selectedType)

    if (selectedType === 'all') {
      if (skill.name.toLowerCase() === 'proximamente') return false
    }

    return matchesType
  })

  const skillsList = filteredSkills.map((skill) => (
    <SkillCard key={skill.id} skill={skill} />
  ))

  return (
    <section className='skills-section'>
      <h2>Habilidades</h2>
      <div className='skills-container'>
        <ul className='skills-types'>
          {filters.map(({ label, key }) => (
            <li key={key}>
              <button
                onClick={() => setSelectedType(key)}
                className={selectedType === key ? 'active' : ''}
                aria-pressed={selectedType === key}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <ul className='skills-list'>
          {skillsList}
        </ul>
      </div>
    </section>
  )
}
