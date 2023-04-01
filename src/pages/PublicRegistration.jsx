import React from 'react'
import logo from '../assets/images/logo.png'
import Wrapper from '../assets/wrappers/PublicRegistration'
import { FaMobile } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiPhotoAlbum } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


const PublicRegistration = () => {
    const navigate = useNavigate();
const formik = useFormik({
    initialValues:{
        photo : null,
        user : '', 
        mobile : '',
        name : '',
        email : '',
        password : ''
    },
    validationSchema: Yup.object({
        user: Yup.string().required("Please select user type"),
        photo: Yup.string().required("Please select your photo"),
      mobile: Yup.string()
      .required("Please enter your mobile")
      .matches(
        /^(\+\d{1,3}[- ]?)?\d{10}$/,
        "Mobile number not valid"
      ),
      name:   Yup.string()
      .required("Please enter your name")
      .matches(
        /^.*(?=.{3,}).*$/,
        "name at least 3 character"
      ),

      email:   Yup.string()
      .required("Please enter your email")
      .matches(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "please enter valid email"
      ),

      password: Yup.string()
      .required("Please enter your password")
      .matches(
        /^.*(?=.{8,}).*$/,
        "Password at least 8 characters"
      ),

    }),
    onSubmit: (values,{ resetForm }) => {
       let formdata = new FormData()
       formdata.append('photo',values.photo)
       formdata.append('userType',values.user)
       formdata.append('mobile',values.mobile)
       formdata.append('name',values.name)
       formdata.append('email',values.email)
       formdata.append('password',values.password)

       const requestOptions = {
        method: 'POST',
        body: formdata
    };

       fetch('http://localhost:5000/api/v1/userRegistration', requestOptions)
       .then(response =>console.log(response.status))
       toast.success("Registerd Successfully")
       resetForm();
       navigate("/public-login");
    }
  });

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
                    <h3>Citizen Registration</h3>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='form-row'>
                            <BiPhotoAlbum className='input-icons' />
                            <input
                                type="file" name='photo' id='photo'
                                className='form-input'
                                // value={formik.values.photo}
                                onChange={(event) => {
                                    formik.setFieldValue("photo", event.currentTarget.files[0]);
                                }}                              
                            /> 
                            </div>
                            {formik.errors.photo && formik.touched.photo && (
                                 <p className='error'>{formik.errors.photo}</p>
                            )}



                        {/* users */}
                        <div className="form-row">
                            <IoIosPeople className='input-icons' />
                            <select className='form-select' name='user' id='user'
                                value={formik.values.user}
                                onChange={formik.handleChange}  

                            >
                               <option value="">Select</option>
                               <option value="1">Citizen</option>
                               <option value="2">NGO</option>
                               <option value="3">Organization</option>
                            </select>
                        </div>
                        {formik.errors.user && formik.touched.user && (
                                 <p className='error'>{formik.errors.user}</p>
                            )}
                        
                        {/* Mobile Number */}
                        <div className='form-row'>
                            <FaMobile className='input-icons' />
                            <input
                                type="number" name='mobile' id='mobile'
                                placeholder='Enter Mobile Number'
                                className='form-input'
                                value={formik.values.mobile}
                                onChange={formik.handleChange}                               
                            /> 
                                                        
                        </div>
                        {formik.errors.mobile && formik.touched.mobile && (
                                 <p className='error'>{formik.errors.mobile}</p>
                            )}
                        
                        {/* name */}
                        <div className='form-row'>
                            <BsFillPersonFill className='input-icons' />
                            <input
                                type="text" name='name' id='name'
                                placeholder='Enter Name'
                                className='form-input'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />
                            
                        </div>
                        {formik.errors.name && formik.touched.name && (
                                <p className='error'>{formik.errors.name}</p>
                            )}
                        {/* Email */}
                        <div className='form-row'>
                            <MdEmail className='input-icons' />
                            <input
                                type="email" name='email' id='email'
                                placeholder='Enter Email'
                                className='form-input'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                        </div>
                        {formik.errors.email && formik.touched.email && (
                                <p className='error'>{formik.errors.email}</p>
                        )}

                        {/* password */}
                        <div className='form-row'>
                            <RiLockPasswordFill className='input-icons' />
                            <input
                                type="password" name='password' id='password'
                                placeholder='Enter Password'
                                className='form-input'
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                        </div>
                        {formik.errors.password && formik.touched.password && (
                                <p className='error'>{formik.errors.password}</p>
                        )}
                        
                        <div className='form-row'>
                            <button type="submit" className="btn signup-btn">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}

export default PublicRegistration
