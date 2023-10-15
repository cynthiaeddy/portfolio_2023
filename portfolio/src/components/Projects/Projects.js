import { Link } from 'react-router-dom'
import data from '../../data'
import './Projects.css'

const Projects = () => {
  const card = data.map((project, idx) => (
    <Link to={`/projects/${project.title}`} className='link' key={idx}>
      <img
        src={project.img}
        alt={project.title}
        className={`project-card ${project.title}`}
      />
    </Link>
  ))

  return <section className='projectsContainer'>{card}in projects</section>
}
export default Projects
