import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './GoodFoods.css'

const GoodFoods = () => {
    <Spinner
        animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>
    const [foods, setFoods] = useState([])
    const [cart, setcart] = useState([])
    const [randomOne, setRandom] = useState([])


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
    const randomChoose = () => {
        const randomItem = cart[Math.floor(Math.random() * cart.length)]
        setRandom([randomItem.name])
        console.log(randomItem.name);
    }
    const [resetItem, setResetItem] = useState()
    const reset = () => {
        const resetAll = []
        setResetItem(resetAll)
        console.log(resetAll)
    }

    return (

        < div className=' row' >
            <div className='container col col-lg-8 col-md-8 col-6 '>

                <div className='row'>
                    {foods.map(gdFood => <Food
                        key={gdFood.id}
                        foodData={gdFood}
                        handleCart={handleCart}></Food>)}
                </div>

            </div>
            <div className=' cart1 container col col-lg-4 col-md-4 col-6 '>
                <Cart cart={cart} randomOne={randomOne} randomChoose={randomChoose} resetItem={resetItem} reset={reset}></Cart>
            </div>
        </div >
    );
};

export default GoodFoods;
