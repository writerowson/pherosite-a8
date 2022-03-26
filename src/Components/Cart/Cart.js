import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {

    if (cart.length < 5) {
        return (
            <div className='cart bg-danger '>
                <h3>Selected Items </h3>
                <h5>Items : {cart.length}</h5>
                {
                    cart.map(item => <li key={item.id}>{item.name}</li>)
                }
                <button className='btn btn-light mt-3'>Final Selection</button>
                <div>
                    <button className='btn btn-dark mt-3'> Reset selection</button>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className='cart-alert bg-danger '>
                <h4>"Sorry, You can't add more than 4 item."</h4>
            </div>
        )
    }


};

export default Cart;