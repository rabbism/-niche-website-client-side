import React, { useEffect, useState } from 'react';
import ReviewItems from '../ReviewList/ReviewItems';

const Review = () => {
    // https://cryptic-castle-25291.herokuapp.com/review 
    const[review,setReview] =useState([])
    useEffect(()=>{
        fetch('https://cryptic-castle-25291.herokuapp.com/review ')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    return (
        <div className='text-white bg-dark'>
            <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3 w-75 m-auto p-4">
                {
                    review.map(review => <ReviewItems review={review}></ReviewItems>)
                }
            </div>
        </div>
    );
};

export default Review;