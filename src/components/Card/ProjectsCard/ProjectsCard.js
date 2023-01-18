import React from 'react'
import ProjectCard from '../PojectCard/ProjectCard'
import Header from '../../Header/Header'

import './style.css'
import SelectPage from '../../SelectPage/SelectPage'

const ProjectsCard = () => {
  return (
    <div className='ProjectsCard'>
        <div>
            <Header title={'Project'} number={3} flex='vertical' />
        </div>
        <div className='ProjectsCard_projects'>
            <ProjectCard flex='vertical' animation="slideInLeft"/>
            <ProjectCard flex='vertical' animation="slideInDown" />
            <ProjectCard flex='vertical' animation="slideInRight"/>
        </div>
        <div>
          <SelectPage number={10}/>
        </div>
    </div>
  )
}

export default ProjectsCard