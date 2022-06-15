import React from 'react';
import './Footer.css'

export class Footer extends React.Component {
    render() {
        return (
            <nav className='footer'>
                <p data-testid="header2" className='footer-header'>
                    <div className='footer-container'>
                        <div className='homeButton'>Roomb</div>
                    </div>
                    
                </p>
            </nav>
        );
    }
}