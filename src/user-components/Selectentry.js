import React from 'react'
import { Link } from 'react-router-dom'
import './entry.css'

const Selectentry = () => {
  return (
    <div className='box0'>
      <div className='box'>
        <h1>Hello, There</h1>
        <div className='box1'>
          <div className='login'>
          <Link to='/login'><b>Login</b></Link>
          </div>
          <div className='signup'>
          <Link to='/signup'><b>Signup</b></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Selectentry