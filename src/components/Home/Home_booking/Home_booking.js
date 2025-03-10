import React from 'react'
import './Home_booking.css'
import img_1 from '../../../assets/mobile.png'



import icon_1 from '../../../assets/icon_1.png'
import icon_2 from '../../../assets/icon_5.png'
import icon_3 from '../../../assets/icon_8.png'
import icon_4 from '../../../assets/icon_12.png'
import icon_5 from '../../../assets/icon_13.png'
import icon_6 from '../../../assets/icon_14.png'
import icon_7 from '../../../assets/icon_15.png'

import wemon from '../../../assets/women.png'



function Home_booking() {
    return (
        <div className='book'>
            <div className="container-fluid">
                <div className="book_cover">
                    <div className="row">
                        <div className="colom_1 col-12 col-lg-6">
                            <div className="col-book">
                                <div className="sec-col-book">
                                    <form action="">
                                        <h2>Book Appointment</h2>
                                        <select className='in'>
                                            <option hidden>Select Department</option>
                                            <option >One</option>
                                            <option >Two</option>
                                            <option >Three</option>
                                            <option >Four</option>
                                        </select>
                                        <select className='in'>
                                            <option hidden>Select Doctor</option>
                                            <option >Eslam</option>
                                            <option >Omar</option>
                                            <option >Ahmed</option>
                                            <option >Amir</option>
                                        </select>

                                        <input type="text" className='in' placeholder='Your Name' />
                                        <input type="number" name="" id="" className='in' placeholder='Phone Number' />
                                        <input type="date" name="" id="" className='in' />

                                        <div className="submit">
                                            <input type="submit" className='sub' value="Appointment Now" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="colom_2 col-12 col-lg-6">
                            <div className="book_img">
                                <img src={img_1} alt="" className='image' />

                                <img src={icon_4} alt="" className='icon_4' />
                                <img src={icon_5} alt="" className='icon_5' />
                                <img src={icon_6} alt="" className='icon_6' />
                                <img src={icon_7} alt="" className='icon_7' />
                                <img src={wemon} alt="" className='wemon' />
                            </div>
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

export default Home_booking
