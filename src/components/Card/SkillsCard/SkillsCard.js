import React from 'react'
import Skill from '../../Skill/Skill'

import './style.css'

const skills = {
    React: 90 ,
    Javascript: 85 ,
    CSS: 65,
    Redux:  82 ,
    Vue: 35
}

const SkillsCard = () => {
  return (
    <div className='SkillsCard'>
        {/* Header */}
        <h1 className='SkillsCard_header'>FRONT END</h1>
        {/* Body */}
        <div className='SkillsCard_body'>
        {Object.keys(skills).map((value , index) => {
            return <Skill key={index} text={value} percent={skills[value]}/>
        })}
        </div>
    </div>
  )
}

export default SkillsCard