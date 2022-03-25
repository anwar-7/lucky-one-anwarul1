import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  //   console.log(cart);
  return (
    <div className="cart">
      <h3>Selected Item</h3>
      <p>Name: {cart.name}</p>
      <button>Choose 1 for me</button>
      <button>Remove</button>
    </div>
  );
};

export default Cart;
