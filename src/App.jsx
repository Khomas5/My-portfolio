import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import  Skills  from './components/Skills';
import  Projects  from './components/Projects';
import  Footer  from './components/Footer';
import {ThreeDExperience} from './components/ThreeDExperience';
import './App.css';


function App() {
  return (
    <div>
      <NavBar />
      <Banner />
     <Skills />
     <Projects />
     <ThreeDExperience />
<Footer />


      {/* Rest of your portfolio sections go here */}
    </div>
  );
}

export default App;