import React from 'react';

const Food = ({ foodData }) => {
    const { img,name, price } = foodData
    return (
        <div>
        <img className='' src={img} alt="" />
            <h1>{name}</h1>
            <p>Price: ${price}</p>

        </div>
    );
};

export default Food;