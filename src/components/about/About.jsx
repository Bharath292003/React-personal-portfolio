import React from 'react'
import './about.css'
import ME from '../../assets/pic-3.jpeg'
import {FaAward} from 'react-icons/fa'
import {FaUserGraduate} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>EXPERIENCE</h5>
              <small>4 Months </small>
            </article>

            <article className="about__card">
              <FaUserGraduate className='about__icon'/>
              <h5>EDUCATION</h5>
              <small>sathyabama university</small><br />
              <small>BE-computer science</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>PROJECTS</h5>
              <small>5+ Completed </small>
            </article>
          </div>

          <p>
           Myself G. Balaji Bharath, I am currently in my final year of clg, pursuing a Bachelor's degree in Computer Science Engineering. With a strong focus on frontend development, I have gained proficiency in various technologies and frameworks. I enjoy taking up new challenges and find great satisfaction in solving complex problems. As a team player, I believe in the power of collaboration and leverage diverse perspectives to achieve exceptional results.I am currently open to new opportunities and excited to contribute my skills to innovative projects.
          </p>

          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About