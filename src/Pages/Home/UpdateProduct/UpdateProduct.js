import React from 'react';
import sunglass from '../../../images/list1.png'
import sunglass2 from '../../../images/list4.png'
import sunglass4 from '../../../images/list8.png'
import sunglass5 from '../../../images/big-img.png'

const UpdateProduct = () => {
    return (
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 w-75 m-auto mt-3">
            <div className='col'>
                    <img className='w-100 img-fluid h-75' src={sunglass} alt="" />
            </div>
            <div className='col'>
                    <img className='w-100 img-fluid h-75' src={sunglass4} alt="" />
            </div>
            <div className='col'>
                    <img className='w-100 img-fluid h-75' src={sunglass2} alt="" />
            </div>
            <div className='col'>
                    <img className='w-100 img-fluid h-75' src={sunglass5} alt="" />
            </div>
        </div>
    );
};

export default UpdateProduct;