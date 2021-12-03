import React from 'react';

const ExplorList = (props) => {
    const{name,image,description}=props.product
    return (
        <div className="col">
        <div class="card" >
<img src={image} class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title">{name}</h5>
<p class="card-text">{description}</p>
<button class="btn btn-primary">More Items</button>
</div>
</div>
    </div>
    );
};

export default ExplorList;