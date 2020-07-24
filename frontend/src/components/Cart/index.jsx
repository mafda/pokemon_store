import React from 'react';
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
  return (
    <ul>
      {prop.selectedItems.map(item => (
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
  );
};

const Cart = (prop) => {
  return (
    <div className="cart">
      <div className='summary-cart'>
        <div className='summary'>

          <div className='summary-title'>
            <strong>Cart</strong>
            <ProductList selectedItems={prop.selectedItems} />
          </div>

          <div className='summary-cost'>

            <PartialValues
              label='Subtotal'
              value={prop.subtotal}
              total={false}
            />
            <PartialValues
              label='Shipping'
              value={prop.shipping}
              total={false}
            />
            <PartialValues
              label='Discount'
              value={prop.discount}
              total={false}
            />

            <PartialValues
              label='Total'
              value={prop.total}
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