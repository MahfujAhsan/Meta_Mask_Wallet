import React from 'react';
import './Home.css';
import icon from '../../assets/ethereum_icon.png';
import hero from '../../assets/main_logo.png';
import background from '../../assets/background-paw.png';
import { Link } from 'react-router-dom';
import { IoPlayForward } from 'react-icons/io5';

const Home = () => {
    return (
        <section className='lg:flex justify-between items-center home-section px-3 lg:px-32 pt-16'>
            <img className='background hidden lg:block lg:absolute top-24 left-96' src={background} alt="background" />
            <div className='lg:w-5/12 text-center lg:text-left'>
                <h2 className='home-sub-heading text-white w-11/12 lg:w-auto mx-auto'><img src={icon} alt="icon" /> PLAY MORE EARN MORE</h2>
                <div className='home-heading text-white mt-8'>
                    <h1>PLAY</h1>
                    <h1>
                        <span className='inline-block'>F</span>
                        <span className='inline-block'>O</span>
                        <span className='inline-block'>R</span>
                    </h1>
                    <h1>EARN</h1>
                </div>
                <div className='lg:flex items-center gap-8 mt-8 w-6/12 mx-auto lg:w-auto lg:mx-0'>
                    <div className='sign-btn-container'>
                        <button className='sign-btn font-semibold text-white'><Link to="#">Get A Free Trail</Link></button>
                    </div>
                    <button className='lg:flex items-center gap-3 font-semibold learn-btn my-6 lg:my-0'>Learn More <IoPlayForward className='inline'/></button>
                </div>
            </div>
            <div className='lg:w-5/12 relative'>
                <div className=''>
                    <img className='w-full' src={hero} alt="hero-img" />
                </div>
                <img className='background hidden lg:block absolute top-2/4 -left-1/4' src={background} alt="background" />
                <img className='background hidden lg:block absolute top-0 -left-1/4' src={background} alt="background" />
                <img className='background hidden lg:block absolute bottom-0 ' src={background} alt="background" />
            </div>
        </section>
    );
};

export default Home;