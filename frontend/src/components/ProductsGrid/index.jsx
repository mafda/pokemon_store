import React from 'react';

import './styles.css';

const Product = (prop) => {
  return (
    <div className="items">
      <h2>{prop.title}</h2>
      <ul>
        {prop.items.map(item => (
          <li key={item.id}>
            <div className="p-img">
              <img src={item.img_url} alt={item.name} />
            </div>
            <div className="p-name">
              <p>{item.name}</p>
            </div>
            <div className="p-description p-weight">
              <p>Weight:</p>
              <p>{item.other} kg</p>
            </div>
            <div className="p-description p-price">
              <p>Price:</p>
              <p>${(item.price).toFixed(2)}</p>
            </div>
            <button className='buy' onClick={() => { prop.onClick(item) }} >
              Catch it!
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;