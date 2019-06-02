import React from 'react';
import Landing from './Landing/Landing.js'
import Intro from './Intro/Intro.js'
import Phase1 from './Phase1/Phase1';
import Transition from './Transition/Transition';
import Phase2 from './Phase2/Phase2';
import './App.css';

function App() {
  return (
    <div className="App">
      <Landing />
      <Intro />
     
      <Phase1 />
       <Transition />
       <Phase2 />
    </div>
  );
}

export default App;
