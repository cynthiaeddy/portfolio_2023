import { Link } from 'react-router-dom'
import data from './projectData'
import './ProjectsContainer.css'

const ProjectsContainer = () => {
  const card = data.map((project, idx) => (
    <Link to={`/projects/${project.title}`} className='link' key={idx}>
      <img
        src={project.img}
        alt={project.title}
        className={`project-card ${project.title}` }
      />
    </Link>
  ))

  return <section className='projectsContainer projects'>{card}</section>
}
export default ProjectsContainer
