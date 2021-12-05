import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data =>{
      console.log(data);
      reset()
    }
    return (
        <div>
            <div className='text-center'>
                Are you want to add Another Admin of your website ? <span>(Be careful)</span>
            </div>
            <div className='w-50 m-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input placeholder='Enter Your Email' className='form-control' type="email" {...register("email")} />
                <input className='btn btn-primary mt-3' type="submit" />
            </form>
            </div>
        </div>
    );
};

export default MakeAdmin;