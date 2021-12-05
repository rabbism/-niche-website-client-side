import React from 'react';
import { useForm } from "react-hook-form";

const MakeProduct = () => {
    const { register, handleSubmit ,reset} = useForm();
  const onSubmit = data =>{
    console.log(data);
    reset()
  }
    return (
        <div>
            
            <div>
            <h2><i class="fas fa-columns"></i>DashBord</h2>
            </div>
            <div className='w-50 m-auto mt-4'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                <input className='form-control' type="text" {...register("Name", { required: true, maxLength: 20 })} />
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input className='form-control' type="email" {...register("email")} />
                <label for="exampleFormControlInput1" class="form-label">Your Address</label>
                <input className='form-control' type="text" {...register("address")} />
                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                <input className='form-control' type="number" {...register("phone")} />
                <input type="submit" />
            </form>
            </div>
        </div>
    );
};

export default MakeProduct;