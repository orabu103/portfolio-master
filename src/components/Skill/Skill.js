import React from 'react'
import './style.css'

const Skill = ({text , percent , animation}) => {
    
   
 
  return (
    <div className='Skill'>
        <p> {text}</p>
        <div  className='Skill_line'>
          <p  className={animation ? 'Skill_line_percent' : null} style={{ '--animation-width' : `${percent}%`}} />
        </div>
    </div>
  )
}

export default Skill