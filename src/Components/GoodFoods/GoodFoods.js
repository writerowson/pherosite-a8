import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';

const GoodFoods = () => {
    const [foods, setFoods] = useState([])
    const [cart, setcart] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [foods])

    const handleCart = (foodData) => {
        const newcart = [...cart, foodData]
        setcart(newcart)
        console.log(newcart)
    }

    return (
        <div className=' row'>
            <div className='container col col-lg-8 col-md-8 col-6 '>

                <div className='row'>
                    {foods.map(gdFood => <Food
                        key={gdFood.id}
                        foodData={gdFood}
                        handleCart={handleCart}></Food>)}
                </div>

            </div>
            <div className=' container col col-lg-4 col-md-4 col-6 border border-light  bg-danger'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default GoodFoods;
