import React from 'react'
import './Team.css'

import image_1 from '../../../assets/person-1.jpg'
import image_2 from '../../../assets/person-2.jpg'
import image_3 from '../../../assets/person-3.jpg'
import image_4 from '../../../assets/person-4.jpg'
import image_5 from '../../../assets/person-5.jpg'
import image_6 from '../../../assets/person-6.jpg'

import { Link } from 'react-router-dom'

// import icon_1 from '../../../assets/icon_7.png'
// import icon_2 from '../../../assets/icon_8.png'
// import icon_3 from '../../../assets/icon_9.png'
// import icon_4 from '../../../assets/icon_16.png'
// import Sec_header from '../../About/Sec-header/Sec_header'


function Team() {
  return (
    <div className='our-doc'>
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 col-lg-4">
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
          <div className="col-10 col-md-6 col-lg-4">
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
          <div className="col-10 col-md-6 col-lg-4">
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
          <div className="col-10 col-md-6 col-lg-4">
            <div className="our-info">
              <div className="our-image">
                <img src={image_4} alt="" />
              </div>
              <h2>Dr. David Benjamin</h2>
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
          <div className="col-10 col-md-6 col-lg-4">
            <div className="our-info">
              <div className="our-image">
                <img src={image_5} alt="" />
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
          <div className="col-10 col-md-6 col-lg-4">
            <div className="our-info">
              <div className="our-image">
                <img src={image_6} alt="" />
              </div>
              <h2>Dr. Addition Smith</h2>
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

    </div>
  )
}

export default Team
