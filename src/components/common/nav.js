import React from 'react';
import { Link } from 'react-router-dom';
import "./nav.css";

const nav = () => {
  
  const toggleNav = () => {
    const menu = document.querySelector('.navbar__menu');
    const account = document.querySelector('.navbar__account');
    menu.classList.toggle('active');
    account.classList.toggle('active');
  }

  return (
    <nav className="container-fluid">
      <div className="row">
        <div className="navbar col-12">

          <div className="navbar__logo">
            <a href="#!">Wmovie</a>  
          </div>

          <ul className="navbar__menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movieList">MovieList</Link></li>
            <li><Link to="/mypage">MyPage</Link></li>
            <li><Link to="/">FAQ</Link></li>
          </ul>

          <div className="navbar__account">
            <a href="/Login">Login</a>
            <a href="#!">SignUp</a>
          </div>
          
          {/* <div className="navbar__icons">
            <li><i className="fab fa-github"></i></li>
            <li><i className="fab fa-blogger"></i></li>
          </div> */}

          <button className="navbar__toggleBtn" onClick={toggleNav}>
            <i></i>
          </button>

        </div>
      </div>
    </nav>
  );
};

export default nav;