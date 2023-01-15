import React from 'react'
import './style.css'

const Experiences = ({logo , timeline , title , summary , style}) => {
  let styles = {
    maxWidth: style === 'vertical' ? '280px' : '170px'
  }
  return (
    <div className='Experiences'>
      <img src={logo} />
      <div className='Experiences_body'>
        <h4> {timeline} </h4>
        <h3> {title} </h3>
        <p style={styles}> {summary} </p>
      </div>
    </div>
  )
}

export default Experiences