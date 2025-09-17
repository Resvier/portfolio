import { info } from '../../data/info'
import download from '../../media/icons/download.svg'
export default function AboutSection () {
  return (
    <section id='about' className='about-section'>
      <h2>-Sobre mi</h2>
      <div className='about-container'>
        <p>Soy un estudiante de informática de ultimo año, apasionado por
          el desarrollo de software, me gusta aprender constantemente,
          trabajar en equipo y resolver problemas de manera eficiente.
        </p>
        <a download href={info.cv}>
          <img src={download} alt='Descargar CV' />
          Descargar CV

        </a>
      </div>
    </section>
  )
}
