import axios from 'axios';
import React, {useState} from 'react'
import "./account.css";

function Login() {
  
  const [userInfo, setUserInfo] = useState({email:'', password:''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userInfo.email, userInfo.password);
    const endPoint = 'http://localhost:5001/api/user/login';
    axios({
      url: endPoint,
      method: 'post',
      data: {
        email: userInfo.email,
        password: userInfo.password
      }
    })
    .then(res => {
      console.log(res);
      if (!res.data.loginSuccess) {
        alert(res.data.message);
      } else {
        alert('로그인 성공');
      }
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  return (
    <div className="login__content">
      <div className="login__area">
        <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="int-area">
            <input
              type="text"
              id="email"
              name="email"
              autoComplete="off"
              required
              value={userInfo.email}
              onChange={handleChange}
            />
              <label htmlFor="email">USER EMAIL</label>          
            </div>
            <div className="int-area">
            <input
              type="password"
              id="pw"
              name="password"
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
