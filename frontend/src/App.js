import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';
import ProductsGrid from './components/ProductsGrid';
import Cart from './components/Cart';
import Styling from './components/Styling';

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

  // Hidden cart
  const [hiddenCart, setHiddenCart] = useState(false);
  const windowSize = useWindowSize();
  const [autoHidden, setAutoHidden] = useState(true);

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

      // Include one pokemon to cart
      setSelectedPokemon([listPokemon[0]]);
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

  // Hidden cart
  const handleCartClick = () => {
    setHiddenCart(!hiddenCart);
    setAutoHidden(false);
  };

  useEffect(() => {
    const width = 1100;

    if (autoHidden && !hiddenCart && windowSize.width < width) {
      setHiddenCart(true);
    }

    if (autoHidden && hiddenCart && windowSize.width >= width) {
      setHiddenCart(false);
    }

    setAutoHidden(true);

  }, [windowSize, hiddenCart]);


  return (
    <div>
      <Styling pokemonType={pokemonType} />
      <Header
        types={types}
        onClickTypes={handleTypes}
        user={user}
        selectedItems={selectedPokemon}
        onCartClick={handleCartClick}
      />

      <main>
        <div className="container">

          <ProductsGrid
            items={pokemon}
            onClick={handleIncreaseItem}
            title={gridTitle}
            hiddenCart={hiddenCart}
          />

          <Cart
            selectedItems={selectedPokemon}
            increaseItem={handleIncreaseItem}
            decreaseItem={handleDecreaseItem}
            hiddenCart={hiddenCart}
          />

        </div>
      </main>

      <Footer />

    </div>
  );
}

export default App;

// useWindowSize() hook
// src: https://usehooks.com/useWindowSize/
function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}