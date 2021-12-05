import React from 'react';
import ReactStars from "react-rating-stars-component";


const ReviewItems = (props) => {
    const{name,rating,description} =props.review
    const firstExample = {
        size: 30,
        value: rating,
        edit: false
      };
    return (
        <div className='col w-25 border border-primary me-4 p-3'>
            <h4 className='text-warning'>{name}</h4>
            <ReactStars {...firstExample} />
        <p>{description}</p>
        </div>
    );
};

export default ReviewItems;