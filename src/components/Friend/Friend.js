import React from 'react';
import { Link } from 'react-router-dom';
import './friend.css'

const Friend = ({friend}) => {
    const {name,id,email,username} = friend;
    // console.log(friend);
    return (
        <div className='user'>
            
            <h4>Name: {name}</h4>
            <h4>Name: {email}</h4>
            <Link to={`/friend/${id}`}>{username}</Link>
        </div>
    );
};

export default Friend;