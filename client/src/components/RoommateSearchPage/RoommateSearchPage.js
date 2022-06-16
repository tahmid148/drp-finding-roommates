import React, { useEffect, useState } from 'react';
import userService from '../../services/user';
import './RoommateSearchPage.css';

const RoommateSearchPage = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        userService.getAll().then(initialUsers => {
            setUsers(initialUsers)
        })
    }, [])
    return (
        <div>
            <h2>Roommate Search Page</h2>
            <div className='container'>
                <div className='filterbox'>
                    <h3>Filter</h3>
                    <form>
                        <label>Male</label>
                        <input type="checkbox" id="male" name='male' value='male'/><br></br><br></br>
                        <label>Female</label>
                        <input type="checkbox" id="female" name='female' value='female'/><br></br><br></br>
                        <label>Introvert</label>
                        <input type="checkbox" id="introvert" name='introvert' value='introvert'/><br></br><br></br>
                        <label>Extravert</label>
                        <input type="checkbox" id="extravert" name='extravert' value='extravert'/><br></br><br></br>
                        <label>Day Person</label>
                        <input type="checkbox" id="day-person" name='day-person' value='day-person'/><br></br><br></br>
                        <label>Night Person</label>
                        <input type="checkbox" id="night-person" name='night-person' value='night-person'/><br></br><br></br>
                        <label>Smokes</label>
                        <input type="checkbox" id="smokes" name='smokes' value='smokes'/><br></br><br></br>
                        <label>Pets</label>
                        <input type="checkbox" id="pets" name='pets' value='pets'/><br></br><br></br>
                    </form>
                </div>
                <div className='userbox'>
                    {users.map(user => {
                        return (
                            <div className='user-card' key={user.id}>
                                {user.name} - {user.age}
                            </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default RoommateSearchPage