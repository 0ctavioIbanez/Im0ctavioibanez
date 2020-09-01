import React from 'react';

//Components
import Navbar from './components/navbar/Navbar';
import Cover from './components/cover/Cover';
import Projects from './components/Projects/Projects';
import Trajectory from './components/trajectory/Trajectory';

function App() {


  return (
    <div className="App">
      <Navbar />
      <Cover />
      <Projects />
      <Trajectory />
    </div>
  );
}

export default App;
