import React from 'react'
import './About.css'
import ME from '../../assets/aboutme.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>

        </div>

        <div className="about__content">
          <p>
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR...
          </p>

          <a href="#contact" className='btn btn-'>Let's Chat</a>
        </div>
      </div>
    </section>
  )
}

export default About