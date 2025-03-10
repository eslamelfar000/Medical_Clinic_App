import React from 'react'
import './Login_Register.css'

import Logo from '../../assets/logo.png'

import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className='login'>
            <div className="login-content">
                <div className="login-logo">
                    <Link to='/'><img src={Logo} alt="" /></Link>
                </div>

                <form action="">
                    <div className="login-info">
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Password' />
                        <input type="submit" value="Register Now" />
                    </div>
                </form>

                <p>ALready you have account ?</p>

                <div className="toRegister">
                    <Link to='../clinic/login' className='link-register btn'>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Register
