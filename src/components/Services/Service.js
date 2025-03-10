import React from 'react'
import Card_sec from '../About/Card_sec/Card_sec'
import Our_doc from '../About/Our_doc/Our_doc'
import Sec_header from '../About/Sec-header/Sec_header'
import Home_news from '../Home/Home_news/Home_news'
import Home_services from '../Home/Home_services/Home_services'

function Service() {
    return (
        <div>
            <Sec_header head_name={'Services'} />
            <Home_services />
            <Card_sec />
            <Our_doc />
            <Home_news />
        </div>
    )
}

export default Service
