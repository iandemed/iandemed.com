import './App.css';

import NavBar from './components/NavBar.jsx'
import LandingHero from './components/LandingHero'
import AboutMe from './components/AboutMe'
import MyStack from './components/MyStack';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LandingHero/>
      <AboutMe/>
      <MyStack/>

    </div>
  );
}

export default App;
