import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import './styles.css';

const Product = (prop) => {
  const [styleItems, setStyleItems] = useState("items");

  useEffect(() => {

    if (prop.hiddenCart) {
      setStyleItems("items full");
    } else {
      setStyleItems("items");
    }

  }, [prop.hiddenCart]);

  return (
    <div className={styleItems}>
      <h2>{prop.title}</h2>
      <InfiniteScroll
        loadMore={prop.loadMore}
        hasMore={prop.hasMore}
        loader={<div key={0}>Loading...</div>}
      >
        <ul>
          {prop.items.map(item => (
            <li key={item.name}>
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
      </InfiniteScroll>
    </div >
  );
};

export default Product;
