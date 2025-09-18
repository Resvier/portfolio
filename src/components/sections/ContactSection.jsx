import { info } from '../../data/info'
import linkedin from '../../media/icons/linked-in.svg'

export default function ContactSection () {
  return (
    <section className='contact-section'>
      <h2>Estamos en contacto</h2>
      <div className='contact-container'>
        <div className='contact-container-text'>
          <p>
            Estoy abierto a nuevas oportunidades y proyectos, tanto
            a tiempo completo como a tiempo parcial.
            Si tienes alguna pregunta o te interesa mi trabajo,
            no dudes en contactarme. Incluso si solo
            es para tener una conversación!
          </p>
        </div>
        <div className='contact-container-linkedin'>
          <div className='contact-container-linkedin'>
            <a href={info.linkedin}>
              <img src={linkedin} alt='LinkedIn' />
              <span>Encuentrame en LinkedIn</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
