import Navbar from './Navbar'
import mail from '../icons/mail.svg'
import github from '../icons/github.svg'
import linkedin from '../icons/linked-in.svg'
import { info } from '../data/info'

export default function Header () {
  return (
    <header>
      <div className='logo'>
        <span>{'<JT/>'}</span>
      </div>
      <Navbar />
      <div className='social-links'>
        <a target='_blank' rel='noopener noreferrer' href={info.github}>
          <img src={github} alt='GitHub' />
          GitHub
        </a>
        <a target='_blank' rel='noopener noreferrer' href={`mailto:${info.email}`}>
          <img src={mail} alt='Email' />
          Email
        </a>
        <a target='_blank' rel='noopener noreferrer' href={info.linkedin}>
          <img src={linkedin} alt='LinkedIn' />
          LinkedIn
        </a>

      </div>
    </header>
  )
}
