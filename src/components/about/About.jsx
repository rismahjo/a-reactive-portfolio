import React from 'react'
import './About.css'
import ME from '../../assets/aboutme.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>

        </div>

        <div className="about__content">
          <p>
            A graduate from UC Riverside with a background in business and finance, building skills as a full-stack web developer to pursue a career in software engineering.
            Passionate about learning and applying new technologies among other things. Hobbies include making music, creating art, traveling, and indulging in all kinds of media. 
          </p>

          <a href="#contact" className='btn btn-'>Let's Chat</a>
        </div>
      </div>
    </section>
  )
}

export default About