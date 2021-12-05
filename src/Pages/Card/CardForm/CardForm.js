import React from 'react';
import { useForm } from "react-hook-form";

const CardForm = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
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
    );
};

export default CardForm;