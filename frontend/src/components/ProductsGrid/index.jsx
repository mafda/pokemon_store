import React from 'react';

import './styles.css';

const Product = (prop) => {
  return (
    <div className="items">
      <h2>{prop.title}</h2>
      <ul>
        {prop.items.map(item => (
          <li key={item.id}>
            <img src={item.img_url} alt={item.name} />
            <div className="p-name">
              <strong>{item.name}</strong>
            </div>
            <div className="p-description">
              <p>${(item.price).toFixed(2)}</p>
              <p>{item.other} kg</p>
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