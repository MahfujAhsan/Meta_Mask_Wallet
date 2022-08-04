import React from 'react';
import './Team.css';
import { IoPlayForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import trail from '../../assets/pic4.png';

const Team = () => {
    return (
        <section className='p-3 lg:px-32 my-14 lg:flex justify-between items-center trail-container gap-x-12'>
            <div className='w-11/12 mx-auto lg:w-6/12 lg:px-20'>
                <h2 className="section-heading text-white">Get free trail</h2>
                <p className='text-white my-6'>There are many variations of passages of reoren many of casum available but the majority have suffere.</p>
                <input className='py-4 pl-8 rounded-lg w-11/12 mx-auto' type="text" placeholder='Enter your email' />
                <div className='lg:flex items-center gap-8 mt-8 w-6/12 mx-auto lg:w-auto lg:mx-0 text-center'>
                    <div className='sign-btn-container'>
                        <button className='sign-btn font-semibold text-white'><Link to="#">Join Us now</Link></button>
                    </div>
                    <button className='lg:flex items-center gap-3 font-semibold learn-btn my-6 lg:my-0'>Learn More <IoPlayForward className='inline' /></button>
                </div>
            </div>
            <div className='lg:w-6/12 mx-auto trail-image'>
                <img className='p-12'  src={trail} alt="trail-img" />
            </div>
        </section>
    );
};

export default Team;