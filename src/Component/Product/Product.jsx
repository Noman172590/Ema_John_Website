import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const buttonOnclick=props.buttonOnclick;
    const { img, name, price, seller, ratings } = props.ShowProduct;
   
    return (
        <div className='product'>
            <div >
            <img src={img} alt="" />
            <h5>{name}</h5>
                <h4>Price:$ {price}</h4>
                <h3>Manufacturer:{seller}</h3>
                <h2>Rating: {ratings}<span style={{ color: "red" }}> start</span></h2>
               
            </div>
            <div>
            <button onClick={()=>buttonOnclick(props.ShowProduct)} className='btn_card'>Add to Card <FontAwesomeIcon icon={faShoppingCart} />    </button>
            </div>
           
        </div>

    );
};

export default Product;