import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/oneobit.png';

const Footer = () => {
    return (
        <section className='lg:px-32 lg:flex gap-x-6 items-center justify-between'>
            <div>
                <div className='lg:flex flex-col gap-y-6 lg:gap-y-2 lg:w-10/12'>
                    <div className='flex justify-center lg:justify-start items-center gap-x-6'>
                        <img src={logo} alt="" />
                        <h1 className='footer-heading text-white'>Digital Agency</h1>
                    </div>
                    <p className='w-10/12 mx-auto lg:mx-0 text-center lg:text-left text-white mt-6 lg:mt-0'>NFT's are transforming the way commerce is a transacted.</p>
                </div>
            </div>
            <div className='lg:flex items-center justify-between gap-x-16 links-container mt-6 lg:mt-0'>
                <div className='text-center lg:text-left'>
                    <h2>Quick Links</h2>
                    <div className='flex flex-col'>
                        <Link to="#">Protocol Explore</Link>
                        <Link to="#">System Token</Link>
                    </div>
                </div>
                <div className='text-center lg:text-left'>
                    <h2>Information</h2>
                    <div className='flex flex-col'>
                        <Link to="#">Protocol Explore</Link>
                        <Link to="#">System Token</Link>
                    </div>
                </div>
                <div className='text-center lg:text-left'>
                    <h2>Company</h2>
                    <div className='flex flex-col'>
                        <Link to="#">Protocol Explore</Link>
                        <Link to="#">System Token</Link>
                    </div>
                </div>
                <div className='text-center lg:text-left'>
                    <h2>Social Media</h2>
                    <div className='flex flex-col'>
                        <Link to="#">Protocol Explore</Link>
                        <Link to="#">System Token</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;