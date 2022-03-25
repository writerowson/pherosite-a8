import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div className='text-light '>


            <h4>Items : {cart.length}</h4>
            {
                cart.map(item => <li key={item.key}>{item.name}</li>)
            }
        </div>
    );
};

export default Cart;