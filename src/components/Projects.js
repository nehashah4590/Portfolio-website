import React from 'react'
import  './Project.css';
import calculator from './images/Calculator.png';
import Itc from './images/IT-Company.png';
import textutils from './images/Text-Utils.png';

function Projects() {
  return (
    <div>
      <div className='project_items'>
        <div className='project_item1 item'>
        <a href='https://github.com/nehashah4590/calculator-app'><img src={calculator} alt="calculator-app" /></a>
        <p>This a calculator-app</p>
        </div>
        <div className='project_item2 item'>
        <a href='https://github.com/nehashah4590/calculator-app'><img src={Itc} alt="IT-Company website" /></a>
        <p>This a IT_Company website</p>
        </div>
        <div className='project_item3 item'>
        <a href='https://github.com/nehashah4590/textUtils'><img src={textutils} alt="Text-Utils website" /></a>
        <p>This a Text-Utils app for simple text manipulation like copy, paste, Uppercase, Lowercase, clear, replace a word, remove text gap.</p>
        </div>
      
        {/* <div className='project_item4 item'>4</div>
        <div className='project_item5 item'>5</div>
        <div className='project_item6 item'>6</div> */}
      </div>
    </div>
  )
}

export default Projects
