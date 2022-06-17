import React from 'react';
// import { Link } from 'react-router-dom';
import './YourProfile.css';

export class YourProfile extends React.Component {
    render() {
        return (
            <form action="profile" method="POST">
                <div className='page'>
                    <nav className='navbar'>
                        <p className='create-profile'>
                            <span className='to-orange'>Create</span> <span className='you'>your</span> <span className='to-orange'>profile</span>
                        </p>
                    </nav>

                    <section className='fill-out-form'>
                        <span className='full-name'>
                            Full Name
                            <input className='full-name-answer' type='text' placeholder='Enter Name' name="name"></input>
                        </span>
                        <span className='age'>
                            Age
                            <input className='age-answer' type='number' placeholder='0' name="age"></input>
                        </span>
                        <span className='gender'>
                            Gender
                            <select className='gender-answer' name='gender'>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                            </select>
                        </span>
                        <span className='about-you'>
                            <br></br>
                            About You
                            <textarea className='about-you-answer' type='text'  name="info"
                            placeholder='I am a second year student at Imperial College with a focus in engineering. 
                            I am a day person and I hate late night parties......'>
                            </textarea>
                        </span>
                        <span className='budget1' name="">
                            <br></br>
                            Weekly Budget Range: £
                            <input className='budget-answer1' type='number' placeholder='0' name="budgetMin"></input>
                        </span>
                        <span className='budget2'>
                            <br></br>
                            to
                            <input className='budget-answer2' type='number' placeholder='500' name="budgetMax"></input>
                        </span>
                        {/* <Link to='/roommate-search'> */}
                            <button type="submit" className='next-btn'>
                                Next 
                            </button>
                        {/* </Link> */}
                    </section>
                </div>
            </form>
        );
    }
}