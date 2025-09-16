import locationPin from '../icons/location-pin.svg'
export default function Footer () {
  return (
    <footer>
      <div className='info-and-links'>
        <div className='info'>
          <p>Francisco Javier Torres Franco</p>
          <p>
            Desarrollador Fullstack, apasionado por la tecnología y el desarrollo de software.
            Disponible para trabajo de tiempo completo.
          </p>
          <a href='mailto:javiertf2000@gmail.com'>javiertf2000@gmail.com</a>
          <p>
            <img src={locationPin} alt='Location' />
            Lugo, Galicia, España
          </p>
        </div>
        <div className='quick-links'>
          <h3>Quick Links</h3>
          <ul>
            <li>Sobre mí</li>
            <li>Skills</li>
            <li>Projectos</li>
            <li>Contacto</li>
          </ul>
        </div>
      </div>
      <div className='featured-projects'>
        <h3>Featured Projects</h3>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </div>
      <hr />
      <div>
        <p>Copyright © {new Date().getFullYear()} Francisco Javier Torres Franco</p>
        <ul>
          <li>fullstack developer</li>
          <li>Disponible para trabajar</li>
        </ul>
      </div>
    </footer>
  )
}
