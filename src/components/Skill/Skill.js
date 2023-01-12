import React from 'react'
import './style.css'

const Skill = ({text , percent}) => {
  return (
    <div className='Skill'>
        <p> {text}</p>
        <div className='Skill_line'>
          <p className='Skill_line_percent' style={{width:`${percent}%`}} />
        </div>
    </div>
  )
}

export default Skill