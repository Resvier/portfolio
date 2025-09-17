import ProjectCard from './ProjectCard'

export default function ProjectsSection ({ projects }) {
  return (
    <section className='projects-section'>
      <h2>Projects</h2>
      <div className='projects-container'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
