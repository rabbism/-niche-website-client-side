import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
// https://cryptic-castle-25291.herokuapp.com/products

const Services = () => {
    const [product,setProduct] =useState([])
    useEffect(()=>{
        fetch('https://cryptic-castle-25291.herokuapp.com/products')
        .then(res =>res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div className='style-service'>
            <div className='text-center pt-5 text-white'>
                <h2>Qualitypolarized <span>Man & Woman</span>Eyewear Sunglass</h2>
                <p>Eye chasmish are very important for thos who have some diffucult in their eye to <br></br>see every hing clearly and perfectly</p>
            </div>
            {
                product.length ===0 ? <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden text-red">Loading...</span>
                </div>
              </div>:
              <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3 w-75 m-auto">
              {
                  product.map(product => <Service product={product}></Service>)
              }
          </div> 
            }
           
        </div>
    );
};

export default Services;