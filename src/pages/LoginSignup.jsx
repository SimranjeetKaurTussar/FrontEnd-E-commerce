import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <div className="login-signup-fields">
          <input type="text" placeholder='Enter name...' name='name' />
          <input type="email" placeholder='Enter email...' name='email' />
          <input type="password" placeholder='Enter password...' name='password'/>
        </div>
        <button>Continue</button>
        <p className="login-signup-login">Already have an account <span>Login here</span></p>
        <div className="login-signup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
