import React from 'react';
import './About.css';
import img1 from '../../assets/pic1.png';
import img2 from '../../assets/pic2.png';
import img3 from '../../assets/pic_2.png';
import { IoPlayForward } from 'react-icons/io5';

const About = () => {
    return (
        <section className='card-container p-3 lg:p-32'>
            <div className='text-center'>
                <h2 className='section-heading mb-8 text-white'>Top Characters</h2>
            </div>
            <div className='grid lg:grid-cols-3 gap-x-8 gap-y-6 lg:gap-y-0 text-center'>
                <div className='character-card'>
                    <div className='card-info'>
                        <img src={img1} alt="luna" />
                        <h2>Luna Bella</h2>
                        <p>Leading NFT platform to get all of the details about secret upcoming.</p>
                        <button className='flex justify-center items-center gap-3 font-semibold learn-btn w-full'>Learn More <IoPlayForward /></button>
                    </div>
                </div>
                <div className='middle-card'>
                    <div className='card-info'>
                        <img className="w-" src={img2} alt="luna" />
                        <h2>Leo Charlie</h2>
                        <p>Leading NFT platform to get all of the details about secret upcoming.</p>
                        <button className='flex justify-center items-center gap-3 font-semibold learn-btn w-full'>Learn More <IoPlayForward /></button>
                    </div>
                </div>
                <div className='character-card'>
                    <div className='card-info'>
                        <img className="w-" src={img3} alt="luna" />
                        <h2>Lucy Oliver</h2>
                        <p>Leading NFT platform to get all of the details about secret upcoming.</p>
                        <button className='flex justify-center items-center gap-3 font-semibold learn-btn w-full'>Learn More <IoPlayForward /></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;