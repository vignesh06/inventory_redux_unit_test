import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import { UrlConstant, localstorageConstants } from '../Constants/Constants';
import history from '../App.js';
const Navbar = props => {
  const logout = () => {
    localStorage.setItem(
      localstorageConstants.Token,
      ""
    )
    props.history.push("/login")
  }
  return (
    <React.Fragment>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <a className='navbar-brand'>
          Inventory
        </a>

        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link className='nav-link' to='/admin/dashboard'>
              Dashboard
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/admin/users'>
              Users
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/admin/products'>
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/admin/locations'>
              Locations
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/admin/manufacturers'>
              Manufacturers
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/admin/indents'>
              Indents
            </Link>
          </li>
        </ul>
        <a className='navbar-brand' onClick={logout} style={{"margin-left": "45%","color": "white","cursor":"pointer" }}>
        Logout
        </a>
      </nav>
    </React.Fragment>
  );
};

export default withRouter(Navbar);
