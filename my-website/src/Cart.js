import React from 'react';
function Cart({ items }) {
  if (!items || items.length === 0) {
    return <h2><p>Your cart is empty.</p></h2>;
  }

  // Calculate total price and count
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const totalCount = items.length;

  return (
    <div class="cart">
      <center>
      <h2>Cart</h2>
      <ul>
        <h3>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
        </h3>
      </ul>
      <h3>Total Items: {totalCount}</h3>
      <h3>Total Price: ${totalPrice}</h3>
      </center>
    </div>
  );
}

export default Cart;
