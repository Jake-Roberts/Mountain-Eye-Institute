'use client'
import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
    return (
        <div className='navContainer'>
            <nav className='navBar'>
                <ul>
                    <li> <a href="#gallery">Home</a></li>
                    <li><a href="#dop">About us</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li className='logo'>logo</li>
                    <li><a href="#contact">Contact us</a></li>
                    <li> <a href="">Patient Portal</a></li>
                    <li> <a href="">Forms</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
