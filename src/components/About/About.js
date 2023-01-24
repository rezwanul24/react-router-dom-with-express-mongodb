import React from 'react';
import useTitle from '../../hooks/useTitle';


const About = () => {
    useTitle('About title')
    return (
        <div>
            
            <h2>This is about</h2>
        </div>
    );
};

export default About;