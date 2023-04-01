import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png'
import Wrapper from '../assets/wrappers/PublicRegistration'
import { FaMobile } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useFormik } from "formik";
import * as Yup from "yup";
import { json } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useParams  } from "react-router-dom";

const PublicWelcome = () => {
    
    let { data } = useParams();
    if(!data){
        return(<>
        <Wrapper>
            <div className='container page'>
                {/* info */}
                <div className='info'>
                    <img src={logo} className="logo" alt="logo" />
                    <h2>Welcome to <span>Meri Panchayat</span>
                    </h2>
                </div>
                <div className="card">
                    <h3>Not Authorized Citizen</h3>
                    
                </div>
            </div>
        </Wrapper>
        </>)
    }
      
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
                    <h3>Welcome Citizen</h3>
                </div>
            </div>
        </Wrapper>
    )
}

export default PublicWelcome
