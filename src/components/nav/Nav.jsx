import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {LiaProjectDiagramSolid} from 'react-icons/lia'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {BsPeople} from 'react-icons/bs'
import { useState } from 'react'
const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
   <nav>
    <a href="#" onClick={ () => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
    <a href="#about" onClick={ () => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
    <a href="#experience" onClick={ () => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
    <a href="#portfolio" onClick={ () => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><LiaProjectDiagramSolid/></a>
    <a href="#testimonials" onClick={ () => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><BsPeople/></a>
    <a href="#contact" onClick={ () => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageRoundedDots/></a>
   </nav>
  )
}

export default Nav