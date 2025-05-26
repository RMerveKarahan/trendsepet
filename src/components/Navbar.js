import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';
import logo from '../assets/trendsepet-logo.png';

function Navbar() {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img
            src={logo}
            alt="TrendSepet Logo"
            style={{
              height: '38px',
              width: '100px',
              objectFit: 'cover',
            }}
          />
        </Link>
      </div>

      <div className="navbar-center">
      <div className="search-wrapper">
  <input
    type="text"
    placeholder="Ürün ara..."
    className="search-input"
  />
<span className="search-icon">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="18"
    viewBox="0 0 24 24"
    width="18"
    fill="#FF6600"  
  >
    <path d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 001.48-5.34C15.33 5.59 12.73 3 9.5 3S3.67 5.59 3.67 8.39c0 2.8 2.6 5.39 5.83 5.39a6.47 6.47 0 005.34-1.48l.27.28v.79l4.99 5 1.49-1.49-5-4.99zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
</span>


</div>

      </div>

      <div className="navbar-right">
      <Link to="/login" className="nav-link">
    <span className="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        width="20"
        fill="none"
        stroke="#333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21c1.5-4 6-4 6-4s4.5 0 6 4" />
      </svg>
    </span>
    <span className="link-text">Giriş Yap</span>
  </Link>

  <Link to="/favorites" className="nav-link">
  <span className="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        width="20"
        fill="none"
        stroke="#333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.72-7.72 1.06-1.06a5.5 5.5 0 0 0 0-7.84z" />
      </svg>
    </span>
    <span className="link-text">Favoriler</span>
  </Link>
        <Link to="/cart" className="cart-link">
        <span className="icon"> <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    width="24"
    fill="none"
    stroke="#FF6600"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    style={{ verticalAlign: 'middle' }}
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
    </span>
    
          
          {totalQuantity > 0 && (
            <span className="cart-badge">
              {totalQuantity}
            </span>
            
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
