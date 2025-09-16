import Navbar from './Navbar'
import mail from '../icons/mail.svg'
import github from '../icons/github.svg'

export default function Header () {
  return (
    <header>
      <div className='logo'>
        <span>{'<JT/>'}</span>
      </div>
      <Navbar />
      <div className='social-links'>
        <a target='_blank' rel='noopener noreferrer' href='https://github.com/Resvier'>
          <img src={github} alt='GitHub' />
          GitHub
        </a>
        <a target='_blank' rel='noopener noreferrer' href='mailto:javiertf2000@gmail.com'>
          <img src={mail} alt='Email' />
          Email
        </a>

      </div>
    </header>
  )
}
