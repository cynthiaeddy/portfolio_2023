import { Link } from 'react-router-dom'
import data from '../../data'
import './Projects.css'

const Projects = () => {
  const card = data.map((project, idx) => (
    <Link to={`/projects/${project.title}`} className='link' key={idx}>
      <img
        src={project.img}
        alt={project.title}
        className={`project-card`}
      />
    </Link>
  ))

  return <section className='projectsContainer projects'>{card}in projects</section>
}
export default Projects
