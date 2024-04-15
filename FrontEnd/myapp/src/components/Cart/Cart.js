import React from 'react';

const Cart = ({ cart }) => {
  // Check if cartItems is undefined or null before mapping over it
  if (cart === undefined) {
    return <div>Loading...</div>;
  }
  console.log(cart)

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.imageUrl} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>Cost: ${item.cost}</p>
            <p>Origin: {item.origin}</p>
            <p>Type: {item.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
