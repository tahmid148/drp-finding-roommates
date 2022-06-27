import React from 'react';
import { Link } from 'react-router-dom';
import './YourProfile.css';

const YourProfile = ({state}) => {
    const [colorMode, switchMode] = state
    const backgroundColor = colorMode ? '#fff' : '#264653'
    const textColor = colorMode ? '#000' : '#fff'
    const borderColor = colorMode ? '#2a9d8f' : '#e9c46a'
    const answerColor = colorMode ? '#fff' : '#fff'
    const backgroundStyle = {
        "backgroundColor": backgroundColor,
        "textColor": textColor,
        "transition": "background 0.8s"
    }
    const answerStyle = {
        "backgroundColor": answerColor,
    }
    const borderStyle = {
        "border": '5px solid' + borderColor
    }
    const textStyle = {
        "color": textColor
    }
    return (
        <div style={backgroundStyle}>
            <nav className='navbar'>
                <p className='create-profile'>
                    <span className='to-orange'>Create</span> <span className='you'>your</span> <span className='to-orange'>profile</span>
                </p>
                <button onClick={() => switchMode(!colorMode)} className='switch-mode'>switch light mode</button>
            </nav>
            <form action="profile" method="POST">

                <section className='fill-out-form' style={borderStyle}>
                    <span className='full-name' style={textStyle}>
                        Full Name
                        <input className='full-name-answer' type='text' placeholder='Enter Name' name="name" style={answerStyle}></input>
                    </span>
                    <span className='age' style={textStyle}>
                        Age
                        <input className='age-answer' type='number' placeholder='0' name="age" style={answerStyle}></input>
                    </span>
                    <span className='gender' style={textStyle}>
                        Gender
                        <select className='gender-answer' name='gender' style={answerStyle}>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </span>
                    <span className='personality' style={textStyle}>
                        Personality
                        <select className='personality-answer' name='personality' style={answerStyle}>
                            <option value='introvert'>Introvert</option>
                            <option value='extravert'>Extravert</option>
                        </select>
                    </span>
                    <span className='budget1' style={textStyle} name="">
                        <br></br>
                        Weekly Budget Range: £
                        <input className='budget-answer1' type='number' placeholder='0' name="min_budget" style={answerStyle}></input>
                    </span>
                    <span className='budget2' style={textStyle}>
                        <br></br>
                        to
                        <input className='budget-answer2' type='number' placeholder='500' name="max_budget" style={answerStyle}/>
                    </span>
                    <span className='smokes' style={textStyle}>
                        Do you smoke?
                        <select className='smokes-answer' name='smokes' style={answerStyle}>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                    </span>
                    <span className='hygiene' style={textStyle}>
                    Hygiene Situation
                        <select className='hygiene-answer' name='hygiene' style={answerStyle}>
                            <option value='tidy'>Tidy</option>
                            <option value='messy'>Messy</option>
                        </select>
                    </span>
                    <span className='pets' style={textStyle}>
                        Do you have pets?
                        <select className='pets-answer' name='has_pets' style={answerStyle}>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                    </span>
                    <span className='over' style={textStyle}>
                        How often you have friends over?
                        <select className='over-answer' name='over' style={answerStyle}>
                            <option value='everyday'>Everyday</option>
                            <option value='everyweek'>Every Week</option>
                            <option value='everymonth'>Every Month</option>
                        </select>
                    </span>
                    <span className='instruments' style={textStyle}>
                        Do you play any instruments? If yes, what is it?
                        <input className='instruments-answer' type='text' placeholder='Cello' name="instruments" style={answerStyle}></input>
                    </span>
                    <span className='sleeptime' style={textStyle}>
                        Sleep schedule: from 
                        <input className='sleeptime-answer' type='number' placeholder='23' name="sleeptime" style={answerStyle}></input>
                    </span>
                    <span className='wakeuptime' style={textStyle}>
                        to
                        <input className='wakeuptime-answer' type='number' placeholder='6' name="wakeuptime" style={answerStyle}></input>
                    </span>
                    <span className='about-you'>
                        <br></br>
                        About You
                        <textarea className='about-you-answer' type='text'  name="info" style={answerStyle}
                        placeholder='I am a second year student at Imperial College with a focus in engineering. I hate late night parties......'>
                        </textarea>
                    </span>
                    <button type="submit" className='next-btn'>
                        Next 
                    </button>
                    <Link to='/roommate-search'>
                        <button className='skip-btn'>
                            Skip
                        </button>
                    </Link>
                </section>
            </form>
        </div>
    )
}

export default YourProfile