import React from 'react'
import BasicButton from '../../Button/BasicButton/BasicButton'
import Pic from '../../Pic/Pic'
import BasicCard from '../BasicCard'

import './style.css'

const url = "https://www.geckoboard.com/uploads/sales-dashboard-example.png"
let skills = ['JavaScript' , 'Nodejs' , 'React' , 'C++' , 'C#' , 'Java' , ' Python']

const ProjectCard = ({flex}) => {

    let styles = {
        flexDirection: flex === 'vertical' ? 'column' : 'row',
        alignItems:  flex === 'vertical' ? 'center' : null
    }

  return (
    <BasicCard>
        <div className='ProjectCard' style={styles}>
            {/* Picture */}
            <div className="ProjectCard_pic" >
                <Pic url = {url} width="100%" />
            </div>
            <div className='ProjectCard_container'>
            {/* Header */}
            <ul>
                {skills.map((value , index) => {
                    return <li key={index}>{value}</li>
                })}
            </ul>
            <h1>Mail To SMS</h1>
            {/* Body */}
            <p>
                In this project, I work with HTML and CSS to create a responsive page . 
                The design is from devchallenge.io. 
                Donec aliquam est dui, vel vestibulum diam sollicitudin id. 
                Quisque feugiat malesuada molestie.
            </p>
            {/* Button */}
            <div className='ProjectCard_container_body_button'>  
                <BasicButton text="Demo"/>
                <BasicButton text="Code" type={'outline'}/>
            </div>
            </div>
        </div>
    </BasicCard>
  )
}

export default ProjectCard