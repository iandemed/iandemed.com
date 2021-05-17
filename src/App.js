import './App.css';

import NavBar from './components/NavBar.jsx'
import LandingHero from './components/LandingHero'
import AboutMe from './components/AboutMe'
import MyStack from './components/MyStack'
import ProjectHero from './components/ProjectsHero'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LandingHero/>
      <AboutMe/>
      <MyStack/>
      <ProjectHero/>

    </div>
  );
}

export default App;
