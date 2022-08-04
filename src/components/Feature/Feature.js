import React from 'react';
import './Feature.css';
import feature from '../../assets/pic3.png';
import { Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Feature = () => {
    return (
        <section className='px-3 lg:px-32 lg:flex justify-between items-center my-14'>
            <div>
                <img src={feature} alt="feature-img" />
            </div>
            <div className='lg:w-5/12'>
                <h2 className='section-heading text-white mb-8 text-center lg:text-left'>Latest Review</h2>
                <Swiper
                    modules={[Pagination, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}>
                    <SwiperSlide>
                        <div className='mb-16 text-justify slider-container'>
                            <div className='slider-info'>
                                <p>There are many variations of passages of reoren many of casum available but the majority have suffere. There are many variations of passages of goremy.</p>
                                <div className='flex items-center mt-6 star'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <span className='ml-3 text-white font-semibold'>5.0</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mb-16 text-justify slider-container'>
                            <div className='slider-info'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, praesentium ullam! Id enim quis nostrum eligendi autem at, nulla dolores, doloremque possimus expedita illum perspiciatis.</p>
                                <div className='flex items-center mt-6 star'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />
                                    <span className='ml-3 text-white font-semibold'>4.5</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mb-16 text-justify slider-container'>
                            <div className='slider-info'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, praesentium ullam! Id enim quis nostrum eligendi autem at, nulla dolores, doloremque possimus expedita illum perspiciatis.</p>
                                <div className='flex items-center mt-6 star'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <span className='ml-3 text-white font-semibold'>5.0</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mb-16 text-justify slider-container'>
                            <div className='slider-info'>
                                <p>There are many variations of passages of reoren many of casum available but the majority have suffere. There are many variations of passages of goremy.</p>
                                <div className='flex items-center mt-6 star'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaRegStar />
                                    <span className='ml-3 text-white font-semibold'>4.0</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mb-16 text-justify slider-container'>
                            <div className='slider-info'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, praesentium ullam! Id enim quis nostrum eligendi autem at, nulla dolores, doloremque possimus expedita illum perspiciatis.</p>
                                <div className='flex items-center mt-6 star'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />
                                    <span className='ml-3 text-white font-semibold'>4.5</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </section>
    );
};

export default Feature;