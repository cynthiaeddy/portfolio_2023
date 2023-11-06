/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import linkedin2 from '../../assets/linkedin2.jpg'
import cynthiaeddy_resume from '../../assets/cynthia_eddy_resume.pdf'
import '../ProjectsContainer/ProjectsContainer.css'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <section className='projectsContainer about_me'>
      <div className='about-me-container'>
        <img src={linkedin2} className='my-photo' alt='' />
        <h3 className='about-me'>
          I've always had a penchant for creativity. My life has been a
          continual exploration of mediums ranging from textiles and
          metalsmithing to designing for editorial publications, both print and
          digital. The common thread throughout these mediums is the fascination
          of making the abstract tangible. <br /> <br />
          As a Software Developer, my focus is on exploring this medium of
          computer programming - applying my creative and technical
          problem-solving skills, as well as my tenacious spirit. Because of my
          previous work environment, I'm adept at prioritizing key deliverables
          under tight deadlines and collaborating effectively across
          departments.
        </h3>
        <footer className='my-info'>
          <a href={cynthiaeddy_resume}>
            <h5>view my resume | </h5>
          </a>
          <a href={cynthiaeddy_resume} download>
            <h5> download my resume | </h5>
          </a>
          <a href='http://www.cynthiaeddy.me'>
            <h5>view my print and digital portfolio </h5>
          </a>
        </footer>
      </div>
    </section>
  )
}

export default AboutMe
