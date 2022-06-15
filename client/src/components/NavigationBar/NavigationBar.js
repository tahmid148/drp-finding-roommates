import React from 'react';
import './NavigationBar.css'

export class NavigationBar extends React.Component {
    render() {
        return (
            <nav className='navbar'>
                <p className='homeButton'>Roomb</p>
                <p className='login'>Login</p>
            </nav>
        );
    }
}