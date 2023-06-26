import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Flavors from './Flavors';
import Contact from './Contact';
import { Review } from './Review'; // Update the import statement
import Promotions from './Promotions';
import Cart from './Cart';
import './styles.css';
import logo from './logo.png';
import instagramLogo from './instagram-logo.png';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (flavor) => {
    const confirmAdd = window.confirm('Do you want to add this flavor to the cart?');
    if (confirmAdd) {
      setCart([...cart, flavor]);
    }
  };

  return (
    <div>
      <Router>
        <header>
          <div className="container header-container">
            <div className="logo-container">
              <a href="/">
                <img src={logo} alt="Logo" className="logo" /> {/* Display the logo on the left */}
              </a>
            </div>
            <h1>Ice Cream Shop</h1>
            <a href="https://www.instagram.com/gp_muthu_ff_" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram Logo" className="instagram-logo" /> {/* Display the Instagram logo on the right */}
            </a>
          </div>
        </header>
        <Navbar cartItems={cart.length} />
        <main className="main-container">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/flavors" element={<Flavors addToCart={addToCart} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/reviews" element={<Review />} />
              <Route path="/promotions" element={<Promotions />} />
              <Route path="/cart" element={<Cart items={cart} />} />
            </Routes>
          </div>
        </main>
        <footer>
          <div className="container">
            <p>&copy; 2023 Ice Cream Shop. All rights reserved.</p>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
