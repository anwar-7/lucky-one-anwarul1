import React from 'react';
import './Product.css';
import { BsFillCartPlusFill } from 'react-icons/bs';

const Product = ({ product, handleAddToCart }) => {
  // console.log(product);
  const { img, name, price } = product;
  return (
    <div className="product-container">
      <img src={img} alt="" />
      <div className="product-info">
        <h3 className="info-name">
          <small>{name}</small>
        </h3>
        <p className="info-price">Price: ${price}</p>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        className="btn-addToCart"
      >
        Add To Cart
        <BsFillCartPlusFill className="icon" />{' '}
      </button>
    </div>
  );
};

export default Product;
