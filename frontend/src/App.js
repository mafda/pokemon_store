import React from 'react';

import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';
import ProductsGrid from './components/ProductsGrid';
import Cart from './components/Cart';

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

  const itemsCount = 3;

  const types = ['Type 1', 'Type 2'];
  const selectedTypeIdx = 0;

  const user = 'User';

  const subtotal = 10;
  const shipping = 4;
  const discount = 1;
  const total = 100;


  return (
    <div>
      <Header
        count={itemsCount}
        types={types}
        user={user}
      />

      <main>
        <div className="container">

          <ProductsGrid
            items={items}
            title={types[selectedTypeIdx]}
          />

          <Cart
            selectedItems={selectedItems}
            subtotal={subtotal}
            shipping={shipping}
            discount={discount}
            total={total}
          />

        </div>
      </main>

      <Footer />

    </div>
  );
}

export default App;
