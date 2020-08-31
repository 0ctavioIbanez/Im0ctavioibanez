import React from 'react';

//Components
import Navbar from './components/navbar/Navbar';
import Cover from './components/cover/Cover';
import Projects from './components/Projects/Projects';

function App() {


  return (
    <div className="App">
      <Navbar />
      <Cover />
      <Projects />
    </div>
  );
}

export default App;
