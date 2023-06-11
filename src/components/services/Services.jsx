import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design dynamic websites using CSS for styling.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Implementing functional objects such as calendars or clocks.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Apply creative themes and color schemes utilizing artistic background.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Utilize digital art programs for more detailed projects and requests.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Build functional applications as requested for business needs.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Utilize various frameworks depending on project requirements.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Create a working backend for e-commerce websites with secure payment options.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Set up a database to store various information.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Use a variety of software to test applications or improve functionality of existing applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Write clean and concise code that can be securely worked on by other developers.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Use music producing/editing software to compose or perform music live.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Edit images and videos and implementing them in existing projects.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Use drawing/illustration software to produce any desired artwork as needed for projects.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Hands on with several technologies, such as building computers or fixing appliances.</p>
            </li>
          </ul>
        </article>
        { /* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services