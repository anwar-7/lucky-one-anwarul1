import React from 'react';
import './Cart.css';

const Cart = ({ cart, chooseAgain }) => {
  return (
    <div className="cart">
      <h3>Selected Item</h3>
      {cart.map((pd) => (
        <div key={pd.id}>
          <div className="cart-info">
            <img src={pd.img} alt="" />
            <p>{pd.name}</p>
          </div>
        </div>
      ))}
      {/* <p>{name}</p> */}
      <div className="choose-btn">
        <button className="choose-for-me-btn">Choose 1 for me</button>
        <button className="choose-again-btn" onClick={chooseAgain}>
          Choose Again
        </button>
      </div>
    </div>
  );
};

export default Cart;
