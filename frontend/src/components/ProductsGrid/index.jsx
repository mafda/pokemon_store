import React from 'react';

import './styles.css';

const Product = (prop) => {
  return (
    <div className="items">
      <h2>{prop.title}</h2>
      <ul>
        {prop.items.map(item => (
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
  );
};

export default Product;