import ProjectCard from '../cards/ProjectCard'
import github from '../../icons/github.svg'

export default function ProjectsSection ({ projects }) {
  return (
    <section className='projects-section'>
      <h2>Projects</h2>
      <div className='projects-container'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <a href='https://github.com/Resvier'>
        <img src={github} alt='GitHub' />
        Ver más en GitHub
      </a>
    </section>
  )
}
