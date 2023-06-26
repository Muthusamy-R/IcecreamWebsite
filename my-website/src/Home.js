import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div class='home'>
      <center>
      <h2>Welcome to Our Ice Cream Shop!</h2>
      <h3>
      <p>Indulge in the finest flavors of handcrafted ice creams.</p>
      <p>Explore our menu, place an order, and enjoy the creamy goodness!</p>
      </h3>
      <Link to="/flavors">
        <button>View Flavors</button>
      </Link>
      </center>
    </div>
  );
}

export default Home;
