import React from 'react';
import Header from '../../Header/Header';
import useTitle from '../../hooks/useTitle';


const Posts = () => {
    
    // console.log(posts);
    useTitle('posts')
    return (
        <div>
            <Header></Header>
            
        </div>
    );
};

export default Posts;