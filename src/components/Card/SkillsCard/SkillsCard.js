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

const SkillsCard = ({style}) => {
  let styles = {
    gridTemplateColumns: style === 'vertical' ? '1fr' : 'repeat(2, 1fr)'
}
  return (
    <div className='SkillsCard'>
        {/* Header */}
        <h1 className='SkillsCard_header'>FRONT END</h1>
        {/* Body */}
        <div className='SkillsCard_body'  style={styles}>
        {Object.keys(skills).map((value , index) => {
            return <Skill key={index} text={value} percent={skills[value]}/>
        })}
        </div>
    </div>
  )
}

export default SkillsCard