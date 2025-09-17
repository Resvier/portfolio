import locationPin from '../icons/location-pin.svg'
import mail from '../icons/mail.svg'
import { info } from '../data/info'
export default function Footer () {
  return (
    <footer>
      <div className='ft-info-and-links'>
        <div className='ft-info'>
          <h3>Francisco Javier Torres Franco</h3>
          <p>
            Desarrollador apasionado por la
            tecnología y el software.
            Disponible para trabajo de tiempo completo
            o tiempo parcial.
          </p>
          <div className='ft-email-and-location'>
            <div className='ft-email'>
              <a href={`mailto:${info.email}`}>
                <img src={mail} alt='Email' />
                <span>{info.email}</span>
              </a>
            </div>
            <div className='ft-location'>
              <img src={locationPin} alt='Location' />
              {info.location}
            </div>
          </div>
        </div>
        <div className='ft-quick-links'>
          <h4>Quick Links</h4>
          <ul>
            <li>Sobre mí</li>
            <li>Skills</li>
            <li>Projectos</li>
            <li>Contacto</li>
          </ul>
        </div>
        <div className='ft-featured-projects'>
          <h4>Featured Projects</h4>
          <ul>
            <li>En desarrollo...</li>
            <li>En desarrollo..</li>
            <li>En desarrollo..</li>
          </ul>
          <a href={info.github}>ver todos los proyectos</a>
        </div>
      </div>
      <hr />
      <div className='ft-copyright'>
        <p>Copyright © {new Date().getFullYear()} Francisco Javier Torres Franco</p>
        <ul>
          <li>fullstack developer</li>
          <hr />
          <li>Disponible para trabajar</li>
        </ul>
      </div>
    </footer>
  )
}
