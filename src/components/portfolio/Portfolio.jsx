import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/automobile.png'
import IMG2 from '../../assets/E-com-shoes.png'
import IMG3 from '../../assets/edge-ledger.png'
import IMG4 from '../../assets/hotel-website.png'
import IMG5 from '../../assets/parallax-website.png'
import IMG6 from '../../assets/pic-7.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Automobile-selling application',
    github: "https://github.com/Bharath292003/Automobile-selling-application",
    demo: "https://bharath292003.github.io/Automobile-selling-application/"
  },
  {
    id: 2,
    image: IMG6,
    title: 'Personal-portfolio using react',
    github: "https://github.com/Bharath292003/React-personal-portfolio",
    demo: "https://bharath292003.github.io/React-personal-portfolio/"
  },
  {
    id: 3,
    image: IMG2,
    title: 'First Project using JS',
    github: "https://github.com/Bharath292003/E-com-shoes-website",
    demo: "https://bharath292003.github.io/E-com-shoes-website/"
  },
  {
    id: 4,
    image: IMG3,
    title: 'edge-ledger',
    github: "https://github.com/Bharath292003/edge-ledger",
    demo: "https://bharath292003.github.io/edge-ledger/"
  },
  {
    id: 5,
    image: IMG4,
    title: 'project using html and css',
    github: "https://github.com/Bharath292003/hotel-website",
    demo: "https://bharath292003.github.io/hotel-website/"
  },
  {
    id: 6,
    image: IMG5,
    title: 'simple parallax website',
    github: "https://github.com/Bharath292003/parallax-webpage",
    demo: "https://bharath292003.github.io/parallax-webpage/"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>

      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio__item">

              <div className="portfolio__item-image">
                 <img src={image} alt={title} />
              </div>
          
              <h3>{title}</h3>

              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Source Code</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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
