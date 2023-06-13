import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/ecommerce.jpg'
import IMG2 from '../../assets/workers.png'
import IMG3 from '../../assets/readme.png'
import IMG4 from '../../assets/logo.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'E-Commerce Backend',
    github: 'https://github.com/rismahjo/ecommerce-bts',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Worker Tracker',
    github: 'https://github.com/rismahjo/rismahjo/worker-tracker',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Readme Generator',
    github: 'https://github.com/rismahjo/make-me-a-readme',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Highlighter - Calendar Application',
    github: 'https://github.com/Radioactive-mtb/highlighter'
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