import locationPin from '../media/icons/location-pin.svg'
import mail from '../media/icons/mail.svg'
import phone from '../media/icons/phone.svg'
import externalLink from '../media/icons/external.svg'
import { info } from '../data/info'
export default function Footer () {
  return (
    <footer>
      <div className='ft-info-and-links'>
        <div className='ft-info'>
          <h3>
            <span className='name-part-1'>Francisco Javier</span>
            <span className='name-part-2'>Torres Franco</span>
          </h3>
          <p>
            Desarrollador apasionado por la
            tecnología y el software.
            Disponible para trabajo de tiempo completo
            o tiempo parcial.
          </p>
          <div className='ft-contact-info'>
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
            <div className='ft-phone'>
              <img src={phone} alt='Phone' />
              <span>{info.phone}</span>
            </div>
          </div>
        </div>
        <div className='ft-quick-links'>
          <h4>Quick Links</h4>
          <ul>
            <li><a href='#about'>Sobre mí</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#projects'>Projectos</a></li>
            <li><a href='#contact'>Contacto</a></li>
          </ul>
        </div>
        <div className='ft-featured-projects'>
          <h4>Featured Projects</h4>
          <ul>
            <li>En desarrollo...</li>
            <li>En desarrollo..</li>
            <li>En desarrollo..</li>
          </ul>
          <a href={info.github}>
            Ver todos los proyectos
            <img src={externalLink} alt='External Link' />
          </a>
        </div>
      </div>
      <hr />
      <div className='ft-copyright'>
        <p>© {new Date().getFullYear()} Francisco Javier Torres Franco</p>
        <ul>
          <li>Fullstack developer</li>
          <span>-</span>
          <li>Disponible para trabajar</li>
        </ul>
      </div>
    </footer>
  )
}
