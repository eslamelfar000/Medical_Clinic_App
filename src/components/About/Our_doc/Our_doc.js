import React from 'react'
import './Our_doc.css'

import image_1 from '../../../assets/person-1.jpg'
import image_2 from '../../../assets/person-2.jpg'
import image_3 from '../../../assets/person-3.jpg'

import { Link } from 'react-router-dom'

import icon_1 from '../../../assets/icon_7.png'
import icon_2 from '../../../assets/icon_8.png'
import icon_3 from '../../../assets/icon_9.png'
import icon_4 from '../../../assets/icon_16.png'


function Our_doc() {
    return (
        <div className='our-doc'>
            <div className="container">
                <div className="row">
                    <div className="our-intro">
                        <span>Our Doctor</span>
                        <h1>Meet Best Doctors</h1>
                    </div>
                    <div className="col-10 col-md-6 col-lg-3">
                        <div className="our-info">
                            <div className="our-image">
                                <img src={image_1} alt="" />
                            </div>
                            <h2>Dr. David Benjamin</h2>
                            <span>Dentist</span>

                            <ul>
                                <li>
                                    <Link to="#"><i className='fa fa-twitter'></i></Link>
                                </li>
                                <li>
                                    <Link to='#'><i className='fa fa-instagram'></i></Link>
                                </li>
                                <li>
                                    <Link to='#'><i className='fa fa-linkedin'></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-10 col-md-6 col-lg-3">
                        <div className="our-info our-active">
                            <div className="our-image">
                                <img src={image_2} alt="" />
                            </div>
                            <h2>Dr. Addition Smith</h2>
                            <span>Chiropractor</span>

                            <ul>
                                <li>
                                    <Link to="#"><i className='fa fa-twitter'></i></Link>
                                </li>
                                <li>
                                    <Link to='#'><i className='fa fa-instagram'></i></Link>
                                </li>
                                <li>
                                    <Link to='#'><i className='fa fa-linkedin'></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-10 col-md-6 col-lg-3">
                        <div className="our-info">
                            <div className="our-image">
                                <img src={image_3} alt="" />
                            </div>
                            <h2>Dr. Mahfuz Riad</h2>
                            <span>Cardiologist</span>

                            <ul>
                                <li>
                                    <Link to="#"><i className='fa fa-twitter'></i></Link>
                                </li>
                                <li>
                                    <Link to='#'><i className='fa fa-instagram'></i></Link>
                                </li>
                                <li>
                                    <Link to='#'><i className='fa fa-linkedin'></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <img src={icon_1} alt="" className='icon_1' />
            <img src={icon_2} alt="" className='icon_2' />
            <img src={icon_3} alt="" className='icon_3' />
            <img src={icon_4} alt="" className='icon_4' />
        </div>
    )
}


export default Our_doc
