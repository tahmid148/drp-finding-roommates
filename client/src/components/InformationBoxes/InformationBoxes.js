import React from 'react';
import './InformationBoxes.css';
import info1 from './info-card-1.svg'
import info2 from './info-card-2.svg'
import info3 from './info-card-3.svg'
import lightInfo1 from './light-info-card-1.svg'
import lightInfo2 from './light-info-card-2.svg'
import lightInfo3 from './light-info-card-3.svg'

const InformationBoxes = (colorMode) => {
    if (colorMode.colorMode) {
        return (
            <div id='info' className='box-container'>
                <img className='images image1' src={lightInfo1} alt='People'></img>
                <img className='images image2' src={lightInfo2} alt='People'></img>
                <img className='images image3' src={lightInfo3} alt='People'></img>
            </div>
        )
    } else {
        return (
            <div id='info' className='box-container'>
                <img className='images image1' src={info1} alt='People'></img>
                <img className='images image2' src={info2} alt='People'></img>
                <img className='images image3' src={info3} alt='People'></img>
            </div>
            
        )
    }
}

export default InformationBoxes