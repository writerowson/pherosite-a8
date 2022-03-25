import React from 'react';
import { FaShoppingCart } from "react-icons/fa"
const Food = ({ foodData, handleCart }) => {
    const { img, name, price } = foodData
    return (
        <div className="col ">
            <div className=" w-100 col-lg-4 col-md-4 col-12  ">
                <div className=' card border border-dark  mt-5 m-1 p-1  '>
                    <img className='' src={img} alt="" />
                    <div>
                        <h3>{name}</h3>
                        <p>Price: ${price}</p>
                        <div >
                            <button onClick={() => handleCart(foodData)} className='btn btn-danger w-100 '>Add to cart <FaShoppingCart className='ms-3'> </FaShoppingCart> </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default Food;