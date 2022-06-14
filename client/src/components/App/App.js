import React from 'react';
import profiles from './example-profiles.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <p data-testid="header" className='nav-header'>Roomb</p>
      </nav>
      <div className='tagline-container'>
        <h3 className='tagline'>Finding the best roommate for TESTING<span>you</span>.</h3>
        <img src={profiles} alt='Example Profiles' className='profiles_img'/>
      </div>
      <div className='btn-container'>
        <button className='get-started-btn'>Begin Your Journey</button>
        <button className='find-out-more-btn'>Find Out More</button>
      </div>
    </div>
  );
}

export default App;
