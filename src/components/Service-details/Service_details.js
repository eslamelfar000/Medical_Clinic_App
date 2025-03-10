import React from 'react'
import Sec_header from '../About/Sec-header/Sec_header'

import './Service_details.css'

import img_1 from '../../assets/slide-pic-3.jpg'

import { Link } from 'react-router-dom'

function Service_details() {
  return (
    <div>
      <Sec_header head_name={'Service Details'} />

      <div className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7">
              <div className="head-img">
                <img src={img_1} alt="" />
              </div>

              <div className="detail-info">
                <h2>Why Medical Had Been So Popular Till</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>

                <div className="details-ul">
                  <ul className='f-ul'>
                    <li>
                      <i className='fa fa-check'></i>
                      <span>That’s just a little bit more than</span>
                    </li>
                    <li>
                      <i className='fa fa-check'></i>
                      <span>Standard dummy text ever since</span>
                    </li>
                    <li>
                      <i className='fa fa-check'></i>
                      <span>Then along come two they</span>
                    </li>
                    <li>
                      <i className='fa fa-check'></i>
                      <span>Simply dummy text of the printing</span>
                    </li>
                    <li>
                      <i className='fa fa-check'></i>
                      <span>Make a type specimen book</span>
                    </li>
                  </ul>

                  <ul className='s-ul'>
                    <li>
                      <div className="li-per">
                        <h3>Advanced Technology</h3>
                        <span className='percent'>91 %</span>
                      </div>
                      <div className="li-progress progress-1">
                        <progress value="91" max="100"></progress>
                      </div>
                    </li>
                    <li>
                      <div className="li-per">
                        <h3>Certified Engineers</h3>
                        <span className='percent'>79%</span>
                      </div>
                      <div className="li-progress  progress-2">
                        <progress value="79" max="100"></progress>
                      </div>
                    </li>
                    <li>
                      <div className="li-per">
                        <h3>6 years Experience</h3>
                        <span className='percent'>70%</span>
                      </div>
                      <div className="li-progress progress-3">
                        <progress value="70" max="100"></progress>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="first-content">
                <div className="some-link">
                  <Link to='#'>Engine Diagnostics <i className='fa fa-angle-right'></i></Link>
                </div>
                <div className="some-link">
                  <Link to='#'>Lube Oil and Filters <i className='fa fa-angle-right'></i></Link>
                </div>
                <div className="some-link">
                  <Link to='#'>Belts and Hoses <i className='fa fa-angle-right'></i></Link>
                </div>
                <div className="some-link">
                  <Link to='#'>Air Conditioning <i className='fa fa-angle-right'></i></Link>
                </div>
                <div className="some-link">
                  <Link to='#' className=''>Brake Repair <i className='fa fa-angle-right'></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Service_details

