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
    var newSubtotal = 0;
    var newWeight = 0;

    prop.selectedItems.forEach((item) => {
      newCounts[item.id] = (newCounts[item.id] || 0) + 1;
      if (newCounts[item.id] === 1) {
        newSingle.push(item);
      }

      newPrices[item.id] = newCounts[item.id] * item.price;

      newSubtotal += item.price;
      newWeight += item.other;
    });

    setSingleSelected(newSingle);
    setCounts(newCounts);
    setPricePerQtt(newPrices);
    setSubtotal(newSubtotal);
    setWeight(newWeight);

  }, [prop.selectedItems, setSubtotal, setWeight]);

  return (
    <ul>
      {singleSelected.map(item => (
        <li key={item.id}>
          <img src={item.img_url} alt={item.name} />
          <div className='summary-description'>
            <div className='summary-description-name'>
              <strong>{item.name}</strong>
            </div>
            <div className='summary-description-product'>
              <p>Quantity: {counts[item.id]}</p>
              <p>${pricePerQtt[item.id].toFixed(2)}</p>
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

  useEffect(() => {
    setShipping(weight / 10);
  }, [weight]);

  useEffect(() => {
    setTotal(subtotal + shipping);

  }, [subtotal, shipping]);

  return (
    <div className="cart">
      <div className='summary-cart'>
        <div className='summary'>

          <div className='summary-title'>
            <strong>Cart</strong>
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
        <input type="submit" value="Checkout" className="checkout" />
      </div>
    </div>
  );
};

export default Cart;