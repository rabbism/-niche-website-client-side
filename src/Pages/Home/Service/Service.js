import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const{name,image,description}=props.product
    return (
        <div className="col">
            <div class="card" >
  <img src={image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{description}</p>
    <Link to='/card'><button class="btn btn-primary">More Items</button></Link>
  </div>
</div>
        </div>
    );
};

export default Service;