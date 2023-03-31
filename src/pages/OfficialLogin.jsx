import React from 'react'
import logo from '../assets/images/logo.png'
import Wrapper from '../assets/wrappers/PublicRegistration'

import { FaMobile } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
const OfficialLogin = () => {
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
                    <h3>Official Login</h3>
                    <form>
                       
                     
                       
                        {/* Username */}
                        <div className='form-row'>
                            <BsFillPersonFill className='input-icons' />
                            <input
                                type="text"
                                placeholder='Enter Username'
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
                            <button type="submit" className="btn signup-btn">Login</button>
                        </div>
                    </form>


                </div>

            </div>
        </Wrapper>
    )
}

export default OfficialLogin
