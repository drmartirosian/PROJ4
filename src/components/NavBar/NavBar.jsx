import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to='/' className='NavBar-link'>HOME</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link exact to='/' className='NavBar-link'>Products List</Link>
      &nbsp;&nbsp;&nbsp;
      <Link exact to='/add' className='NavBar-link'>Add Product</Link>
      <Link to='/cart' className='NavBar-link'>CART</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>Welcome back, {props.user.name}!</span>
    </div>
    :
    <div>
      <Link to='/' className='NavBar-link'>HOME</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
      <h3>Please sign in...</h3>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;