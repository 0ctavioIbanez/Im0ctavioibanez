import React from 'react';

//Components
import Navbar from './components/navbar/Navbar';
import Cover from './components/cover/Cover';
import Projects from './components/Projects/Projects';
import Trajectory from './components/trajectory/Trajectory';
import Techs from './components/Techs/Technologies';
import Cursos from './components/cursos/Cursos';
import Footer from './components/footer/Footer';


function App() {


  return (
    <div className="App">
      <Navbar />
      <Cover />
      <Projects />
      <Cursos />
      <Techs />
      <Trajectory />
      <Footer />
    </div>
  );
}

export default App;
