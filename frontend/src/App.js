import React from 'react';

import { FaPlusCircle, FaMinusCircle, FaUserCircle, FaShoppingCart, FaHeart, FaCode } from 'react-icons/fa';

import './App.css'

const App = () => {

  const items = [
    { id: 1, name: "name1", price: 123, other: "typeA" },
    { id: 2, name: "name2", price: 456, other: "typeB" },
    { id: 3, name: "name3", price: 789, other: "typeC" },
    { id: 4, name: "name4", price: 112, other: "typeA" },
    { id: 5, name: "name5", price: 345, other: "typeB" }
  ];

  const selectedItems = [
    { id: 1, name: "selected1", price: 123, quantity: "1" },
    { id: 2, name: "selected2", price: 456, quantity: "2" },
    { id: 3, name: "selected3", price: 789, quantity: "3" }
  ];

  return (
    <div>
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
                    <li className="nav-tab">Type 1</li>
                    <li className="nav-tab">Type 2</li>
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
                <p>Hello, User</p>
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
                <span className="badge">2</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="items">
            <h2>Title</h2>
            <ul>
              {items.map(item => (
                <li key={item.id}>
                  <img src="https://dummyimage.com/150x150" alt="" />
                  <div className="p-name">
                    <strong>{item.name}</strong>
                  </div>
                  <div className="p-description">
                    <p>{item.price}</p>
                    <p>{item.other}</p>
                  </div>
                  <button className='buy'>Buy</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="cart">
            <div className='summary-cart'>
              <div className='summary'>
                <div className='summary-title'>
                  <strong>Cart</strong>
                </div>
                <ul>
                  {selectedItems.map(item => (
                    <li key={item.id}>
                      <img src="https://dummyimage.com/90" alt="" />
                      <div className='summary-description'>
                        <div className='summary-description-name'>
                          <strong>{item.name}</strong>
                        </div>
                        <div className='summary-description-product'>
                          <p>{item.quantity}</p>
                          <p>{item.price}</p>
                        </div>
                      </div>
                      <div className='summary-add'>
                        <span><FaPlusCircle /></span>
                        <span><FaMinusCircle /></span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className='summary-cost'>
                  <div className='cost'>
                    <div className='label'><strong>Subtotal</strong></div>
                    <div className='subtotal'>
                      <p>Price</p>
                    </div>
                  </div>
                  <div className='cost'>
                    <div className='label'><strong>Shipping</strong></div>
                    <div className='subtotal'>
                      <p>Price</p>
                    </div>
                  </div>
                  <div className='cost'>
                    <div className='label'><strong>Discount</strong></div>
                    <div className='subtotal'>
                      <p>Price</p>
                    </div>
                  </div>
                  <div className='cost'>
                    <div className='label total'>Total</div>
                    <div className='subtotal total'>
                      <p>Total</p>
                    </div>
                  </div>
                </div>
              </div>
              <input type="submit" value="Checkout" className="checkout" />
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="sign">
          <p>< FaCode /> with < FaHeart /> by <a href="https://mafda.github.io/"
            target="blank">mafda</a></p>
        </div>
      </footer>

    </div>
  );
}

export default App;
