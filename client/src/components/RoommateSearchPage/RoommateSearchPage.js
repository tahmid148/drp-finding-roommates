import React, { useEffect, useState } from 'react';
import userService from '../../services/user';
import './RoommateSearchPage.css';

const RoommateSearchPage = () => {
    const [users, setUsers] = useState([])
    const [allUsers, setAllUsers] = useState([])
    
    useEffect(() => {
        userService.getAll().then(initialUsers => {
            setUsers(initialUsers)
            setAllUsers(initialUsers)
        })
    }, [])

    const filterWithId = (id) => {
        if(id === 'male' || id === 'female') {
                setUsers(users.filter(user => user.gender === id));
            } else if (id === 'introvert' || id === 'extravert') {
                setUsers(users.filter(user => user.personality === id))
            } else if (id === 'day-person' || id === 'night-person') {
                setUsers(users.filter(user => user.lifestyle === id))
            } else if (id === 'smokes') {
                setUsers(users.filter(user => user.smokes === id))
            } else if (id === 'pets') {
                setUsers(users.filter(user => user.pets === id))
            }
    }
    const filterPreference = (event) => {
        const allBoxes = document.getElementsByName('form-elem')
        const checkboxId = event.target.id
        if(document.querySelector(`#${checkboxId}`).checked) {
            filterWithId(checkboxId)
        } else {
            setUsers(allUsers)
            for (let i = 0; i < allBoxes.length; i++) {
                const id = allBoxes[i].id;
                if(document.querySelector(`#${id}`).checked) {
                    filterWithId(id)
                }
                
            }
        }
    }
    return (
        <div>
            <h2>Roommate Search Page</h2>
            <div className='container'>
                <div className='filterbox'>
                    <h3>Filter</h3>
                    <form>
                        <label>Male</label>
                        <input onClick={filterPreference} type="checkbox" id="male" name='form-elem' value='male'/><br></br><br></br>
                        <label>Female</label>
                        <input onClick={filterPreference}type="checkbox" id="female" name='form-elem' value='female'/><br></br><br></br>
                        <label>Introvert</label>
                        <input onClick={filterPreference}type="checkbox" id="introvert" name='form-elem' value='introvert'/><br></br><br></br>
                        <label>Extravert</label>
                        <input onClick={filterPreference}type="checkbox" id="extravert" name='form-elem' value='extravert'/><br></br><br></br>
                        <label>Day Person</label>
                        <input onClick={filterPreference}type="checkbox" id="day-person" name='form-elem' value='day-person'/><br></br><br></br>
                        <label>Night Person</label>
                        <input onClick={filterPreference}type="checkbox" id="night-person" name='form-elem' value='night-person'/><br></br><br></br>
                        <label>Smokes</label>
                        <input onClick={filterPreference}type="checkbox" id="smokes" name='form-elem' value='smokes'/><br></br><br></br>
                        <label>Pets</label>
                        <input onClick={filterPreference}type="checkbox" id="pets" name='form-elem' value='pets'/><br></br><br></br>
                    </form>
                </div>
                <div className='userbox'>
                    {users.map(user => {
                        return (
                            <div className='user-card' key={user.id}>
                                <ul className='list-one'>
                                    <p><strong>Name:</strong> {user.name}</p> 
                                    <p><strong>Age:</strong> {user.age}</p> 
                                    <p><strong>Info:</strong> {user.info}</p> 
                                </ul>
                                <button className='view-more-btn'>View More</button>
                            </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default RoommateSearchPage