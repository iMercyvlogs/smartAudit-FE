'use client'  
// the previouse LOc makes this whole component client server render


import React from 'react'

const AddToCart = () =>{
    return(
        <div>
            <button className='btn btn-primary' onClick={() => console.log('Click')}>Add to Cart</button>
        </div>
    )
}

export default AddToCart 