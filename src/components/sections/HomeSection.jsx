export default function HomeSection () {
  return (
    <section id='home' className='home-section'>
      <div className='home-container'>
        <div className='home-content'>
          <span>Hola, soy</span>
          <span className='home-name'>Francisco Javier Torres Franco</span>
          <span>Desarrollador</span>
        </div>
        <div className='home-links'>
          <a href='#projects' className='home-links-projects'><span>Ver Proyectos</span></a>
          <a href='#contact' className='home-links-contact'><span>Contactame</span></a>
        </div>
      </div>
    </section>
  )
}
