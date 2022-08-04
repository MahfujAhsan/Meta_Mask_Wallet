import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/oneobit.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='lg:flex justify-between items-center px-3 lg:px-32'>
            <div className='w-6/12 mx-auto lg:mx-0 lg:w-2/12'>
                <img src={logo} alt="site-logo" />
            </div>
            <div className='nav-items-container lg:w-6/12 border my-6 lg:my-0'>
                <ul className='lg:flex justify-between text-white font-semibold nav-items text-center'>
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Feature</Link></li>
                    <li><Link to="#">Team</Link></li>
                </ul>
            </div>
            <div className='sign-btn-container w-4/12 mx-auto lg:mx-0 lg:w-auto'>
                <button className='sign-btn font-semibold text-white'><Link to="#">Sign In</Link></button>
            </div>
        </nav>
    );
};

export default Navbar;