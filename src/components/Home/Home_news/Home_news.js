import React from 'react'
import './Home_news.css'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from 'swiper'

import person_1 from '../../../assets/person-1.jpg'
import person_2 from '../../../assets/person-2.jpg'
import person_3 from '../../../assets/person-3.jpg'
import person_4 from '../../../assets/person-4.jpg'
import person_5 from '../../../assets/person-5.jpg'


import img_1 from '../../../assets/slide-pic-1.jpg'
import img_2 from '../../../assets/slide-pic-2.jpg'
import img_3 from '../../../assets/slide-pic-3.jpg'
import img_4 from '../../../assets/slide-pic-4.jpg'
import img_5 from '../../../assets/slide-pic-5.jpg'

function Home_news() {
    return (
        <div className='news'>
            <div className="container">
                <div className="intro">
                    <span>Latest News</span>
                    <h1>Our Latest News</h1>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-10">
                        <Swiper
                            slidesPerView={3.07}
                            spaceBetween={30}
                            loop={true}
                            className="mySwiper"
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1
                                },
                                767: {
                                    slidesPerView: 2
                                },
                                1400: {
                                    slidesPerView: 3
                                }

                            }
                            }
                        >
                            <SwiperSlide>
                                <div className="news-slide-content">
                                    <div className="slide-img">
                                        <a href="#" className='img-a'>
                                            <img src={img_1} alt="" />
                                        </a>
                                    </div>

                                    <div className="slide-intro">
                                        <div className="first-line">
                                            <div>
                                                <a href="#" className='doc-name'>
                                                    <img src={person_1} alt="" />
                                                    <h3>Kalina Mollika</h3>
                                                </a>
                                            </div>
                                            <span><i className="fa fa-calendar" aria-hidden="true"></i> 18 July 2022</span>
                                        </div>
                                        <a href="#" className='h2'> <h2>Dental Care for Women is very important</h2></a>
                                        <div className="read">
                                            <a href="#" className='more'>Read more <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="news-slide-content">
                                    <div className="slide-img">
                                        <a href="#" className='img-a'>
                                            <img src={img_2} alt="" />
                                        </a>
                                    </div>

                                    <div className="slide-intro">
                                        <div className="first-line">
                                            <div>
                                                <a href="#" className='doc-name'>
                                                    <img src={person_2} alt="" />
                                                    <h3>Kalina Mollika</h3>
                                                </a>
                                            </div>
                                            <span><i className="fa fa-calendar" aria-hidden="true"></i> 23 Aug 2022</span>
                                        </div>
                                        <a href="#" className='h2'> <h2>Why Is Skin Surgeon Considered Underrated</h2></a>
                                        <div className="read">
                                            <a href="#" className='more'>Read more <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="news-slide-content">
                                    <div className="slide-img">
                                        <a href="#" className='img-a'>
                                            <img src={img_3} alt="" />
                                        </a>
                                    </div>

                                    <div className="slide-intro">
                                        <div className="first-line">
                                            <div>
                                                <a href="#" className='doc-name'>
                                                    <img src={person_3} alt="" />
                                                    <h3>John deo</h3>
                                                </a>
                                            </div>
                                            <span><i className="fa fa-calendar" aria-hidden="true"></i> 10 Oct 2022</span>
                                        </div>
                                        <a href="#" className='h2'> <h2>Can you get a diflucan prescription online?</h2></a>
                                        <div className="read">
                                            <a href="#" className='more'>Read more <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="news-slide-content">
                                    <div className="slide-img">
                                        <a href="#" className='img-a'>
                                            <img src={img_4} alt="" />
                                        </a>
                                    </div>

                                    <div className="slide-intro">
                                        <div className="first-line">
                                            <div>
                                                <a href="#" className='doc-name'>
                                                    <img src={person_4} alt="" />
                                                    <h3>Micheal</h3>
                                                </a>
                                            </div>
                                            <span><i className="fa fa-calendar" aria-hidden="true"></i> 11 Nov 2022</span>
                                        </div>
                                        <a href="#" className='h2'> <h2>Health Will Be A Thing Of The Past And Here's Why</h2></a>
                                        <div className="read">
                                            <a href="#" className='more'>Read more <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="news-slide-content">
                                    <div className="slide-img">
                                        <a href="#" className='img-a'>
                                            <img src={img_5} alt="" />
                                        </a>
                                    </div>

                                    <div className="slide-intro">
                                        <div className="first-line">
                                            <div>
                                                <a href="#" className='doc-name'>
                                                    <img src={person_5} alt="" />
                                                    <h3>Peter Packer</h3>
                                                </a>
                                            </div>
                                            <span><i className="fa fa-calendar" aria-hidden="true"></i> 25 Feb 2022</span>
                                        </div>
                                        <a href="#" className='h2'> <h2>In this hospital there are special surgeon</h2></a>
                                        <div className="read">
                                            <a href="#" className='more'>Read more <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home_news
