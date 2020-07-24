import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';

import './styles.css';
import './nav.css';

const Header = (prop) => {

  const [productCounter, setProductCounter] = useState(0);

  useEffect(() => {
    setProductCounter(prop.selectedItems.length);
  }, [prop.selectedItems]);

  return (
    <header>
      <div className="container">
        <div className="t-typ">
          <nav>
            <div className="nav-wrapper">
              <input className="hidden" type="checkbox" id="menuToggle" />
              <label className="menu-btn" htmlFor="menuToggle">
                <div className="menu"></div>
                <div className="menu"></div>
                <div className="menu"></div>
              </label>
              <div className="logo-container">
                <img src="https://dummyimage.com/100x60" alt="Logo" />
              </div>
              <div className="nav-container">
                <ul className="nav-tabs">
                  {prop.types.map(item => (
                    <li className="nav-tab" key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="u-car">
          <div className="user">
            <div className="icon">
              <FaUserCircle />
            </div>
            <div className="u-car-text">
              <p>Hello, {prop.user}</p>
            </div>
          </div>
          <div className="cart">
            <div className="icon">
              <FaShoppingCart />
            </div>
            <div className="u-car-text">
              <p>Cart</p>
            </div>
            <div className="icon">
              <span className="badge">{productCounter}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;