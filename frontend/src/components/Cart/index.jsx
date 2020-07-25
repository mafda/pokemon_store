import React, { useState, useEffect } from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

import './styles.css';

const PartialValues = (prop) => {

  const totalStyle = prop.total ? ' total' : '';
  const labelStyle = 'label' + totalStyle;
  const valueStyle = 'subtotal' + totalStyle;

  const Label = (labelProp) => {
    if (prop.total) {
      return labelProp.label;
    } else {
      return <strong>{labelProp.label}</strong>
    }
  };

  return (
    <div className='cost'>
      <div className={labelStyle}>
        <Label label={prop.label} />
      </div>
      <div className={valueStyle}>
        <p>{prop.value}</p>
      </div>
    </div>
  );
};

const ProductList = (prop) => {

  const [singleSelected, setSingleSelected] = useState([]);
  const [counts, setCounts] = useState([]);
  const [pricePerQtt, setPricePerQtt] = useState([]);
  const setSubtotal = prop.setSubtotal;
  const setWeight = prop.setWeight;

  useEffect(() => {
    const newCounts = {};
    const newSingle = [];
    const newPrices = {};
    var newWeight = 0;
    var newSubtotal = 0;

    prop.selectedItems.forEach((item) => {
      newCounts[item.name] = (newCounts[item.name] || 0) + 1;
      if (newCounts[item.name] === 1) {
        newSingle.push(item);
      }

      newPrices[item.name] = newCounts[item.name] * item.price;

      // Calculate weight
      newWeight += item.other;

      // Calculate subtotal price
      newSubtotal += item.price;
    });

    setSingleSelected(newSingle);
    setCounts(newCounts);
    setPricePerQtt(newPrices);
    setWeight(newWeight);
    setSubtotal(newSubtotal);

  }, [prop.selectedItems, setSubtotal, setWeight]);

  return (
    <ul>
      {singleSelected.map(item => (
        <li key={item.name}>
          <div className="summary-wrapper">
            <div className="summary-img">
              <img src={item.img_url} alt={item.name} />
            </div>
            <div className='summary-description'>
              <div className='summary-description-name'>
                <p>{item.name}</p>
              </div>
              <div className='summary-description-product'>
                <p className='s-price'>Price: ${pricePerQtt[item.name].toFixed(2)}</p>
                <p>Quantity: {counts[item.name]}</p>
              </div>
            </div>
            <div className='summary-add'>
              <span
                onClick={() => { prop.increaseItem(item) }}
              >
                <FaPlusCircle />
              </span>
              <span
                onClick={() => { prop.decreaseItem(item) }}
              >
                <FaMinusCircle />
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const Cart = (prop) => {
  const [subtotal, setSubtotal] = useState(0);
  const [weight, setWeight] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartStyle, setCartStyle] = useState("cart");

  // Calculate shipping price
  useEffect(() => {
    setShipping(weight / 10);
  }, [weight]);

  // Calculate total price
  useEffect(() => {
    setTotal(subtotal + shipping);

  }, [subtotal, shipping]);

  // 
  useEffect(() => {
    if (prop.hiddenCart) {
      setCartStyle("cart hidden");
    } else {
      setCartStyle("cart");
    }

  }, [prop.hiddenCart]);


  return (
    <div className={cartStyle}>
      <div className='summary-cart'>
        <div className='summary'>
          <p>Summary Order</p>

          <div className='summary-product'>
            <ProductList
              selectedItems={prop.selectedItems}
              increaseItem={prop.increaseItem}
              decreaseItem={prop.decreaseItem}
              setSubtotal={setSubtotal}
              setWeight={setWeight}
            />
          </div>

          <div className='summary-cost'>
            <PartialValues
              label='Weight'
              value={`${weight} kg`}
              total={false}
            />

            <PartialValues
              label='Subtotal'
              value={`$${subtotal.toFixed(2)}`}
              total={false}
            />

            <PartialValues
              label='Shipping'
              value={`$${shipping.toFixed(2)}`}
              total={false}
            />

            <PartialValues
              label='Total'
              value={`$${total.toFixed(2)}`}
              total={true}
            />
          </div>
        </div>
        <div className="checkout-wrapper">
          <input type="submit" value="Catch 'em all!" className="checkout" />
        </div>
      </div>
    </div>
  );
};

export default Cart;