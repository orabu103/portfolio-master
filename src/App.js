import './App.css';
import BasicCard from './components/Card/BasicCard';
import UserCard from './components/Card/UserCard/UserCard';
import ProjectCard from './components/Card/PojectCard/ProjectCard';
import SkillsCard from './components/Card/SkillsCard/SkillsCard';
import BlogCard from './components/Card/BlogCard/BlogCard';
import ExperiencesCard from './components/Card/ExperiencesCard/ExperiencesCard';
import HobbieCard from './components/Card/HobbieCard/HobbieCard';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* <Header title={'Projects'} number={3}/> */}
      <UserCard className="grid-item item1" />
      <ProjectCard className="grid-item item2" />
      <SkillsCard className="grid-item item3" />
      <BlogCard className="grid-item item4"/>
      <ExperiencesCard className="grid-item item5"/>
      <HobbieCard className="grid-item item6"/>
    </div>
  );
}

export default App;
