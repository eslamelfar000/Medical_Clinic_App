import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'


import icon_1 from '../../assets/icon_8.png'
import icon_2 from '../../assets/icon_9.png'
import icon_3 from '../../assets/icon_10.png'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer_cover">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-xl-3">
                            <div className="col_1">
                                <div className="logo">
                                    <a href="#" className='logo_img'>
                                        <img src={logo} alt="" />
                                    </a>
                                </div>
                                <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>

                                <div className="footer-contact">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <div className="contact_info">
                                        <h4>Contact Us</h4>
                                        <h3>+09657 565 2370</h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                            <div className="col_2">
                                <div className="head_h">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#" className='link'>About Us</a>
                                    </li>
                                    <li>
                                        <a href="#" className='link'>Services</a>
                                    </li>
                                    <li>
                                        <a href="#" className='link'>Booking</a>
                                    </li>
                                    <li>
                                        <a href="#" className='link'>Faq's</a>
                                    </li>
                                    <li>
                                        <a href="#" className='link'>Blogs</a>
                                    </li>
                                    <li>
                                        <a href="#" className='link'>Out Team</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                            <div className="col_2">
                                <div className="head_h">
                                    <h3>Our Service</h3>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#" className='link'>Dental Care</a>
                                    </li>
                                    <li>
                                        <a href="#" className='link'>Cardiac Clinic</a>
                                    </li>
                                    <li>
                                        <a href="#" className='link'>Massege Therapy</a>
                                    </li>
                                    <li>
                                        <a href="#" className='link'>Cardiology</a>
                                    </li>
                                    <li>
                                        <a href="#" className='link'>Precise Diagnosis</a>
                                    </li>
                                    <li>
                                        <a href="#" className='link'>Abmbulance Services</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                            <div className="col_3">
                                <div className="head_h">
                                    <h3>Subcribe</h3>
                                </div>

                                <input type="text" placeholder='E-mail Address' />
                                <input type="submit" value="Subscirbe Now" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <footer>
                <p>Copyright © 2022 Design & Developed by <a href="#">Eslam El-far</a></p>
            </footer>


            <img src={icon_1} alt="" className='icon_1' />
            <img src={icon_1} alt="" className='icon_2' />
            <img src={icon_2} alt="" className='icon_3' />
            <img src={icon_3} alt="" className='icon_4' />
        </div>
    )
}

export default Footer
