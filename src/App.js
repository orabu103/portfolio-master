import './App.css';
import UserCard from './components/Card/UserCard/UserCard';
import ProjectCard from './components/Card/PojectCard/ProjectCard';
import SkillsCard from './components/Card/SkillsCard/SkillsCard';
import BlogCard from './components/Card/BlogCard/BlogCard';
import ExperiencesCard from './components/Card/ExperiencesCard/ExperiencesCard';
import HobbieCard from './components/Card/HobbieCard/HobbieCard';
import Header from './components/Header/Header';

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

function App() {
  return (
    <div className="App grid-container">
      <div className="grid-item UserCard"> <UserCard/> </div>
      <div className="grid-item SkillsCard"> <SkillsCard title ={'FRONT END'} skills={skillsFront} flex='vertical'/> </div>
      <div className="grid-item SkillsCard"> <SkillsCard title ={'BACK END'} skills={skillsBack} flex='vertical'/> </div>
      <div className="grid-item ExperiencesCard"> <ExperiencesCard flex='vertical'/> </div>
      <div className="grid-item BlogCard"> <BlogCard flex='vertical'/> </div>
      <div className="grid-item HobbieCard"> <HobbieCard flex='vertical'/> </div>
      <div className="grid-item Header"> <Header title={'Project'} number={3} flex='vertical' /> </div>
      <div className="grid-item ProjectCard"> <ProjectCard flex='vertical' animation="slideInRight"/> </div>
      <div className="grid-item ProjectCard"> <ProjectCard flex='vertical' animation="slideInLeft"/> </div>
      <div className="grid-item ProjectCard"> <ProjectCard flex='vertical' animation="slideInRight"/> </div>
    </div>
  );
}

export default App;



