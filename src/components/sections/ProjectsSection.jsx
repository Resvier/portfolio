import ProjectCard from '../cards/ProjectCard'
import github from '../../media/icons/github.svg'
import { projects } from '../../data/projects'
import { info } from '../../data/info'

export default function ProjectsSection () {
  const projectsList = projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ))
  return (
    <section className='projects-section'>
      <h2>Proyectos</h2>
      <div className='projects-container'>
        {projectsList}
      </div>
      <div className='projects-section-github'>
        <a href={info.github}>
          <img src={github} alt='GitHub' />
          <span>Ver más en GitHub</span>
        </a>
      </div>
    </section>
  )
}
