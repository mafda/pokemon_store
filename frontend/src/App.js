import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';
import ProductsGrid from './components/ProductsGrid';
import Cart from './components/Cart';


const App = () => {

  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const itemPerPage = 12;
  const [pokeByType, setPokeByType] = useState([]);
  const [productCounter, setProductCounter] = useState(0);


  // Initial loading
  useEffect(() => {
    const loadPokeByType = async (type) => {
      const response = await api.get(`/type/${type}/`);
      setPokeByType(response.data.pokemon);
    };

    loadPokeByType(10);
  }, []);

  // Load pokemon 
  useEffect(() => {

    if (pokeByType.length === 0) {
      return
    }

    const loadPokemon = async () => {
      const listPokemon = [];
      const start = pageNumber * itemPerPage;
      const end = (pageNumber + 1) * itemPerPage;
      for (let i = start; i < end; i++) {
        const { data } = await api.get(pokeByType[i].pokemon.url);
        listPokemon.push({
          id: i,
          name: data.name[0].toUpperCase() + data.name.slice(1),
          price: data.base_experience,
          other: data.weight,
          img_url: data.sprites.front_default,
        });
      }
      setPokemon(listPokemon);
    };

    loadPokemon();

  }, [pokeByType, pageNumber]);

  const types = ['Type 1', 'Type 2'];
  const selectedTypeIdx = 0;

  const user = 'User';


  const handleIncreaseItem = (item) => {
    setSelectedPokemon([...selectedPokemon, item]);
  };

  const handleDecreaseItem = (item) => {
    var found = false;
    const filtered = selectedPokemon.filter(v => found || !(found = v === item));
    setSelectedPokemon(filtered);
  };

  return (
    <div>
      <Header
        types={types}
        user={user}
        selectedItems={selectedPokemon}
      />

      <main>
        <div className="container">

          <ProductsGrid
            items={pokemon}
            onClick={handleIncreaseItem}
            title={types[selectedTypeIdx]}
          />

          <Cart
            selectedItems={selectedPokemon}
            increaseItem={handleIncreaseItem}
            decreaseItem={handleDecreaseItem}
          />

        </div>
      </main>

      <Footer />

    </div>
  );
}

export default App;
