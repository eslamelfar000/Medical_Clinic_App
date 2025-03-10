import React from 'react'
import './Header.css'
import image from '../../../assets/intro.png'
import icon_1 from '../../../assets/icon_1.png'
import icon_2 from '../../../assets/icon_2.png'
import icon_3 from '../../../assets/icon_3.png'
import icon_4 from '../../../assets/icon_4.png'
import icon_5 from '../../../assets/icon_5.png'


function Header() {
    return (
        <div className='header'>
            <div className="cover">
                <div className="container">
                    <div className="row">
                        <div className="header-col col-12 col-lg-6">
                            <div className="info">
                                <span>We Provide All Health Care Solution</span>
                                <h1>Protect Your Health And Take Care To Of Your Health</h1>
                                <a href="#" className='read'>Read More</a>
                            </div>
                        </div>
                        <div className="header-col col-12 col-lg-6">
                            <div className="image">
                                <img src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <img src={icon_1} alt="" className='icon_1' />
                <img src={icon_2} alt="" className='icon_2' />
                <img src={icon_3} alt="" className='icon_3' />
                <img src={icon_4} alt="" className='icon_4' />
                <img src={icon_5} alt="" className='icon_5' />
            </div>
        </div>
    )
}

export default Header
