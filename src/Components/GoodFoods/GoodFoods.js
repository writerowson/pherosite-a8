import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const GoodFoods = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [foods])

    return (
        <div className=' row'>
            <div className='container col col-lg-8 col-md-8 col-6 '>

                <div className='row'>
                    {foods.map(gdFood => <Food key={gdFood.id} foodData={gdFood}></Food>)}
                </div>

            </div>
            <div className=' container col col-lg-4 col-md-4 col-6 border border-danger bg-light'>Hi</div>
        </div>
    );
};

export default GoodFoods;
