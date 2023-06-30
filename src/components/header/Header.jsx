import React from 'react'
import './header.css'
import CTA from './CTA'
import Headersocials from './Headersocials'
import ME from '../../assets/Profile picture-modified.png'
const Header = () => {
  return (
   <header>
    <div className="container header_container">
      <div className="intro">
      <h5>Hello I'm</h5>
      <h1>G balaji bharath</h1>
      <h5 className="text-light">Frontend developer</h5>
      </div>
      <CTA/>
      <Headersocials/>
      <div className="me">
        <img src={ME} alt="me" />
      </div>
      <a href="#contact" className='scroll_down'>Scroll Down</a>
    </div>
  </header> 
  )
}

export default Header