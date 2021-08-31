import React from 'react';
import "./nav.css";

const nav = () => {
  
  const toggleNav = () => {
    const menu = document.querySelector('.navbar__menu');
    const icons = document.querySelector('.navbar__icons');
    menu.classList.toggle('active');
    icons.classList.toggle('active');
  }

  return (
    <nav className="container-fluid">
      <div className="row">
        <div className="navbar col-12">

          <div className="navbar__logo">
            <a href="#!">Wmovie</a>  
          </div>

          <ul className="navbar__menu">
            <li><a href="#!">Home</a></li>
            <li><a href="#!">MovieList</a></li>
            <li><a href="#!">MyPage</a></li>
            <li><a href="#!">FAQ</a></li>
          </ul>
          
          <div className="navbar__icons">
            <li><i className="fab fa-github"></i></li>
            <li><i className="fab fa-blogger"></i></li>
          </div>

          <button className="navbar__toggleBtn" onClick={toggleNav}>
            <i></i>
          </button>

        </div>
      </div>
    </nav>
  );
};

export default nav;