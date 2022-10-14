import React from 'react'
import './Footer.css';
function Footer() {
  return (
    <>
    <div className='footer'>
      <div className='list_1'> <p>Neha Shah</p></div>
      <div className='list_2'> <p>ns457989@gmail.com</p></div>
      <div className='list_3'>
        <a href ='https://www.linkedin.com/in/neha-shah-a528801b3/' target="blank"><img src='./images/linkedin.png' alt='linkedin_link'/>
        </a>
        <a href='https://github.com/nehashah4590'target="blank"><img src='./images/github.png' alt='github_link' /></a>
        <a  href='/' target="blank"><img src='./images/facebook.png' alt='fb_link'/></a>
        <a href='/' target="blank"><img src='./images/insta.png' alt='insta_link'/></a>
      
        </div>
    </div>
    </>
  )
}

export default Footer
  