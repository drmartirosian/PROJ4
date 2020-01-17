import React from 'react';
import { Link } from 'react-router-dom';

// import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to=''
        className='NavBar-link'
        onClick={props.handleLogout}
      >LOGOUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>{props.user.name}</span>
    </div>
    :
    <div>
      <Link to='/api/login' className='NavBar-link'>LOGIN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/api/signup' className='NavBar-link'>SIGNUP</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;