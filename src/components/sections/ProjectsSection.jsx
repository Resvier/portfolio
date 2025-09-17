import ProjectCard from '../cards/ProjectCard'
import github from '../../icons/github.svg'
import { projects } from '../../data/projects'
import { info } from '../../data/info'

export default function ProjectsSection () {
  const projectsList = projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ))
  return (
    <section className='projects-section'>
      <h2>Projects</h2>
      <div className='projects-container'>
        {projectsList}
      </div>
      <a href={info.github}>
        <img src={github} alt='GitHub' />
        Ver más en GitHub
      </a>
    </section>
  )
}
