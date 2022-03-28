import React from 'react';
import './Cart.css'
const Cart = ({ cart, randomOne, randomChoose, resetItem, reset }) => {

    if (cart.length < 5) {
        return (
            <div className='cart bg-light'>
                <h3>Selected Items </h3>
                <h5>Items : {cart.length}</h5>
                {
                    cart.map(item => <li key={item.id}>{item.name}</li>)
                }

                <h4 className='border border-danger m-3 p-3'>{randomOne}</h4>
                <button onClick={() => randomChoose()} className='btn btn-danger fw-bold mt-3 mb-3'>Final Selection</button>

                <div>         <button onClick={(resetItem) => reset(resetItem)} className='btn btn-success fw-bold  '> Reset selection</button>{''}</div>

            </div>
        );
    }
    else {
        return (
            <div className='cart-alert bg-danger '>
                <h4>"Sorry, You can add only 4 items."</h4>
            </div>
        )
    }


};

export default Cart;