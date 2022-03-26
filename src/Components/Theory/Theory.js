import React from 'react';
import './Theory.css'

const Theory = () => {
    return (
        <div className='container  mt-5'>
            <div className='ans'>
                <h3>The process of useState working</h3>
                <p className='container p-3'>UseState is a hook of react. Like any other hook useState  also use to bend. This helps react for a smooth user experience.UseState is a function which enables to define an internal state of functional components. The first value of useState ia variable which is accessible by the components and second value is a function which is used to set the srate of components. Each piece of state has a single value , this value can be an array, an  object,a boolean orany other type. Even we can change the default value of useState.   </p>
            </div>
            <div className='ans mt-5 '>
                <h3>The differences between props and state</h3>
                <p className='container p-3'>By using props and state we can pass data under  component. However, they both has many differences.
                    <li>Props can pass data one components to another. State can only pass under within a component.</li>
                    <li>Props are read-only. State is both read-only and write.</li>
                    <li> Props can be changed by parent components but state  can't be changed .</li>
                    <li>Props can change in child components but state can't</li>
                </p>
            </div>
        </div>
    );
};

export default Theory;