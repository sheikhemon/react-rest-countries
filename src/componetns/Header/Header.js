import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <ul className='menu'>
                    <a href="/home">Home</a>
                    <a href="/contact">Contact</a>
                    <a href="/about-us">About</a>
                </ul >
            </nav >
        </div >
    );
};

export default Header;