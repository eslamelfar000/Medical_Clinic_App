import React from 'react'
import './Home_test.css'

import { Swiper, SwiperSlide } from "swiper/react";
import img from '../../../assets/box.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import img1 from '../../../assets/person-1.jpg'
import img2 from '../../../assets/person-2.jpg'
import img3 from '../../../assets/person-3.jpg'
import img4 from '../../../assets/person-4.jpg'
import img5 from '../../../assets/person-5.jpg'
import img6 from '../../../assets/person-6.jpg'


import icon_1 from '../../../assets/icon_2.png'
import icon_2 from '../../../assets/icon_4.png'
import icon_3 from '../../../assets/icon_9.png'
import icon_4 from '../../../assets/icon_18.png'
import icon_5 from '../../../assets/icon_16.png'

function Home_test() {
    return (
        <div className='test'>
            <div className="container">
                <div className="intro">
                    <span>Testimonial</span>
                    <h1>See What Are The Patients</h1>
                    <h1>Saying About us</h1>
                </div>
                <div className="row">
                    <div className="colom col-12 col-xl-6">
                        <div className="test-info">
                            <img src={img} alt="" className='img-box' />
                            <ul>
                                <li className='li-img-1'>
                                    <img src={img1} alt="" />
                                </li>
                                <li className='li-img-2' >
                                    <img src={img2} alt="" />
                                </li>
                                <li className='li-img-3'>
                                    <img src={img3} alt="" />
                                </li>
                                <li className='li-img-4' >
                                    <img src={img4} alt="" />
                                </li>
                                <li className='li-img-5'>
                                    <img src={img5} alt="" />
                                </li>
                                <li className='li-img-6' >
                                    <img src={img6} alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="colom slide-col  col-11 col-xl-6">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            navigation={true}
                            loop={true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="slide-content">
                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.</p>
                                    <h1>Jhon Deo</h1>
                                    <span>PATIENT</span>
                                    <i className="fa fa-quote-right" aria-hidden="true"></i>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-content">
                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.</p>
                                    <h1>Jhon Deo</h1>
                                    <span>PATIENT</span>
                                    <i className="fa fa-quote-right" aria-hidden="true"></i>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-content">
                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.</p>
                                    <h1>Jhon Deo</h1>
                                    <span>PATIENT</span>
                                    <i className="fa fa-quote-right" aria-hidden="true"></i>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-content">
                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.</p>
                                    <h1>Jhon Deo</h1>
                                    <span>PATIENT</span>
                                    <i className="fa fa-quote-right" aria-hidden="true"></i>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-content">
                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.</p>
                                    <h1>Jhon Deo</h1>
                                    <span>PATIENT</span>
                                    <i className="fa fa-quote-right" aria-hidden="true"></i>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-content">
                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.</p>
                                    <h1>Jhon Deo</h1>
                                    <span>PATIENT</span>
                                    <i className="fa fa-quote-right" aria-hidden="true"></i>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-content">
                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.</p>
                                    <h1>Jhon Deo</h1>
                                    <span>PATIENT</span>
                                    <i className="fa fa-quote-right" aria-hidden="true"></i>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-content">
                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.</p>
                                    <h1>Jhon Deo</h1>
                                    <span>PATIENT</span>
                                    <i className="fa fa-quote-right" aria-hidden="true"></i>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            <img src={icon_1} alt="" className='icon_1' />
            <img src={icon_2} alt="" className='icon_2' />
            <img src={icon_3} alt="" className='icon_3' />
            <img src={icon_4} alt="" className='icon_4' />
            <img src={icon_5} alt="" className='icon_5' />
        </div>
    )
}

export default Home_test
