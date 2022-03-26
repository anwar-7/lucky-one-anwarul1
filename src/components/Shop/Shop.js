import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(cart);

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    if (cart.length < 4) {
      const addedToCart = cart.find((cart) => cart.id === product.id);
      if (addedToCart) return;
      const newCart = [...cart, product];
      setCart(newCart);
    }
  };

  const chooseAgain = () => {
    setCart([]);
  };

  const chooseOneForMe = () => {
    const randomItem = [cart[Math.floor(Math.random() * cart.length)]];
    setCart(randomItem);
  };

  // const handleRemoveSingleCartItem = (id) => {
  //   const newCarts = carts.filter((cart) => {
  //     return cart.id !== id;
  //   });

  //   setCarts(newCarts);
  // };

  const handleRemove = (id) => {
    const newCart = cart.filter((cart) => {
      return cart.id !== id;
    });
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart
          cart={cart}
          chooseAgain={chooseAgain}
          chooseOneForMe={chooseOneForMe}
          handleRemove={handleRemove}
        ></Cart>
      </div>
    </div>
  );
};

export default Shop;
