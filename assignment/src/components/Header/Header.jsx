import React from 'react'
import "./Header.css"
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <div className='main-header'>
        <div className="header">
            <div className="left">TeeRex Store</div>
            <div className="right">
                <p className="products">Products</p>
                <div className="icon">
                    <i className="cart-icon"><AiOutlineShoppingCart/></i>
                    <div className="cart-count">1</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
