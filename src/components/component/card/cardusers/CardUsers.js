import React from 'react';

import {FaUserCircle } from "react-icons/fa";

import './cardusers.css';

export default function CardUsers({ users }) {

    const handleUsers = (fullname) => {
        alert(`users clicked ${fullname}`);
    }
    return (
        <div className='cardUsersContainer'>
        {users.map((user, index) => (
            <div key={index} className='cardUsers'>
            <div className='cardUsersImage'>
                    {/* <img src={user.image} alt={user.name} /> */}
                    <FaUserCircle size={40}/>
            </div>
            <div className='cardUsersName'>
                <p onClick={() => handleUsers(user.fullname)}>{user.fullname}</p>
            </div>
            </div>
        ))}
        </div>
    );
    }