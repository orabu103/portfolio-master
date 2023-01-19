import React from 'react'
import UserCard from '../../components/Card/UserCard/UserCard';
import ProjectsCard from '../../components/Card/ProjectsCard/ProjectsCard';
import SkillsCard from '../../components/Card/SkillsCard/SkillsCard';
import BlogCard from '../../components/Card/BlogCard/BlogCard';
import ExperiencesCard from '../../components/Card/ExperiencesCard/ExperiencesCard';
import HobbieCard from '../../components/Card/HobbieCard/HobbieCard';
import Header from '../../components/Header/Header';
import './style.css'

const skillsBack = {
  'nodeJs' : 95,
  'Python': 80,
  'C++': 85 ,
  'C#': 83 ,
 
}
const skillsFront = {
  React: 90 ,
  Javascript: 85 ,
  CSS: 85,
  Redux:  82 ,
}
const Dashboard = () => {
  return (
    <div className="grid-container">
      <UserCard />
      <SkillsCard title ={'FRONT END'} skills={skillsFront} flex='vertical'/>
      {/* <SkillsCard title ={'BACK END'} skills={skillsBack} flex='vertical'/> */}
      <ExperiencesCard flex='vertical'/>
      <BlogCard flex='vertical'/>
      <HobbieCard flex='vertical'/>
      <ProjectsCard/>
      
    </div>
  )
}

export default Dashboard