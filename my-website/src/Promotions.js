import React from 'react';
import './promotions.css'
function Promotions() {
  const promotions = [
    {
      title: 'Summer Sale',
      description: 'Get 20% off on all ice cream flavors!',
    },
    {
      title: 'Limited-Time Offer',
      description: 'Buy one, get one free on our special sundae!',
    },
    {
      title: 'Seasonal Delights',
      description: 'Try our new refreshing watermelon sorbet!',
    },
  ];

  return (
    <div className="promotions-container">
      <h2>Ongoing Promotions</h2>
      {promotions.map((promotion, index) => (
        <div className="promotion-item" key={index}>
          <h3>{promotion.title}</h3>
          <p>{promotion.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Promotions;
