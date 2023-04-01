import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/NotFound'
import Button from './Button'
const NotFound = () => {
  return (
    <Wrapper>
    <div className='main'>
       <div className="container">
        <h2>404</h2>
        <h3>Oops, nothing here...</h3>
             <Link to='/'>
               <Button text="Back Home"/>
                </Link>
             </div> 
             </div> 
    </Wrapper>
  )
}

export default NotFound
