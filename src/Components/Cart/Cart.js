import React from 'react';
import './Cart.css'
const Cart = ({ cart, randomChoose, reset }) => {
    // const randomOne = []
    // console.log(randomOne)
    if (cart && cart.length < 5) {
        return (
            <div className='cart bg-light'>
                <h3>Selected Items </h3>
                <h5>Items : {cart.length}</h5>
                {
                    cart.map(item => <li key={item.id}>{item.name}</li>)
                }

                {/* <p>{displayRandomItem !== -1 ? displayRandomItem?.name : null} </p> */}

                <button onClick={() => randomChoose()} className='btn btn-danger fw-bold mt-3'>Final Selection</button>
                <div >
                    <button onClick={() => reset()} className='btn btn-success fw-bold mt-3'> Reset selection</button>
                </div>
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