import download from '../../media/icons/download.svg'
import photo from '../../media/images/foto.png'
import CV_URL from '../../media/CV_Francisco_Javier_Torres_Franco.pdf'
export default function AboutSection () {
  return (
    <section className='about-section'>
      <h2>Sobre mi</h2>
      <div className='about-container'>
        <div className='about-container-img'>
          <img src={photo} alt='Foto de perfil' />
        </div>
        <p>Soy un estudiante de informática, apasionado por
          el desarrollo de software, me gusta aprender constantemente,
          trabajar en equipo y resolver problemas de manera eficiente.
        </p>
      </div>
      <div className='about-container-download'>
        <a download href={CV_URL}>
          <img src={download} alt='Descargar CV' />
          Descargar CV
        </a>
      </div>

    </section>
  )
}
