import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Wrapper from '../../assets/wrappers/Home'
import SmallSidebar from '../../components/SmallSidebar'

import { useFormik } from "formik";
import * as Yup from "yup";

const AddCircular = () => {
    const formik = useFormik({
        initialValues:{
            circularNumber : '', 
            subject : '', 
            category : '', 
            language : '', 
            description : '', 
            issuedOn : '', 
            issuedBy : '', 
            file : '', 
            
        },
        validationSchema: Yup.object({
            circularNumber:   Yup.string()
            .required("Please enter circular number")
            .matches(
                /^.*(?=.{3,}).*$/,
                "Please enter at least 3 digit"
            ),
            subject:   Yup.string()
            .required("Please enter the subject title"),
            category: Yup.string().required("Please select category type"),
            language: Yup.string().required("Please select the language"),
            description: Yup.string().required("Please enter file description"),
            issuedOn: Yup.date().required("Please enter Issued On"),
            issuedBy: Yup.string().required("Please enter Issued By"),
        }),

        onSubmit: values => {
            console.log(values)
        }

    })
    return (
        <Wrapper>
            <main className='dashboard'>
                <Sidebar />
                <SmallSidebar />
                <div>
                    <Navbar />
                    <div className='dashboard-page'>
                        <div className="card">
                            <form className='form' onSubmit={formik.handleSubmit}>
                                <h3>Add Circular</h3>
                                <div className='form-center'>
                                    <label htmlFor="circularNumber" className='form-label' >Circular Number</label>
                                    <input type="number"
                                    placeholder='Enter Circular Number'
                                    value={formik.values.circularNumber}
                                    onChange={formik.handleChange} 
                                    id='circularNumber' 
                                    name='circularNumber'
                                    className='form-input' />
                                </div>
                                {formik.errors.circularNumber && formik.touched.circularNumber && (
                                    <p className='error'>{formik.errors.circularNumber}</p>
                                )}


                              

                                <div className='form-center'>
                                    <label htmlFor="" className='form-label' >Subject</label>
                                    <input type="text"
                                     value={formik.values.subject}
                                     onChange={formik.handleChange} 
                                     id='subject' 
                                     name='subject'

                                    placeholder='Enter Subject' className='form-input' />
                                </div>
                                {formik.errors.subject && formik.touched.subject && (
                                    <p className='error'>{formik.errors.subject}</p>
                                )}

                                <div className='form-center'>
                                    <label htmlFor="category" className='form-label' >Category</label>
                                    <select
                                    value={formik.values.category}
                                    onChange={formik.handleChange} 
                                    id='category' 
                                    name='category'
                                        className='form-select'
                                    >
                                        <option value="">Select</option>
                                        <option value="1">General Purpose</option>
                                        <option value="2">Official Purpose</option>
                                        <option value="3">Transfer Purpose</option>
                                    </select>
                                </div>
                                {formik.errors.category && formik.touched.category && (
                                    <p className='error'>{formik.errors.category}</p>
                                )}


                                <div className='form-center'>
                                    <label htmlFor="" className='form-label' >File Language</label>
                                    <select 
                                    value={formik.values.language}
                                    onChange={formik.handleChange} 
                                    id='language' 
                                    name='language'
                                    className='form-select'>
                                        <option value="">Select</option>
                                        <option value="1">Hindi</option>
                                        <option value="2">English</option>
                                    </select>
                                </div>
                                {formik.errors.language && formik.touched.language && (
                                    <p className='error'>{formik.errors.language}</p>
                                )}


                                <div className='form-center'>
                                    <label htmlFor="" className='form-label' >File Description</label>
                                    <textarea rows={5} className='form-input' 
                                    value={formik.values.description}
                                    onChange={formik.handleChange} 
                                    id='description' 
                                    name='description'
                                    
                                    />
                                </div>
                                {formik.errors.description && formik.touched.description && (
                                    <p className='error'>{formik.errors.description}</p>
                                )}


                                <div className='form-center'>
                                    <label htmlFor="" className='form-label' >Issued On</label>
                                    <input type="date"  className='form-input'
                                    value={formik.values.issuedOn}
                                    onChange={formik.handleChange} 
                                    id='issuedOn' 
                                    name='issuedOn'

                                    />
                                </div>
                                {formik.errors.issuedOn && formik.touched.issuedOn && (
                                    <p className='error'>{formik.errors.issuedOn}</p>
                                )}


                                <div className='form-center'>
                                    <label htmlFor="" className='form-label' >Issued By</label>
                                    <textarea rows="5" className='form-input' 
                                    value={formik.values.issuedBy}
                                    onChange={formik.handleChange} 
                                    id='issuedBy' 
                                    name='issuedBy'

                                    />
                                </div>
                                {formik.errors.issuedBy && formik.touched.issuedBy && (
                                    <p className='error'>{formik.errors.issuedBy}</p>
                                )}


                                <div className='form-center'>
                                    <label htmlFor="" className='form-label' 
                                    
                                    
                                    >Attach File</label>
                                    <input type="file"  className='form-input' />
                                </div>
                                
                                <div className='form-row'>
                                    <button type="submit" className="btn signup-btn">Submit</button>
                                </div>

                            </form>
                                
                        </div>
                    </div>
                </div>
            </main>
        </Wrapper>
    )
}

export default AddCircular
