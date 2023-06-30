import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'


const Headersocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/balaji-bharath-g-101a5820b/" target='_blank' className='socials'><BsLinkedin/></a>
        <a href="https://github.com/Bharath292003" target='_blank' className='socials'><FaGithub/></a>
        <a href="https://twitter.com/bharath292003" target='_blank' className='socials'><FaTwitter/></a>
        <a href="https://www.instagram.com/bharath__1446/" target='_blank' className='socials'><FaInstagram/></a>
    </div>
  )
}

export default Headersocials