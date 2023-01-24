import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    
    return (
        <div>
            
            <NavLink className={({isActive})=>{
                return isActive? "active": undefined;
            }} to="/home">Home</NavLink>|
            <NavLink className={({isActive})=>{
                return isActive? "active": undefined;
            }} to="/about">About</NavLink>|
            <NavLink className={({isActive})=>{
                return isActive? "active": undefined;
            }} to="/contact">Contact</NavLink>|
            <NavLink className={({isActive})=>{
                return isActive? "active": undefined;
            }} to="/location">Location</NavLink>|
            <NavLink className={({isActive})=>{
                return isActive? "active": undefined;
            }} to="/posts">Posts</NavLink>|
            <NavLink className={({isActive})=>{
                return isActive? "active": undefined;
            }} to="/ceos">Ceos</NavLink>
        </div>
    );
};

export default Header;