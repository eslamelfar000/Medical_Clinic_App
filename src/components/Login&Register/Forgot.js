import React from 'react'

import Logo from '../../assets/logo.png'

import { Link } from 'react-router-dom'

function Forgot() {
    return (
        <div className='login'>
            <div className="login-content">
                <div className="login-logo">
                    <Link to='/'><img src={Logo} alt="" /></Link>
                </div>

                <form action="">
                    <div className="login-info">
                        <input type="password" placeholder='Current Password' />
                        <input type="password" placeholder='New Password' />
                        <input type="submit" value="Submit" />
                    </div>
                </form>

                <p>Already have account ?</p>

                <div className="toRegister">
                    <Link to='../login' className='link-register btn'>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Forgot
