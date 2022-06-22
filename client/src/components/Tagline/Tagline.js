import React from 'react';
import './Tagline.css';
import { Link } from 'react-router-dom';
import profile1 from './eg-profile-1.svg'
import profile2 from './eg-profile-2.svg'
import profile3 from './eg-profile-3.svg'

const Tagline = (colorMode) => {
    const textColor = colorMode.colorMode ? '#000' : '#e76f51'
    const youColor = colorMode.colorMode ? '#2A9D8F' : '#E9C46A'
    const btnColor = colorMode.colorMode ? '#2A9D8F' : '#264653'
    const btnTextColor = colorMode.colorMode ? '#fff' : '#E9C46A'
    const btnBorderColor = colorMode.colorMode ? '#fff' : '#e76f51'

    const youStyle = {
        "color": youColor
    }

    const taglineStyle = {
        "position": "relative",
        "textAlign": 'left',
        "margin": "1em 0 0 12vw",
        "fontSize":"6vw",
        "fontWeight" :"400",
        "animation": "fadeInUp 1s",
        "color" : textColor
    }

    const beginBtnStyle = {
        "backgroundColor": btnColor,
        "border" : "3px solid" + btnBorderColor,
        "borderRadius" : "10px",
        "color": btnTextColor,
        "fontSize" : "1.5vw",
        "padding": "1.5em 5em",
        "marginRight": "4em",
        "animation": "fadeInUp 1s"
    }
    
    return (
        <div className='tagline-container'>
            <div className='left-container'>
                <h3 className='tagline' style={taglineStyle}>Finding the best <br></br> roommate for <br></br><span className='you' style={youStyle}>you</span>.</h3>

                <div className='btn-container'>
                    <Link to='/profile'>
                        <button className='begin-btn' style={beginBtnStyle}>
                            Begin Your Journey
                        </button>
                    </Link>
                </div>

            </div>
            <div className='profile-container'>
                <a href="example-profile1"><img className='profiles' src={profile1} alt='peoples profiles'></img></a>
                <img className='profiles' src={profile2} alt='peoples profiles'></img>
                <img className='profiles' src={profile3} alt='peoples profiles'></img>
            </div>
        </div>
    )
}

export default Tagline