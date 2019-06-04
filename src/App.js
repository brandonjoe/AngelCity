import React from 'react';
import Landing from './Landing/Landing.js'
import Intro from './Intro/Intro.js'
import Phase1 from './Phase1/Phase1';
import Transition from './Transition/Transition';
import Phase2 from './Phase2/Phase2';
import Transition2 from './Transition2/Transition2';
import Phase3 from './Phase3/Phase3';
import './App.css';

function App() {
  return (
    <div className="App">
      <Landing />
      <Intro />
     
      <Phase1 />
       <Transition/>
       <Phase2 />
       <Transition2 />
       <Phase3 />
    </div>
  );
}

export default App;
