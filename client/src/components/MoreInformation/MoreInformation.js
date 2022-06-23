import React from 'react';
import './MoreInformation.css';

const MoreInformation = ({colorMode}) => {
    const textColor = colorMode ? '#000' : '#fff'
    const boxBackground = colorMode ? '#2A9D8F' : '#264653'

    const headerTextStyle =  {
        "color": textColor,
        "fontSize": "4vw",
        "textAlign": "left",
        "marginLeft": "1em"
    }

    const textStyle = {
        "fontSize": "2.5vw",
        "textAlign": "left",
        "marginLeft": "4.5vw",
        "color": textColor
    }

    const boxTextStyle = {
        "fontSize": "2vw",
        "textAlign": "left",
        "marginLeft": "1vw",
        "color": "white" 
    }

    const topBoxStyle = {
        "border": "2px solid #e9c46a",
        "borderRadius": "10px",
        "width": "25vw",
        "marginRight": "1em",
        "padding": "0 1em",
        "background": boxBackground
    }

    const bottomBoxStyle = {
        "border": "2px solid #e9c46a",
        "borderRadius": "10px",
        "width": "35vw",
        "marginLeft": "30%",
        "marginTop": "1em",
        "background": boxBackground
    }

    return (
        <div className='more-container'>
            <p style={headerTextStyle}>
                Want to know more about us?
            </p>
            <p style={textStyle}>
                The service is..,
            </p>

            <div className='more-box-container'>
                <div style={topBoxStyle}>
                    <p style={boxTextStyle}><span className='to-red'>Free,</span> provided for students to find <span className='to-orange'>compatible</span> roommates.</p>
                </div>
                <div style={topBoxStyle}>
                    <p style={boxTextStyle}>Made with the <br></br> feedback of students,<br></br><span className='to-red'>For</span> students, <br></br> <span className='to-orange'>By</span> students.</p>
                </div>
                <div style={topBoxStyle}>
                    <p style={boxTextStyle}><span className='to-red'>Matching</span> students since <span className='to-orange'>2022</span></p>
                </div>
            </div>
            <div style={bottomBoxStyle}>
                <p style={boxTextStyle}>pronounced <strong><em>room</em></strong> (the b is silent).</p>
            </div>
        </div>
    )
}

export default MoreInformation