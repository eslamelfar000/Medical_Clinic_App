import React from 'react'
import Sec_header from '../About/Sec-header/Sec_header'
import './Error.css'

function Error() {
    return (
        <div>
            <Sec_header head_name={'Error 404'} />
            <div className='error'>
                <div className="row">
                    <div className="col-10 col-md-7 col-lg-5 col-xl-5 col-xxl-4">
                        <div className="contianer">
                            <div className="error-info">
                                <div className="error-emo">
                                    4
                                    <span></span>
                                    4
                                </div>

                                <div className="error-title">
                                    <h2>The Page you were looking for, couldn't be found.</h2>
                                </div>

                                <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error
