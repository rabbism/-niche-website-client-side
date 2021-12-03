import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import ReactStars from "react-rating-stars-component";

const ReviewAdd = () => {
   
    const { register, handleSubmit,reset } = useForm();

    const thirdExample = {
        size: 40,
        count: 7,
        isHalf: false,
        value: 4,
        color: "blue",
        activeColor: "red",
        onblur: newValue => {
            
        }
      };


    const onSubmit = data => {
        console.log(data);
        reset()
    }
    return (
        <div>
            <div className='mt-5 w-50 m-auto'>
                <h2>Submit Your Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea {...register("firstName", { required: true, maxLength: 20 })} />
                <br></br>
                <input type="submit" />
            </form>
            <ReactStars {...thirdExample} />
            </div>
        </div>
    );
};

export default ReviewAdd;