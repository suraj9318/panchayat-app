import logo from '../assets/images/logo.png'
import Wrapper from '../assets/wrappers/PublicRegistration'
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { storeOfficialUser } from '../features/user/userSlice'

const OfficialLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues:{
            username : '',
            password : ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Please Enter your username"),
            password: Yup.string().required("Please Enter your password"),
         
        }),
        onSubmit: (values,{ resetForm }) => {
          
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            };
        
               fetch('http://localhost:5000/api/v1/officialLogin', requestOptions)
               .then(response => response.json())
                .then(data => {
                    if(data.result === "failed"){
                        toast.error(data.message)
                    }
                    if(data.result === "success"){
                        let OfficialUserData = data.data
                        localStorage.setItem('OfficialUser', JSON.stringify(OfficialUserData));
                        dispatch(dispatch(storeOfficialUser(OfficialUserData)));
                        toast.success("welcome "+data?.data?.name)
                        resetForm();
                        navigate(`/home/`)
                    }});

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
                    <h3>Official Login</h3>
                    <form onSubmit={formik.handleSubmit}>
                        {/* Username */}
                        <div className='form-row'>
                            <BsFillPersonFill className='input-icons' />
                            <input
                                type="text"
                                placeholder='Enter Username'
                                className='form-input'
                                name='username' id='username'
                                value={formik.values.username}
                                onChange={formik.handleChange}  
                            />
                        </div>
                        {formik.errors.username && formik.touched.username && (
                                 <p className='error'>{formik.errors.username}</p>
                            )}

                        {/* password */}
                        <div className='form-row'>
                            <RiLockPasswordFill className='input-icons' />
                            <input
                                type="password"
                                placeholder='Enter Password'
                                className='form-input'
                                name='password' id='password'
                                value={formik.values.password}
                                onChange={formik.handleChange}  
                            />
                        </div>
                        {formik.errors.password && formik.touched.password && (
                                 <p className='error'>{formik.errors.password}</p>
                            )}
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
