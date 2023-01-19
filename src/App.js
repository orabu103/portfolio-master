import './App.css';
import PageButton from './components/Button/PageButton/PageButton';

import Dashboard from './page/Dashboard/Dashboard';
import Header from './page/Header/Header';

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
    <div className='App'>
      {/* <Header /> */}
      <Dashboard />
      <h3>created by Or Abuhtzira - devChallenges.io</h3>
    
    </div>
  );
}

export default App;



