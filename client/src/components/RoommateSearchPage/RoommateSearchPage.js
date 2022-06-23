import React, { useEffect, useState } from 'react';
import userService from '../../services/user';
import './RoommateSearchPage.css';

const RoommateSearchPage = ({state}) => {
    const [colorMode, switchMode] = state
    const [users, setUsers] = useState([])
    const [allUsers, setAllUsers] = useState([])
    const backgroundColor = colorMode ? '#fff' : '#264653'
    const textColor = colorMode ? '#000' : '#fff'
    const backgroundStyle = {
        "backgroundColor": backgroundColor,
        "textColor": textColor,
        "transition": "background 0.8s",
        "marginTop": "0"
    }
    useEffect(() => {
        userService.getAll().then(initialUsers => {
            setUsers(initialUsers)
            setAllUsers(initialUsers)
        })
    }, [])

    const filterWithIds = (idArr) => {
        setUsers(allUsers)

        if(idArr.includes('male') && idArr.includes('female')) {
        } else if (idArr.includes('introvert') && idArr.includes('extravert')) {
        } else if (idArr.includes('day-person') && idArr.includes('night-person')) {
        } else if (idArr.includes('male')) {
            setUsers(users.filter(user => user.gender === 'male'))
        } else if (idArr.includes('female')) {
            setUsers(users.filter(user => user.gender === 'female'))
        } else if (idArr.includes('night-person')) {
            setUsers(users.filter(user => user.lifestyle === 'night-person'))
        } else if (idArr.includes('day-person')) {
            setUsers(users.filter(user => user.lifestyle === 'day-person'))
        } else if (idArr.includes('introvert')) {
            setUsers(users.filter(user => user.personality === 'introvert'))
        } else if (idArr.includes('extravert')) {
            setUsers(users.filter(user => user.personality === 'extravert'))
        } else if (idArr.includes('smokes')) {
            setUsers(users.filter(user => user.smokes === 'yes'))
        } else if (idArr.includes('pets')) {
            setUsers(users.filter(user => user.has_pets === 'yes'))
        }
    }
    const filterPreference = (event) => {
        event.preventDefault()
        let idArr = []
        const allBoxes = document.getElementsByName('form-elem')
        for (let i = 0; i < allBoxes.length; i++) {
            const id = allBoxes[i].id;
            if(document.querySelector(`#${id}`).checked) {
                idArr.push(id)
            }
        }
        filterWithIds(idArr)
        
    }

    const searchFilter = (event) => {
        event.preventDefault()
        const text = document.getElementById('search-text').value
        setUsers(allUsers)
        setUsers(users.filter(user => user.info.includes(text)))
    }

    const resetUsers = () => {
        setUsers(allUsers)
    }

    return (
        <div style={backgroundStyle}>
            <div className='top-container'>
                <h2>Potential Roomates</h2>
                <form className='search-container' onSubmit={searchFilter}>
                    <p>Search By Keyword</p>
                    <input type='text' id='search-text'/>
                    <input type='submit' className='submit-btn'/>
                </form>
                <button className='reset-btn' onClick={resetUsers}>Reset</button>
            </div>
            <div className='container' style={backgroundStyle}>
                <div className='filterbox'>
                    <h3>Filter</h3>
                    <form onSubmit={filterPreference}>
                        <label>Male</label>
                        <input type="checkbox" id="male" name='form-elem' value='male'/><br></br><br></br>
                        <label>Female</label>
                        <input type="checkbox" id="female" name='form-elem' value='female'/><br></br><br></br>
                        <label>Introvert</label>
                        <input type="checkbox" id="introvert" name='form-elem' value='introvert'/><br></br><br></br>
                        <label>Extravert</label>
                        <input type="checkbox" id="extravert" name='form-elem' value='extravert'/><br></br><br></br>
                        <label>Day Person</label>
                        <input type="checkbox" id="day-person" name='form-elem' value='day-person'/><br></br><br></br>
                        <label>Night Person</label>
                        <input type="checkbox" id="night-person" name='form-elem' value='night-person'/><br></br><br></br>
                        <label>Smokes</label>
                        <input type="checkbox" id="smokes" name='form-elem' value='smokes'/><br></br><br></br>
                        <label>Pets</label>
                        <input type="checkbox" id="pets" name='form-elem' value='pets'/><br></br><br></br>
                        <input type="submit" />
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