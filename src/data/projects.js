import apiSearch from '../media/icons/api-search.svg'
import question from '../media/icons/question.svg'

export const projects = [
  {
    id: 1,
    icon: apiSearch,
    name: 'Rick and Morty web',
    description: 'Web que sirve para buscar personajes, episodios y ubicaciones de la serie de Rick y Morty.',
    link: '',
    type: 'frontend',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    keyFeatures: ['Diseño responsivo', 'Elementos interactivos', 'Contenido dinámico', 'API de Rick y Morty'],
    github: 'https://github.com/Resvier/Rick_and_Morty_web',
    gradient: 'linear-gradient(to right bottom, #a6ffb1,rgb(186, 233, 20), #0b5b00)'
  },
  {
    id: 2,
    icon: question,
    name: 'Proyecto en desarrollo . . .',
    description: 'Proyecto que sera desarrollado proximamente.',
    link: '',
    type: 'frontend',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    keyFeatures: ['Proximamente...', 'Proximamente...', 'Proximamente...'],
    github: '',
    gradient: 'linear-gradient(to right bottom,rgb(95, 135, 234),rgb(115, 41, 189), #130e8f)'
  }

]
