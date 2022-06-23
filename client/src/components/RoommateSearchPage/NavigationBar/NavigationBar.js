import React from 'react';
import './NavigationBar.css'
import profile1 from './SmileFace.svg'

const NavigationBar = ({state}) => {
    const [colorMode, switchMode] = state
    return (
        <nav className='navbar'>
                <p className='homeButton'>Roomb</p>
                <div className='right-elems'>
                    <button onClick={() => switchMode(!colorMode)}>switch light mode</button>
                    <img className='profilePic' src={profile1} alt='profile pic'></img>         
                </div>
        </nav>
    )
}

export default NavigationBar