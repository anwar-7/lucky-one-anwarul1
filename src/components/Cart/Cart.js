import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import './Cart.css';

const Cart = ({ cart, chooseAgain, chooseOneForMe, handleRemove }) => {
  return (
    <div className="cart">
      <h3>Selected Item</h3>
      {cart.map((pd) => (
        <div key={pd.id}>
          <div className="cart-info">
            <img src={pd.img} alt="" />
            <p>{pd.name}</p>
            <MdDeleteForever
              onClick={() => handleRemove(pd.id)}
              className="icon-btn"
            />{' '}
          </div>
        </div>
      ))}
      <div className="choose-btn">
        <button className="choose-for-me-btn" onClick={chooseOneForMe}>
          Choose 1 for me
        </button>
        <button className="choose-again-btn" onClick={chooseAgain}>
          Choose Again
        </button>
      </div>
    </div>
  );
};

export default Cart;
