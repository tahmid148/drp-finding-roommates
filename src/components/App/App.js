import React from 'react';
import { LandingPage } from '../LandingPage/LandingPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 data-testid="header">IS THIS DEPLOYED?</h1>
      <LandingPage/>
    </div>
  );
}

export default App;
