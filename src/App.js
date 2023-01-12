import logo from './logo.svg';
import './App.css';
import BasicCard from './components/Card/BasicCard';
import UserCard from './components/Card/UserCard/UserCard';

function App() {
  return (
    <div className="App">
      <BasicCard> 
        <UserCard />
      </BasicCard>
    </div>
  );
}

export default App;
