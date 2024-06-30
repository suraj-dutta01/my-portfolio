import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutPage from './Components/AboutPage';
import SkillsPage from './Components/SkillsPage';
import ProjectsPage from './Components/ProjectsPage';
import ContactPage from './Components/ContactPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/skills' element={<SkillsPage/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
