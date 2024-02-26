import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  const handleSubmit = (event) => {
    event.preventDefault();
   
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    console.log(name, email, password);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='header'>
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        {action === "Login" ? null : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" name="name" placeholder='Name' />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" name="email" placeholder='Email Id' />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" name="password" placeholder='Password'/>
        </div>

        {action === "Sign Up" ? null : (
          <div className="forgot-password">Forgot Password ? <span>Click here</span></div>
        )}

        <div className="submit-container">
          <button type="submit" className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</button>
          <button type="submit" className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
