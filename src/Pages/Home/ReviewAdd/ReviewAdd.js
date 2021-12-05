import React from 'react';
import { useForm } from "react-hook-form"
import ReactStars from "react-rating-stars-component";

const ReviewAdd = () => {
    const { register, handleSubmit,setValue  } = useForm();

    const thirdExample = {
        size: 40,
        count: 7,
        isHalf: false,
        value: 4,
        color: "blue",
        activeColor: "red",
        onblur: newValue => {
            setValue(newValue)
        }
      };


    const onSubmit = data => console.log(data);
    return (
        <div>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea {...register("firstName", { required: true, maxLength: 20 })} />
                <ReactStars {...thirdExample} />
                <input type="submit" />
            </form>
            </div>
        </div>
    );
};

export default ReviewAdd;