import React from 'react';

import { FaPlusCircle, FaMinusCircle, FaUserCircle, FaShoppingCart, FaHeart, FaCode } from 'react-icons/fa';

import './App.css'

const App = () => {
  return (
    <div>
      <header>
        <div class="container">
          <div class="t-typ">
            <nav>
              <div class="nav-wrapper">
                <input class="hidden" type="checkbox" id="menuToggle" />
                <label class="menu-btn" for="menuToggle">
                  <div class="menu"></div>
                  <div class="menu"></div>
                  <div class="menu"></div>
                </label>
                <div class="logo-container">
                  <img src="https://dummyimage.com/100x60" alt="Logo" />
                </div>
                <div class="nav-container">
                  <ul class="nav-tabs">
                    <li class="nav-tab">Type 1</li>
                    <li class="nav-tab">Type 2</li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div class="u-car">
            <div class="user">
              <div class="icon">
                <FaUserCircle />
              </div>
              <div class="u-car-text">
                <p>Hello, User</p>
              </div>
            </div>
            <div class="cart">
              <div class="icon">
                <FaShoppingCart />
              </div>
              <div class="u-car-text">
                <p>Cart</p>
              </div>
              <div class="icon">
                <span class="badge">2</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div class="container">
          <div class="items">
            <h2>Title</h2>
            <ul>
              <li>
                <img src="https://dummyimage.com/150x150" alt="" />
                <div class="p-name">
                  <strong>Name</strong>
                </div>
                <div class="p-description">
                  <p>Price</p>
                  <p>Other</p>
                </div>
                <button class='buy'>Buy</button>
              </li>
              <li>
                <img src="https://dummyimage.com/150x150" alt="" />
                <div class="p-name">
                  <strong>Name</strong>
                </div>
                <div class="p-description">
                  <p>Price</p>
                  <p>Other</p>
                </div>
                <button class='buy'>Buy</button>
              </li>
              <li>
                <img src="https://dummyimage.com/150x150" alt="" />
                <div class="p-name">
                  <strong>Name</strong>
                </div>
                <div class="p-description">
                  <p>Price</p>
                  <p>Other</p>
                </div>
                <button class='buy'>Buy</button>
              </li>
              <li>
                <img src="https://dummyimage.com/150x150" alt="" />
                <div class="p-name">
                  <strong>Name</strong>
                </div>
                <div class="p-description">
                  <p>Price</p>
                  <p>Other</p>
                </div>
                <button class='buy'>Buy</button>
              </li>
              <li>
                <img src="https://dummyimage.com/150x150" alt="" />
                <div class="p-name">
                  <strong>Name</strong>
                </div>
                <div class="p-description">
                  <p>Price</p>
                  <p>Other</p>
                </div>
                <button class='buy'>Buy</button>
              </li>
              <li>
                <img src="https://dummyimage.com/150x150" alt="" />
                <div class="p-name">
                  <strong>Name</strong>
                </div>
                <div class="p-description">
                  <p>Price</p>
                  <p>Other</p>
                </div>
                <button class='buy'>Buy</button>
              </li>
            </ul>
          </div>

          <div class="cart">
            <div class='summary-cart'>
              <div class='summary'>
                <div class='summary-title'>
                  <strong>Cart</strong>
                </div>
                <ul>
                  <li>
                    <img src="https://dummyimage.com/90" alt="" />
                    <div class='summary-description'>
                      <div class='summary-description-name'>
                        <strong>Name</strong>
                      </div>
                      <div class='summary-description-product'>
                        <p>Quantity</p>
                        <p>Price</p>
                      </div>
                    </div>
                    <div class='summary-add'>
                      <span><FaPlusCircle /></span>
                      <span><FaMinusCircle /></span>
                    </div>
                  </li>
                  <li>
                    <img src="https://dummyimage.com/90" alt="" />
                    <div class='summary-description'>
                      <div class='summary-description-name'>
                        <strong>Name</strong>
                      </div>
                      <div class='summary-description-product'>
                        <p>Quantity</p>
                        <p>Price</p>
                      </div>
                    </div>
                    <div class='summary-add'>
                      <span><FaPlusCircle /></span>
                      <span><FaMinusCircle /></span>
                    </div>
                  </li>
                </ul>
                <div class='summary-cost'>
                  <div class='cost'>
                    <div class='label'><strong>Subtotal</strong></div>
                    <div class='subtotal'>
                      <p>Price</p>
                    </div>
                  </div>
                  <div class='cost'>
                    <div class='label'><strong>Shipping</strong></div>
                    <div class='subtotal'>
                      <p>Price</p>
                    </div>
                  </div>
                  <div class='cost'>
                    <div class='label'><strong>Discount</strong></div>
                    <div class='subtotal'>
                      <p>Price</p>
                    </div>
                  </div>
                  <div class='cost'>
                    <div class='label total'>Total</div>
                    <div class='subtotal total'>
                      <p>Total</p>
                    </div>
                  </div>
                </div>
              </div>
              <input type="submit" value="Checkout" class="checkout" />
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div class="sign">
          <p>< FaCode /> with < FaHeart /> by <a href="https://mafda.github.io/"
            target="blank">mafda</a></p>
        </div>
      </footer>

    </div>
  );
}

export default App;
