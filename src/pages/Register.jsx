import React from 'react'
import Add from "../img/addAvatar.png"
export const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Let's Chat</span>
            <span className='title'>Register</span>
            <form>
                <input type="text" placeholder='Enter name'/>
                <input type="email" placeholder='Enter email'/>
                <input type="password" placeholder='Enter password'/>
                <input style={{display:"none"}} type="file" id='file'/>
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Already have an account? Login</p>
        </div>
    </div>
  )
}
