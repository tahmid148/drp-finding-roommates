import React from 'react';
import './Footer.css'

const Footer = ({background}) => {
    return (
        <div style={{
            "backgroundColor": background
        }}>
            <nav className='footer'>
                <div className='homeButton'>Roomb</div>
            </nav>
        </div>
    )
}

export default Footer