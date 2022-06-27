import React from 'react';
import { Link } from 'react-router-dom';
import './YourProfile.css';

const YourProfile = ({state}) => {
    const [colorMode, switchMode] = state
    const backgroundColor = colorMode ? '#fff' : '#264653'
    const textColor = colorMode ? '#000' : '#fff'
    const backgroundStyle = {
        "backgroundColor": backgroundColor,
        "textColor": textColor,
        "transition": "background 0.8s"
    }
    return (
        <div style={backgroundStyle} height="100%">
            <nav className='navbar'>
            <p className='homeButton'>Roomb</p>
                <button onClick={() => switchMode(!colorMode)} className='switch-mode'>switch light mode</button>
            </nav>
            <p className='create-profile'>
                    <span className='to-orange'>Create</span> <span className='to-yellow'>your</span> <span className='to-orange'>profile</span>
            </p>
            <div className="bigBox" style={borderStyle}>
                <form action="profile" method="POST">
                    <input type="file" id="uploadBgInput" hidden="hidden"></input>
                    <button type="button" id="uploadBgButton" className="uploadBg">Add Image</button>
                    <input type="file" id="uploadPpInput" hidden="hidden"></input>
                    <button type="button" id="uploadPpButton" className="uploadPp">Add Image</button>
                    <input type="text" placeholder="Full Name" className="nameInput" name='name' required></input>
                    <input type="text" placeholder="Age" className="input ageInput" name='age' required></input>
                    <br></br>
                    <label className="label budgetFromLabel">Budget From £</label>
                    <label className="label budgetToLabel">To</label>
                    <input type="text" className="input budgetFromInput" name='min_budget' required></input>
                    <input type="text" className="input budgetToInput" name='max_budget' required></input>
                    <br/>
                    <label className='label genderLabel'>Gender</label>
                    <input type="text" className='input genderInput' name='gender' required/>
                    <label className='label personalityLabel'>Personality</label>
                    <select className='dropdown personalityDropdown' name='personality' required>
                        <option value='introvert'>Introvert</option>
                        <option value='extravert'>Extravert</option>
                    </select>
                    <label className='label smokesLabel'>Do you smoke?</label>
                    <select className='dropdown smokesDropdown' name='smokes' required>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                    <br/>
                    <label className='label petsLabel'>Do you have pets?</label>
                    <select className='dropdown petsDropdown' name='has_pets' required>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                    <label className='label hygieneLabel'>Hygiene</label>
                    <select className='dropdown hygieneDropdown' name='hygiene' required>
                        <option value='tidy'>Tidy</option>
                        <option value='messy'>Messy</option>
                    </select>
                    <label className='label religionLabel'>Religion</label>
                    <select className='dropdown religionDropdown' name='religion' required>
                        <option value='muslim'>Muslim</option>
                        <option value='christian'>Christian</option>
                        <option value='jewish'>Jewish</option>
                        <option value='hindu'>Hindu</option>
                        <option value='buddhist'>Buddhist</option>
                        <option value='Sikh'>Sikh</option>
                        <option value='atheist'>Atheist</option>
                        <option value='agnostic'>Agnostic</option>
                        <option value='other'>Other</option>
                    </select>
                    <br/>
                    <label className="aboutLabel">About You</label>
                    <br/>
                    <textarea type="text" className="aboutInput" name='info' required></textarea>
                    <br />
                    <input type="submit" />
                    <Link to='/roommate-search'>
                        <button>
                            Profile Search
                        </button>
                    </Link>
                </form>
            </div> 
        </div>
    )
}

export default YourProfile