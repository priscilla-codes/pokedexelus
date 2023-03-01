import { createSlice } from '@reduxjs/toolkit';
import data from '../pokemon.json';

const initialState = {
  favorites: [],
  pokemonList: data.results,
  searchResults: [],
  searchStatus: 'idle',
  cache: {}
};

function loadFromLocalStorage() {
  const pokemonFavorites = localStorage.getItem('pokemon.favorites');
  if (pokemonFavorites) {
    initialState.favorites = JSON.parse(pokemonFavorites);
  }

  return initialState;
}

function saveToLocalStorage(favorites) {
  if (favorites) {
    localStorage.setItem('pokemon.favorites', JSON.stringify(favorites));
  }
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    favorite: (state, action) => {
      const name = action.payload.name;
      if (state.favorites.includes(name)) {
        return;
      }
      state.favorites.push(name);
      saveToLocalStorage(state.favorites);
    },
    unfavorite: (state, action) => {
      const name = action.payload.name;
      const index = state.favorites.indexOf(name);

      if (index >= 0) {
        state.favorites.splice(index, 1);
      }

      saveToLocalStorage(state.favorites);
    }
  },
  extraReducers: builder => {}
});

export default pokemonSlice.reducer;
