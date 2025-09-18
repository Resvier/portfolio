import Header from './components/Header'
import Footer from './components/Footer'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'
import HomeSection from './components/sections/HomeSection'

export default function App () {
  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <br id='about' />
        <AboutSection />
        <br id='skills' />
        <SkillsSection />
        <br id='projects' />
        <ProjectsSection />
        <br id='contact' />
        <ContactSection />

      </main>
      <Footer />
    </>
  )
}
