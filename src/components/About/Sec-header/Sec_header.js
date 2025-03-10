import React from 'react'

import './Sec_header.css'

import icon_1 from '../../../assets/icon_8.png'
import icon_2 from '../../../assets/icon_9.png'
import icon_3 from '../../../assets/icon_10.png'

function Sec_header({head_name}) {
    return (
        <div className='sec-header'>
            <h1>{head_name}</h1>

            <div className="sub-header">
                <div className="sub-header-info">
                    <h4><a href="/"><i className='fa fa-home'></i> Home</a></h4>
                    <span>/</span>
                    <h4>{head_name}</h4>
                </div>
            </div>

            <img src={icon_1} alt="" className='icon_1' />
            <img src={icon_1} alt="" className='icon_2' />
            <img src={icon_2} alt="" className='icon_3' />
            <img src={icon_3} alt="" className='icon_4' />
        </div>
    )
}

export default Sec_header
