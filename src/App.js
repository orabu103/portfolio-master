import './App.css';
import UserCard from './components/Card/UserCard/UserCard';
import ProjectCard from './components/Card/PojectCard/ProjectCard';
import SkillsCard from './components/Card/SkillsCard/SkillsCard';
import BlogCard from './components/Card/BlogCard/BlogCard';
import ExperiencesCard from './components/Card/ExperiencesCard/ExperiencesCard';
import HobbieCard from './components/Card/HobbieCard/HobbieCard';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App grid-container">
      <div className="grid-item item1"> <UserCard /> </div>
     
      <div className="grid-item item4"> <ExperiencesCard flex='vertical'/> </div>
      <div className="grid-item item3"> <BlogCard flex='vertical'/> </div>
      <div className="grid-item item5"> <HobbieCard flex='vertical'/> </div>
      <div className="grid-item item2"> <SkillsCard flex='vertical'/> </div>
      <div className="grid-item item6"> <Header title={'Project'} number={3} flex='vertical'/> </div>
      
      <div className="grid-item item7"> <ProjectCard flex='vertical'/> </div>
      <div className="grid-item item8"> <ProjectCard flex='vertical'/> </div>
      <div className="grid-item item9"> <ProjectCard flex='vertical'/> </div>
    </div>
  );
}

export default App;



