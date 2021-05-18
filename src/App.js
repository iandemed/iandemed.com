import './App.css';

import NavBar from './components/NavBar.jsx'
import LandingHero from './components/sections/LandingHero'
import AboutMe from './components/sections/AboutMe'
import MyStack from './components/sections/MyStack'
import ProjectsHero from './components/sections/ProjectsHero'
import Footer from './components/sections/Footer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LandingHero/>
      <AboutMe/>
      <MyStack/>
      <ProjectsHero/>
      <Footer/>

    </div>
  );
}

export default App;
