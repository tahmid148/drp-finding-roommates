import React from 'react';
import { InputText } from '../InputText/InputText';
import { LandingPage } from '../LandingPage/LandingPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 data-testid="header">ROOMB</h1>
      <InputText/>
      <LandingPage/>
    </div>
  );
}

export default App;
