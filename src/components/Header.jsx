import Navbar from './Navbar'

export default function Header () {
  return (
    <header>
      <div className='logo'>
        <span>{'<JT/>'}</span>
      </div>
      <Navbar />
      <div className='social-links'>
        <a target='_blank' rel='noopener noreferrer' href='https://github.com/Resvier'>GitHub</a>
        <a target='_blank' rel='noopener noreferrer' href='mailto:javiertf2000@gmail.com'>Email</a>

      </div>
    </header>
  )
}
