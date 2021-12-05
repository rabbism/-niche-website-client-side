import React from 'react';
import { Link } from 'react-router-dom';

const AdminNav = () => {
    return (
        <div className='h-100 w-50'>
            <ul class="nav flex-column ">
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" href="/adimnExplor">Explore</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/makeAdmin">Make Admin</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/manageOrder">Manage Orders</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/manageproduct">Manage Products</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/addproduct">Add Product</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="#">Log Out</Link>
  </li>

</ul>
        </div>
    );
};

export default AdminNav;