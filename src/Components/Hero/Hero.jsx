import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile} alt=''/>
        <h1>Hello 👋🏻 I'm Siddharth</h1>
        <p>Pursuing Btech from Patna,Bihar & mastering my skills in fullstack development</p>
        <div className="action">
            <div className="conncet">connect with me</div>
            <div className="resume">Resume</div>
        </div>
      
    </div>
  )
}

export default Hero
