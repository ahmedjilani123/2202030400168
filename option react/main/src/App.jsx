import React from 'react';
import Navbar from './components/Navbar';
import HeaderPage from './components/HeaderPage';
import About from './components/About';
import What from './components/What';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
      <Navbar/>
      <HeaderPage/>
      <About/>
      <What></What>
      <Skill></Skill>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
