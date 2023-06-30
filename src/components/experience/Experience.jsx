import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__frontend">

          <h3>web Development</h3>

          <div className="experience__content">
            <article className='experience__details'>

              <BsPatchCheckFill classname='experience__details-icon'/>
              
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>

              <BsPatchCheckFill classname='experience__details-icon'/>
              
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>

            </article>
            <article className='experience__details'>

              <BsPatchCheckFill classname='experience__details-icon'/>
              
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Beginner</small>
              </div>

            </article>
            <article className='experience__details'>

              <BsPatchCheckFill classname='experience__details-icon'/>
              
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>

            </article>
            <article className='experience__details'>

              <BsPatchCheckFill classname='experience__details-icon'/>
              
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Beginner</small>
              </div>

            </article>
            <article className='experience__details'>

              <BsPatchCheckFill classname='experience__details-icon'/>
              
              <div>
              <h4>GIT</h4>
              <small className='text-light'>Intermediate</small>
              </div>

            </article>
          </div>
        </div>
{/* ==================webdevelopment====================== */}
        <div className="experience__cp">
          
          <h3>Competitive Programming</h3>

          <div className="experience__content">
            <article className='experience__details'>

              <BsPatchCheckFill classname='experience__details-icon'/>
              
              <div>
              <h4>Java</h4>
              <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>

              <BsPatchCheckFill classname='experience__details-icon'/>
              
              <div>
              <h4>python</h4>
              <small className='text-light'>Beginner</small>
              </div>

            </article>
            <article className='experience__details'>

              <BsPatchCheckFill classname='experience__details-icon'/>
              
              <div>
              <h4>oops</h4>
              <small className='text-light'>Beginner</small>
              </div>

            </article>
            <article className='experience__details'>

              <BsPatchCheckFill classname='experience__details-icon'/>
              
              <div>
              <h4>DSA</h4>
              <small className='text-light'>Intermediate</small>
              </div>

            </article>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Experience