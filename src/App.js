import './App.css';
import BasicCard from './components/Card/BasicCard';
import UserCard from './components/Card/UserCard/UserCard';
import ProjectCard from './components/Card/PojectCard/ProjectCard';
import SkillsCard from './components/Card/SkillsCard/SkillsCard';
import BlogCard from './components/Card/BlogCard/BlogCard';
import ExperiencesCard from './components/Card/ExperiencesCard/ExperiencesCard';
import HobbieCard from './components/Card/HobbieCard/HobbieCard';

function App() {
  return (
    <div className="App">
      <BasicCard> 
        <UserCard />
      </BasicCard>
      <BasicCard> 
        <ProjectCard />
      </BasicCard>
      <BasicCard>
        <SkillsCard  />
      </BasicCard>
      <BasicCard>
        <BlogCard />
      </BasicCard>
      < ExperiencesCard />
      <HobbieCard style={''}/>
    </div>
  );
}

export default App;
