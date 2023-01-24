import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    const {name,username,email} = friend;
    return (
        <div>
            
            <h2>Details of {name}</h2>
            <h3>Name:{name}</h3>
            <h4>Username: {username}</h4>
            <h4>email: {email}</h4>
        </div>
    );
};

export default FriendDetails;