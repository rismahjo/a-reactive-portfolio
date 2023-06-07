import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/sample1.png'
import IMG2 from '../../assets/sample2.jpg'
import IMG3 from '../../assets/sample3.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Project 1',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Project 2',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Project 3',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>GitHub</a>
              <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio