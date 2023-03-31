import React from 'react'
import logo from '../assets/images/logo.png'
import Wrapper from '../assets/wrappers/PublicRegistration'

import { FaMobile } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
const PublicLogin = () => {
    return (
        <Wrapper>
            <div className='container page'>
                {/* info */}
                <div className='info'>
                    <img src={logo} className="logo" alt="logo" />
                    <h2>Welcome to <span>Meri Panchayat</span>
                    </h2>
                </div>
                <div className="card">
                    <h3>Citizen Login</h3>
                    <form>
                       
                        {/* Mobile Number */}
                        <div className='form-row'>
                            <FaMobile className='input-icons' />
                            <input
                                type="text"
                                placeholder='Enter Mobile Number'
                                className='form-input'
                            />
                        </div>
                       
                        {/* password */}
                        <div className='form-row'>
                            <RiLockPasswordFill className='input-icons' />
                            <input
                                type="password"
                                placeholder='Enter Password'
                                className='form-input'
                            />
                        </div>
                        <div className='form-row'>
                            <button type="submit" className="btn signup-btn">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}

export default PublicLogin
