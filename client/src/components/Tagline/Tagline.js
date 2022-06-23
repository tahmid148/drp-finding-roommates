import React from 'react';
import './Tagline.css';
import { Link } from 'react-router-dom';
import james from './james.png'
import huixin from './huixin.png'
import paulo from './paulo.png'
import estibon from './estibon.png'

const Tagline = ({colorMode}) => {
    const textColor = colorMode ? '#000' : '#e76f51'
    const youColor = colorMode ? '#2A9D8F' : '#E9C46A'
    const btnColor = colorMode ? '#2A9D8F' : '#264653'
    const btnTextColor = colorMode ? '#fff' : '#E9C46A'
    const btnBorderColor = colorMode ? '#fff' : '#e76f51'

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
                    <a href="example-profile1"><img className='profiles' src={james} alt='peoples profiles'></img></a>
                    <img className='profiles' src={huixin} alt='peoples profiles'></img>
                    <img className='profiles' src={paulo} alt='peoples profiles'></img>
                    <img className='profiles' src={estibon} alt='peoples profiles'></img>
                </div>
            </div>
    )
}

export default Tagline