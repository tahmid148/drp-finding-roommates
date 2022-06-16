import React from 'react';
import './NavigationBar.css'
import profile1 from './SmileFace.svg'

export class NavigationBar extends React.Component {
    render() {
        return (
            <nav className='navbar'>
                    <p className='homeButton'>Roomb</p>
                        <img className='profilePic' src={profile1} alt='profile pic'></img>         
            </nav>
        );
    }
}