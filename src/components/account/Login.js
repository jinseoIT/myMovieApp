import axios from 'axios';
import React, {useState} from 'react'
import "./account.css";

function Login() {
  
  const [userInfo, setUserInfo] = useState({email:'', password:''});

  const handleChange = (e) => {
    const { name , value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  }
  
  const handleSubmit = async (e) => {
    console.log(userInfo.email, userInfo.password);
  }
  
  return (
    <div className="login__content">
      <div className="login__area">
        <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="int-area">
            <input
              type="email"
              id="email"
              autoComplete="off"
              required
              value={userInfo.email}
              onChange={handleChange}
            />`
              <label htmlFor="email">USER EMAIL</label>          
            </div>
            <div className="int-area">
            <input
              type="password"
              id="pw"
              autoComplete="off"
              required
              value={userInfo.password}
              onChange={handleChange}
            />
              <label htmlFor="pw">USER PASSWORD</label>          
            </div>
            <div className="btn-area">
              <button type="submit" onSubmit={handleSubmit}>Login</button>
            </div>
          </form>
          <div className="caption">
            <a href="#!">Forgot Password?</a>
          </div>
        </div>
      </div>
  )
}

export default Login
