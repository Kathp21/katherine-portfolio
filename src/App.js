import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<div>
          <section id="about">
            <AboutMe/>
          </section>
          <section id="experience">
            <Experience/>
          </section>
          <section id="projects">
            <Projects/>
          </section>
          <section id="contact">
            <Contact/>
          </section>
        </div>}/>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App;
