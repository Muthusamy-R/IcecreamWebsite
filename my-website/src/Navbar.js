import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ cartItems }) {
  return (
    <nav>
      <div className="header-container">
        <ul className="navbar-items">
          <li>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/flavors" activeClassName="active">Flavors</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/reviews" activeClassName="active">Ratings & Reviews</NavLink>
          </li>
          <li>
            <NavLink to="/promotions" activeClassName="active">Promotions</NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName="active">Cart</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
