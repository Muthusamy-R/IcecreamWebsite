import React from 'react';
import './flavors.css';

function Flavors({ addToCart }) {
  const flavors = [
    {
      id: 1,
      name: 'Vanilla',
      image: process.env.PUBLIC_URL + '/vanilla.jpg',
      price: 5,
    },
    {
      id: 2,
      name: 'Chocolate',
      image: process.env.PUBLIC_URL + '/chocolate.jpg',
      price: 10,
    },
    {
      id: 3,
      name: 'Strawberry',
      image: process.env.PUBLIC_URL + '/strawberry.jpeg',
      price: 15,
    },
    {
      id: 4,
      name: 'Mint Chocolate Chip',
      image: process.env.PUBLIC_URL + '/mint-chocolate-chip.jpg',
      price: 7,
    },
    {
      id: 5,
      name: 'Cookies and Cream',
      image: process.env.PUBLIC_URL + '/cookies-and-cream.jpeg',
      price: 8,
    },
    {
      id: 6,
      name: 'Rocky Road',
      image: process.env.PUBLIC_URL + '/rocky-road.jpeg',
      price: 9,
    },
  ];

  return (
    <div>
      <h2>Our Flavors</h2>
      <div className="flavors-container">
        {flavors.map((flavor) => (
          <div key={flavor.id} className="flavor-item">
            <img src={flavor.image} alt={flavor.name} />
            <h3>{flavor.name}</h3>
            <p>{flavor.description}</p>
            <button onClick={() => addToCart(flavor)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flavors;
