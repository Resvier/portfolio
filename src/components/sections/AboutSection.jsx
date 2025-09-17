import { info } from '../../data/info'
import download from '../../media/icons/download.svg'
import photo from '../../media/images/foto.png'
export default function AboutSection () {
  return (
    <section id='about' className='about-section'>
      <h2>Sobre mi</h2>
      <div className='about-container'>
        <div className='about-container-img'>
          <img src={photo} alt='Foto de perfil' />
        </div>
        <p>Soy un estudiante de informática de ultimo año, apasionado por
          el desarrollo de software, me gusta aprender constantemente,
          trabajar en equipo y resolver problemas de manera eficiente.
        </p>
      </div>
      <div className='about-container-download'>
        <a download href={info.cv}>
          <img src={download} alt='Descargar CV' />
          Descargar CV
        </a>
      </div>

    </section>
  )
}
