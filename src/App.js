import React from 'react';

//Components
import Navbar from './components/navbar/Navbar';
import Cover from './components/cover/Cover';
import Projects from './components/Projects/Projects';
import Trajectory from './components/trajectory/Trajectory';
import Techs from './components/Techs/Technologies';

function App() {


  return (
    <div className="App">
      <Navbar />
      <Cover />
      <Projects />
      <Trajectory />
      <Techs />
    </div>
  );
}

export default App;
