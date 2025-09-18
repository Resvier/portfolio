import { useState } from 'react'
import Navbar from './Navbar'
import mail from '../media/icons/mail.svg'
import github from '../media/icons/github.svg'
import linkedin from '../media/icons/linked-in.svg'
import bars from '../media/icons/bars.svg'
import { info } from '../data/info'

export default function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(prev => !prev)

  return (
    <>
      <header>
        <div className='header-container'>
          <div className='logo'>
            <span>{'<JavierTorresDev/>'}</span>
          </div>

          <button className='menu-toggle' aria-label='Abrir menú' onClick={toggleMenu}>
            <img src={bars} alt='Abrir menú' />
          </button>

          <Navbar />

          <div className='social-links'>
            <a target='_blank' rel='noopener noreferrer' href={info.github}>
              <img src={github} alt='GitHub' />
              <span>GitHub</span>
            </a>
            <a target='_blank' rel='noopener noreferrer' href={`mailto:${info.email}`}>
              <img src={mail} alt='Email' />
              <span>Email</span>
            </a>
            <a target='_blank' rel='noopener noreferrer' href={info.linkedin}>
              <img src={linkedin} alt='LinkedIn' />
              <span className='social-links-linkedin'>LinkedIn</span>
            </a>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className='mobile-menu'>
          <Navbar />
          <div className='mobile-social-links'>
            <a target='_blank' rel='noopener noreferrer' href={info.github}>
              <img src={github} alt='GitHub' />
              <span>GitHub</span>
            </a>
            <a target='_blank' rel='noopener noreferrer' href={`mailto:${info.email}`}>
              <img src={mail} alt='Email' />
              <span>Email</span>
            </a>
            <a target='_blank' rel='noopener noreferrer' href={info.linkedin}>
              <img src={linkedin} alt='LinkedIn' />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </>
  )
}
