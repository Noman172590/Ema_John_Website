import React from 'react';
import logo from '../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='logoBackground'>
            <div>
            <img src={logo} alt="" />
            </div>
            <div className='ancorTag'>
                     <a href="1">Order</a>
                     <a href="2">Order Review</a>
                     <a href="3">Manage Inventory</a>
                     <a href="4">Login</a>
            </div>

        </div>

        
    );
};

export default Header;