import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<div>
          <section id="about">
            <AboutMe/>
          </section>
        </div>}/>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App;
