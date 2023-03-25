import React from 'react'
import Add from "../img/addAvatar.png"
export const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Let's Chat</span>
            <span className='title'>Login</span>
            <form>
                <input type="email" placeholder='Enter email'/>
                <input type="password" placeholder='Enter password'/>
                <button>Sign In</button>
            </form>
            <p>Don't have an account? Register</p>
        </div>
    </div>
  )
}
