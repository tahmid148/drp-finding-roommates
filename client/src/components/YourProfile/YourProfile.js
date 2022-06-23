import React from 'react';
// import { Link } from 'react-router-dom';
import './YourProfile.css';

const YourProfile = ({state}) => {
    const [colorMode, switchMode] = state
    const backgroundColor = colorMode ? '#fff' : '#264653'
    const textColor = colorMode ? '#000' : '#fff'
    const borderColor = colorMode ? '#2a9d8f' : '#e9c46a'
    const answerColor = colorMode ? '#fff' : '#f8b3e1'
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
        <div style={backgroundStyle} height="100%">
            <nav className='navbar'>
            <p className='homeButton'>Roomb</p>
                <button onClick={() => switchMode(!colorMode)}>switch light mode</button>
            </nav>
            <p className='create-profile'>
                    <span className='to-orange'>Create</span> <span className='to-yellow'>your</span> <span className='to-orange'>profile</span>
            </p>
            <div className="bigBox">
                <form action="profile" method="POST">
                    {/* <input type="text" placeholder="name"></input>
                    <input type="text" placeholder="age"></input>
                    <input type="text" placeholder="gender"></input>
                    <input type="text" placeholder="university"></input>
                    <input type="text" placeholder="bed time"></input>
                    <input type="text" placeholder="introvert / extrovert"></input>
                    <input type="text" placeholder="height"></input>
                    <input type="text" placeholder="weight"></input>
                    <input type="text" placeholder="net worth"></input>
                    <input type="text" placeholder="budget range"></input>
                    <input type="text" placeholder="race"></input>
                    <input type="text" placeholder="religion"></input> */}
                    <input type="file" id="uploadBgInput" hidden="hidden"></input>
                    <button type="button" id="uploadBgButton" className="uploadBg">Add Image</button>
                    {/* <script type="text/javascript">
                        const uploadBgInput = document.getElementById("uploadBgInput");
                        const uploadBgButton = document.getElementById("uploadBgButtton");
                        uploadBgButton.addEventListener("click", function() {
                            uploadBgInput.click()
                        });
                    </script> */}
                    <input type="file" id="uploadPpInput" hidden="hidden"></input>
                    <button type="button" id="uploadPpButton" className="uploadPp">Add Image</button>
                    {/* <script type="text/javascript">
                        const uploadPpInput = document.getElementById("uploadPpInput");
                        const uploadPpButton = document.getElementById("uploadPpButtton");
                        uploadPpButton.addEventListener("click", function() {
                            uploadPpInput.click()
                        });
                    </script> */}
                    <input type="text" placeholder="Full Name" className="nameInput"></input>
                    <input type="text" placeholder="Age" className="ageInput"></input>
                    <br></br>
                    <label className="budgetFromLabel">Budget From £</label>
                    <label className="budgetToLabel">To</label>
                    <input type="text" className="budgetFromInput"></input>
                    <input type="text" className="budgetToInput"></input>
                    <br></br>
                    <label className="aboutLabel">About You</label>
                    <br></br>
                    <textarea type="text" className="aboutInput"></textarea>
                </form>
            </div> 
        </div>
    )
}

export default YourProfile