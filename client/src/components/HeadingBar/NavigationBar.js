import React from 'react';
import './NavigationBar.css'

export class NavigationBar extends React.Component {
    render() {
        return (
            <nav className='navbar'>
                <p data-testid="header" className='nav-header'>
                    <div className='container'>
                        <div className='homeButton'>Roomb</div>
                        <div className='login'>Login</div>
                    </div>
                    
                </p>
            </nav>
        );
    }
}