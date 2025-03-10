import React from 'react'

import Home_about from '../Home/Home_about/Home_about'
import Home_test from '../Home/Home_Testimonial/Home_test'
import Home_news from '../Home/Home_news/Home_news'
import Card_sec from './Card_sec/Card_sec'
import Our_doc from './Our_doc/Our_doc'
import Sec_header from './Sec-header/Sec_header'

function About_Us() {
    return (
        <div>
            <Sec_header head_name={'About Us'} />
            <Home_about />
            <Card_sec />
            <Our_doc />
            <Home_test />
            <Home_news />
        </div>
    )
}

export default About_Us
