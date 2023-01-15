import React from 'react'
import './style.css'

const Experiences = ({logo , timeline , title , summary , flex}) => {
  let styles = {
    maxWidth: flex === 'vertical' ? '280px' : '170px'
  }
  return (
    <div className='Experiences'>
      <img src={logo} alt=''/>
      <div className='Experiences_body'>
        <h4> {timeline} </h4>
        <h3> {title} </h3>
        <p style={styles}> {summary} </p>
      </div>
    </div>
  )
}

export default Experiences