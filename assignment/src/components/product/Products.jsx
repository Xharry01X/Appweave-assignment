import React from 'react';
import './Product.css'; // Make sure your CSS file is imported
import Filter from '../filter/Filter';
import { product } from "../../api/api";

const Products = () => {
  return (
    <div className='design'>
      <div className="left-filter">
        {/* Filter component will go here */}
        <Filter /> Render if product page opened
      </div>
      <div className="right">
        {/* Product display */}
        {product.map((item, index) => (
          <div className="product" key={index}>
            <div className="product-image">
              <img src={item.url} alt={item.name} />
            </div>
            <div className="product-details">
              <h2 className="product-name">{item.name}</h2>
              <p className="product-price">${item.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
