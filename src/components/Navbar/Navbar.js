import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import logo_2 from '../../assets/logo_2.png'

import { Link } from 'react-router-dom'

function Navbar() {

    const open = () => {
        let item_open = document.querySelector('#search')
        item_open.classList.add('open')
    }

    const remove = () => {
        let item_close = document.querySelector('#search')
        item_close.classList.remove('open');
    }


    const scrollChange = () => {
        let nav = document.querySelector('.nav');
        if (window.scrollY > 10) {
            nav.style.background = "white"
            nav.style.padding = "10px 0px"
            nav.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 0px 40px 0px"
        }

        else {
            nav.style.background = "transparent"
            nav.style.padding = "20px 0px"
            nav.style.boxShadow = "0px 0px 0px 0px"
        }
    };

    window.addEventListener('scroll', scrollChange);



    const openSidebar = () => {
        let sidebar = document.querySelector('.sidebar')
        let overflow = document.querySelector('.overflow')
        sidebar.style.left = '0'
        overflow.style.right = '0'
        overflow.style.opacity = '1'
        sidebar.style.opacity = '1'
        sidebar.style.visibility = 'visible'
    }

    const closeSidebar = () => {
        let sidebar = document.querySelector('.sidebar')
        let overflow = document.querySelector('.overflow')
        sidebar.style.left = "-90%"
        overflow.style.right = '-100%'
        overflow.style.opacity = '0'
        sidebar.style.opacity = '0'
        sidebar.style.visibility = 'hidden'

    }


    const openList_1 = () => {
        let sideDown = document.querySelector('.side-1')
        let icon = document.querySelector('.icon-1')
        sideDown.classList.toggle('active')
        icon.classList.toggle('icon-active')
    }
    const openList_2 = () => {
        let sideDown = document.querySelector('.side-2')
        let icon = document.querySelector('.icon-2')
        sideDown.classList.toggle('active')
        icon.classList.toggle('icon-active')
    }
    const openList_3 = () => {
        let sideDown = document.querySelector('.side-3')
        let icon = document.querySelector('.icon-3')
        sideDown.classList.toggle('active')
        icon.classList.toggle('icon-active')
    }

    return (
        <div className='nav'>
            <div className="container">
                <div className="navigate">
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="" /></Link>
                    </div>
                    <div className="links">
                        <ul className='first_ul'>
                            <li className='first_li move'>
                                <Link to="/" className='first_link'>Home</Link>
                            </li>


                            <li className='first_li page move'>
                                <span className='first_link'>Pages <i className="fa fa-plus" aria-hidden="true"></i></span>
                                <ul className='sec_ul pages'>
                                    <li className='sec_li'>
                                        <Link to="/about" className='link'>About Us</Link>
                                    </li>
                                    <li className='sec_li'>
                                        <Link to="/team" className='link'>Our Team</Link>
                                    </li>
                                    <li className='sec_li'>
                                        <Link to="/faq" className='link'>FAQ's</Link>
                                    </li>
                                    <li className='sec_li'>
                                        <Link to="/booking" className='link'>Booking</Link>
                                    </li>
                                    <li className='sec_li'>
                                        <Link to="/error" className='link'>Error 404</Link>
                                    </li>
                                    <li className='sec_li'>
                                        <Link to="/login" className='link'>Login / Register</Link>
                                    </li>
                                </ul>
                            </li>


                            <li className='first_li service move'>
                                <span className='first_link'>Services <i className="fa fa-plus" aria-hidden="true"></i></span>
                                <ul className='sec_ul services'>
                                    <li className='sec_li'>
                                        <Link to="/service" className='link'>Service</Link>
                                    </li>
                                    <li className='sec_li'>
                                        <Link to="/service-details" className='link'>Service Detail</Link>
                                    </li>
                                </ul>
                            </li>


                            <li className='first_li blog move'>
                                <span className='first_link'>Blog <i className="fa fa-plus" aria-hidden="true"></i></span>
                                <ul className='sec_ul blogs'>
                                    <li className='sec_li'>
                                        <Link to="/" className='link'>Blogs</Link>
                                    </li>
                                    <li className='sec_li'>
                                        <Link to="/" className='link'>Blog Detail</Link>
                                    </li>
                                </ul>
                            </li>


                            <li className='first_li'>
                                <i className="fa fa-search" aria-hidden="true" onClick={open}></i>
                                <i className="fa fa-bars" id='menu' onClick={openSidebar} aria-hidden="true"></i>
                            </li>

                            <li className='first_li move'>
                                <Link to="/" className='contact'>Contact Us <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="cover_search" id='search'>
                <i className="fa fa-close" aria-hidden="true" onClick={remove}></i>
                <div className="search_cover">
                    <input type="search" placeholder='Type to search...' />
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
            </div>



            <div className="sidebar">
                <div className="side-content">
                    <div className="close">
                        <Link to="/"><img src={logo_2} alt="" /></Link>
                        <i className="fa fa-times" onClick={closeSidebar} id='closeItem' aria-hidden="true"></i>
                    </div>
                    <ul className='side-first-ul'>
                        <li className='side-li'>
                            <Link to="/" className='home'>Home</Link>
                        </li>
                        <li className='side-li'>
                            <div className="link-content" onClick={openList_1} >
                                <h4>Pages</h4>
                                <i className="fa fa-angle-down icon-1" aria-hidden="true"></i>
                            </div>
                            <div className="side-down side-1">
                                <ul className='down-ul'>
                                    <li>
                                        <Link to="/about">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Our Team</Link>
                                    </li>
                                    <li>
                                        <Link to="/">FAQ's</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Booking</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Error 404</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Login / Register</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='side-li'>
                            <div className="link-content" onClick={openList_2}>
                                <h4>Services</h4>
                                <i className="fa fa-angle-down icon-2" aria-hidden="true"></i>
                            </div>
                            <div className="side-down side-2">
                                <ul className='down-ul'>
                                    <li>
                                        <Link to="/">Service</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Service Detail</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='side-li'>
                            <div className="link-content" onClick={openList_3}>
                                <h4>Blogs</h4>
                                <i className="fa fa-angle-down icon-3" aria-hidden="true"></i>
                            </div>
                            <div className="side-down side-3">
                                <ul className='down-ul'>
                                    <li>
                                        <Link to="/">Blogs</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Blogs Detail</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='li-contact'>
                            <Link to="/home" className='contact side-contact'>Contact Us <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                        </li>
                    </ul>


                    <ul className='last'>
                        <li>
                            <Link to="/" className='face'>
                                <i className='fa fa-facebook'></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className='fa fa-twitter'></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className='fa fa-instagram'></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className='fa fa-linkedin'></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className='fa fa-google'></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="overflow">

            </div>
        </div>
    )
}

export default Navbar
