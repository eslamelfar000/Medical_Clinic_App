import React from 'react'
import Sec_header from '../About/Sec-header/Sec_header'
import Home_news from '../Home/Home_news/Home_news'
import Faq_ask from './Faq_ask/Faq_ask'

function Faq() {
    return (
        <div>
            <Sec_header head_name={'Eaq'} />
            <Faq_ask />
            <Home_news />
        </div>
    )
}

export default Faq
