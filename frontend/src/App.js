import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';
import ProductsGrid from './components/ProductsGrid';
import Cart from './components/Cart';


const App = () => {

  // User name - hard code
  const user = 'User';

  // Pokemon types - fire and water hard code
  const types = [{ name: 'Fire', id: 10 }, { name: 'Water', id: 11 }];
  const [pokemonType, setPokemonType] = useState(types[0].id);
  const [gridTitle, setGridTitle] = useState(types[0].name);

  // Pokemon grid
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [pokeByType, setPokeByType] = useState([]);

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const itemPerPage = 12;

  // ===============================================================

  // Initial loading API
  useEffect(() => {
    const loadPokeByType = async (type) => {
      const response = await api.get(`/type/${type}/`);
      setPokeByType(response.data.pokemon);
    };

    loadPokeByType(pokemonType);
  }, [pokemonType]);

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

  // ===============================================================

  // Pokemon type
  const handleTypes = (item) => {
    setPokemonType(item.id);
    setGridTitle(item.name);
  };

  // Add items
  const handleIncreaseItem = (item) => {
    setSelectedPokemon([...selectedPokemon, item]);
  };

  // Remove items
  const handleDecreaseItem = (item) => {
    var found = false;
    const filtered = selectedPokemon.filter(v => found || !(found = v === item));
    setSelectedPokemon(filtered);
  };

  return (
    <div>
      <Header
        types={types}
        onClickTypes={handleTypes}
        user={user}
        selectedItems={selectedPokemon}
      />

      <main>
        <div className="container">

          <ProductsGrid
            items={pokemon}
            onClick={handleIncreaseItem}
            title={gridTitle}
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
