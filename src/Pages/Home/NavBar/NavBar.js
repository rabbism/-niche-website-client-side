import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import logo from '../../../images/logo.png'
import useAuth from '../../../Hook/useAuth';

const NavBar = () => {
  const {user,logOut} =useAuth()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark  style-nav p-4">
  <div className="container-fluid">
    <Link className="navbar-brand " to="/home">
        <img className='ms-5' src={logo} alt="" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/explor">Explor</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          {
            user.email && <Link className="nav-link" to="/review">My Order</Link>
          }
        </li>
        <li className="nav-item">
          {
            user.email && <Link className="nav-link" to="/review">Payment</Link>
          }
        </li>
        <li className="nav-item">
          {
            user.email  && <Link className="nav-link" to="/review">Review</Link>
          }
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dashbord
          </Link>
          <ul className="dropdown-menu mr-4" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="#">Expolor</Link></li>
            <li><Link className="dropdown-item" to="/makeAdmin">Make Admin</Link></li>
            <li><Link className="dropdown-item" to="/makeAdmin">Manage All Order</Link></li>
            <li><Link className="dropdown-item" to="/manageAllProduct">Manage All Products</Link></li>
            <li><Link className="dropdown-item" to="/addProduct">Add New Product</Link></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><Link className="dropdown-item" to="#">Log Out</Link></li>
            
          </ul>
          <li className="nav-item ">
          {user.email || user.displayName ? <button onClick={logOut} className='btn btn-primary mt-1'>Log Out</button>
          :<Link to='/login' className="nav-link active text-white" aria-current="page" >Sign Up</Link>
          }
          
        </li>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default NavBar;