import React from 'react';

const Food = ({ foodData }) => {
    const { name, price } = foodData
    return (
        <div>
            <h1>{name}</h1>
            <p>Price: ${price}</p>

        </div>
    );
};

export default Food;