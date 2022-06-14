import React from 'react';
import profiles from './example-profiles.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <header>
          <span data-testid="header" className='nav-header'>Roomb</span>
          <span data-testid="header" className='nav-header'>About us</span>
          <span data-testid="header" className='nav-header'>FAQ</span>
          <img src=""/>   // TODO: profile photo
        </header>
      </nav>
      <section>
        <span>
            Filter
            <button>Sort by:</button>
            <input type=""></input>
        </span>
        <div>
            // TODO: filter and matched roommate
        </div>
      </section>
    </div>
  );
}

export default App;