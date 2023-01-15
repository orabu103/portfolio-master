import React from 'react'
import BasicCard from '../BasicCard'
import Experiences from '../../Experiences/Experiences'
import './style.css'

const hm = "https://1000logos.net/wp-content/uploads/2017/02/Hennes-Logo-19682.jpg" 
const adidas = 'https://cdn.icon-icons.com/icons2/2699/PNG/512/adidas_logo_icon_169639.png'
const nivea = "https://i.pinimg.com/originals/a1/d3/fb/a1d3fb7bae3978bb39c6bf6e41943741.jpg"

const ExperiencesCard = ({style}) => {
  let styles = {
    display: style === 'vertical' ? null : 'flex'
  }
  return (
    <BasicCard >
      <div className='ExperiencesCard'>
        <h1>Experiences</h1>
          <div className='ExperiencesCard_body' style={styles}>
          <Experiences logo = {adidas} 
                      timeline={'Feb 2017 - Current'} 
                      title={'Front-end developer'} 
                      summary={'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'}
                      style={style}/>
          <Experiences logo = {hm}
                      timeline={'Aug 2016 - Feb 2018'} 
                      title={'Full-stack developer'} 
                      summary={'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'}
                      style={style}/>
          <Experiences logo = {nivea}
                      timeline={'Jun 2015 - Aug 2016'} 
                      title={'Junior front-end developer'} 
                      summary={'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'}
                      style={style}/>
        </div>
      </div>
    </BasicCard>
  )
}

export default ExperiencesCard