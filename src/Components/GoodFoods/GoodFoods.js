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
        <div className='container row'>
            {foods.map(gdFood => <Food key={gdFood.id} foodData={gdFood}></Food>)}
        </div>
    );
};

export default GoodFoods;
