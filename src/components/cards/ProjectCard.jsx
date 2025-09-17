export default function ProjectCard ({ project }) {
  const keyFeaturesList = project.keyFeatures.map((feature) => (
    <li key={feature}>{feature}</li>
  ))
  const technologiesList = project.technologies.map((technology) => (
    <li key={technology}>{technology}</li>
  ))
  return (
    <div className='project-card'>
      <div className='project-card-header'>
        <img src={project.image} alt={project.type} />
        <a href={project.link} target='_blank' rel='noopener noreferrer'>Ver proyecto</a>
        <a href={project.github} target='_blank' rel='noopener noreferrer'>Ver en GitHub</a>
      </div>
      <div className='project-card-body'>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className='project-key-features'>
          {keyFeaturesList}
        </ul>
        <ul className='project-technologies'>
          {technologiesList}
        </ul>

      </div>

    </div>
  )
}
