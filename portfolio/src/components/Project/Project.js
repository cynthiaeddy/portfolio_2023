import React from 'react'
import { useParams } from 'react-router-dom'
import projectData from '../ProjectsContainer/projectData'
import '../ProjectsContainer/ProjectsContainer.css'
import './Project.css'

const Project = () => {
  const { title } = useParams()
  console.log('in project card')

  return (
    <>
      <section className='projectsContainer project'>
        <div className='card-backdrop'>
          {projectData
            .filter((project) => project.title === title)
            .map((proj, idx) => {
              return (
                <div className='inner-card' key={idx}>
                  <a href={proj.link}>
                    <img
                      src={proj.img}
                      className={`project-card`}
                      alt={proj.copy[0]}
                    />
                  </a>
                  <h3>
                    <strong>{proj.copy[0]}</strong>
                    {proj.copy[1]}
                    <ul className='project-card-ul'>
                      {proj.copy[2].map((lines, idx) => {
                        return <li key={idx}>{lines}</li>
                      })}
                    </ul>
                  </h3>
                  <div className='icons'>
                    {proj.link ? (
                      <a href={proj.link}>
                        <i className='fas fa-play-circle fa-2x' />
                      </a>
                    ) : null}
                    <a href={proj.frontendLink}>
                      <i className='fab fa-github fa-2x' />
                    </a>
                    {proj.backendLink ? (
                      <a href={proj.backendLink}>
                        <i className='fab fa-github fa-2x' />
                      </a>
                    ) : null}
                  </div>
                </div>
              )
            })}
        </div>
      </section>
    </>
  )
}

export default Project
