import React from 'react'
import './Home_working.css'

import icon_1 from '../../../assets/icon_4.png'
import icon_2 from '../../../assets/icon_9.png'
import icon_3 from '../../../assets/icon_11.png'


function Home_working() {
    return (
        <div className='work'>
            <div className="container">
                <div className="row">
                    <div className="intro">
                        <span className='head-span'>Working Process</span>
                        <h1>How we works?</h1>
                    </div>
                    <div className="work-col col-12 col-lg-4 col-xl-3">
                        <div className="work_info diff">
                            <span>01</span>
                            <h3>Make Appointmnet</h3>

                            <p>It is a long established fact that a reader will be distracted by the readable content of.</p>

                            <a href="#">View More <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div className="work-col col-12 col-lg-4 col-xl-3">
                        <div className="work_info active_col">
                            <span>02</span>
                            <h3>Take Treatment</h3>

                            <p>It is a long established fact that a reader will be distracted by the readable content of.</p>

                            <a href="#">View More <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div className="work-col col-12 col-lg-4 col-xl-3">
                        <div className="work_info diff">
                            <span>03</span>
                            <h3>Registration</h3>

                            <p>It is a long established fact that a reader will be distracted by the readable content of.</p>

                            <a href="#">View More <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <img src={icon_1} alt="" className='icon_1' />
            <img src={icon_2} alt="" className='icon_2' />
            <img src={icon_3} alt="" className='icon_3' />
        </div>
    )
}


export default Home_working
