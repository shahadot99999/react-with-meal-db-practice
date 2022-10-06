import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <Link to='/home'>Home</Link>

                <Link to='/restaurants'>restaurants</Link>
                <Link to='/meals'>meal</Link>
                <Link to='/about'>About</Link>
            </nav>
            <h4>This is the common header.</h4>

        </div>
    );
};

export default Header;