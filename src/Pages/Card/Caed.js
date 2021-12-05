import React from 'react';
import CardForm from './CardForm/CardForm';
import Footer from './../Shared/Footer/Footer';

const Caed = () => {
    return (
        <div>
            <h2><i class="fas fa-columns"></i>DashBord</h2>
            <div>
            <div class="container px-4 mt-5">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3 border bg-light">
         <h2>Cart Summary</h2>
         <h5>Sub Total</h5>
     </div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">
          <CardForm></CardForm>
      </div>
    </div>
  </div>
  
</div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Caed;