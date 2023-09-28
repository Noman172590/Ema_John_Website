import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../product/product';

const Shop = () => {
    const [product,setProduct]=useState([])
    const [card,setCard]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
        
    },[]);
    const buttonOnclick=(Product)=>{
        const newCard=[...card,product];
        setCard(newCard)
    }
    return (
        <div className='shopmaking'>
           <div className='SHowcontainer'>
           {
                product.map(products=><Product key={products.id} ShowProduct={products} buttonOnclick={buttonOnclick}></Product>)
                
              }
           </div>
           <div>
           <h1>Order Summary</h1>
           <h2>Selected Items: {card.length}</h2>
            
            </div>  
               
        </div>
    );
};

export default Shop;