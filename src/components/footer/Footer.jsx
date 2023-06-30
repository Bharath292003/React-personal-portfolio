import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BiLogoInstagramAlt} from 'react-icons/bi'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>G BALAJI BHARATH</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/balaji-bharath-g-101a5820b/"><BsLinkedin/></a>
        <a href="https://twitter.com/bharath292003"><AiFillTwitterCircle/></a>
        <a href="https://github.com/Bharath292003"><BsGithub/></a>
        <a href="https://www.instagram.com/bharath__1446/"><BiLogoInstagramAlt/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; G balaji bharath. All rights reserved</small>
      </div>
    </footer>
  )
}


export default Footer