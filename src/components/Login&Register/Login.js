import React from 'react'
import './Login_Register.css'

import Logo from '../../assets/logo.png'

import { Link } from 'react-router-dom'


function Login() {
    return (
        <div className='login'>
            <div className="login-content">
                <div className="login-logo">
                    <Link to='/'><img src={Logo} alt="" /></Link>
                </div>

                <form action="">
                    <div className="login-info">
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Password' />
                        <input type="submit" value="Login" />
                    </div>
                </form>

                <Link to="forgot" className='forgot'>Forgot Password</Link>

                <p>Don't have any account ?</p>

                <div className="toRegister">
                    <Link to='register' className='link-register btn'>Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
