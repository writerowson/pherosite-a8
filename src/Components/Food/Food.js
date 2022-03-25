import React from 'react';
import { FaShoppingCart } from "react-icons/fa"
const Food = ({ foodData }) => {
    const { img, name, price } = foodData
    return (

        <div className="food col col-lg-4 col-md-4 col-12 ">
            <div className='card border border-dark d-flex m-3 p-1 '>
                <img className='' src={img} alt="" />
                <div>
                    <h2>{name}</h2>
                    <p>Price: ${price}</p>
                    <div >
                        <button className='btn btn-danger w-100 '>Add to cart <FaShoppingCart className='ms-3'> </FaShoppingCart> </button>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Food;