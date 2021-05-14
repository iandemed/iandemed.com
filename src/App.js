import './App.css';

import NavBar from './components/NavBar.jsx'
import LandingHero from './components/LandingHero'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LandingHero/>
      <AboutMe/>

    </div>
  );
}

export default App;
