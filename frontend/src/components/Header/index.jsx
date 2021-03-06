import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaShoppingCart, FaSearch, FaWindowClose } from 'react-icons/fa';

import './styles.css';
import './nav.css';
import './search.css'

import logo from '../../assets/pokemon-logo-6.png';

const Header = (prop) => {

  const [productCounter, setProductCounter] = useState(0);
  const [searchStyle, setSearchStyle] = useState("search search-hidden");
  const [hiddenSearch, setHiddenSearch] = useState(true);

  useEffect(() => {
    setProductCounter(prop.selectedItems.length);
  }, [prop.selectedItems]);

  // Hidden Search
  useEffect(() => {
    if (hiddenSearch) {
      setSearchStyle("search search-hidden");
    } else {
      setSearchStyle("search");
    }
  }, [hiddenSearch]);

  const handleSearch = () => {
    setHiddenSearch(!hiddenSearch);
  };

  const handleCloseSearch = () => {
    prop.setSearchValue('');
    document.getElementById("search").value = "";
    setHiddenSearch(true);
  };

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
                <img src={logo} alt="Logo" />
              </div>
              <div className="nav-container">
                <ul className="nav-tabs">
                  {prop.types.map(item => (
                    <li
                      className="nav-tab"
                      key={item.id}
                      onClick={() => { prop.onClickTypes(item) }}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="u-car">

          <div
            className="search-wrapper"
            onClick={handleSearch}
          >
            <div className="icon">
              <FaSearch />
            </div>
            <div className="u-car-text">
              <p>Search</p>
            </div>
          </div>

          <div className="user-wrapper">
            <div className="icon">
              <FaUserCircle />
            </div>
            <div className="u-car-text">
              <p>Hello, {prop.user}</p>
            </div>
          </div>

          <div className="cart-wrapper" onClick={prop.onCartClick}>
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
      <div className={searchStyle}>
        <input
          id="search"
          type="text"
          placeholder="Enter name"
          onChange={(e) => prop.onChangeSearch(e)}
          value={prop.searchValue}
        ></input>
        <span onClick={handleCloseSearch}><FaWindowClose /></span>
      </div>
    </header>
  )
}

export default Header;