import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';
import ProductsGrid from './components/ProductsGrid';
import Cart from './components/Cart';
import Styling from './components/Styling';
import Modal from './components/Modal';

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
  const [hasMore, setHasMore] = useState(false);

  // Hidden cart
  const [hiddenCart, setHiddenCart] = useState(false);
  const windowSize = useWindowSize();
  const [autoHidden, setAutoHidden] = useState(true);

  // Modal
  const [modalIsOpen, setIsOpen] = useState(false);

  // ===============================================================

  // Initial loading API
  useEffect(() => {
    const loadPokeByType = async (type) => {
      setHasMore(false);
      const response = await api.get(`/type/${type}/`);
      setPokeByType(response.data.pokemon);
      setPageNumber(0);
      setPokemon([]);
      setHasMore(true);
    };

    loadPokeByType(pokemonType);

  }, [pokemonType]);

  // Load pokemon 
  const loadPokemon = async () => {
    setHasMore(false);

    const listPokemon = [...pokemon];
    const start = pageNumber * itemPerPage;
    const end = Math.min((pageNumber + 1) * itemPerPage, pokeByType.length);

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
    setPageNumber(pageNumber + 1);
    setHasMore(end !== pokeByType.length);
  };

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

  // Modal
  const openModal = () => {
    console.log('modal');
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
    console.log('close');
    setSelectedPokemon([]);
  }


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
      <Modal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
      <Header
        types={types}
        onClickTypes={handleTypes}
        user={user}
        selectedItems={selectedPokemon}
        onCartClick={handleCartClick}
      />

      <main id="main">
        <div className="container">

          <ProductsGrid
            items={pokemon}
            title={gridTitle}
            hiddenCart={hiddenCart}
            hasMore={hasMore}
            onClick={handleIncreaseItem}
            loadMore={loadPokemon}
          />

          <Cart
            selectedItems={selectedPokemon}
            hiddenCart={hiddenCart}
            increaseItem={handleIncreaseItem}
            decreaseItem={handleDecreaseItem}
            onCheckout={openModal}
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
