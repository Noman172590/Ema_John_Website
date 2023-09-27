import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../product/product';

const Shop = () => {
    const [product,setProduct]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    })
    return (
        <div className='shopmaking'>
           <div className='SHowcontainer'>
           {
                product.map(products=><Product key={products.id} ShowProduct={products}></Product>)
              }
           </div>
           <div>
           <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, distinctio?</h3>
            
            </div>  
               
        </div>
    );
};

export default Shop;