import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    // console.log(post);
    const {title,body,id,userId} = post;
    return (
        <div>
            <h3>Post Id:{id}</h3>
            <h1>Post details of {title}</h1>
            <p>{body}</p>
            <Link to={`/friend/${userId}`}><button>Author</button></Link>
        </div>
    );
};

export default PostDetails;