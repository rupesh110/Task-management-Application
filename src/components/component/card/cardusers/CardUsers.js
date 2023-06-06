import React from 'react';

import {FaUserCircle } from "react-icons/fa";

import './cardusers.css';
import { DataContext } from '../../../../data/DataContext';


export default function CardUsers({ users }) {
    const {selectedUsers, setSelectedUsers} = React.useContext(DataContext);

    const handleUsers = (user) => {
        setSelectedUsers(user);
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
                <p onClick={() => handleUsers(user.user)}>{user.user}</p>
            </div>
            </div>
        ))}
        </div>
    );
    }