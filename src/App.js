import React from 'react';
import Landing from './Landing/Landing.js'
import Intro from './Intro/Intro.js'
import Phase1 from './Phase1/Phase1';
import './App.css';

function App() {
  return (
    <div className="App">
      <Landing />
      <Intro />
      {/* <Transition /> */}
      <Phase1 />
    </div>
  );
}

export default App;
