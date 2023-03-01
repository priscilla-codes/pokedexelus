import { createSlice } from '@reduxjs/toolkit';
import data from '../pokemon.json';

const initialState = {
  favorites: [],
  pokemonList: data.results,
  searchResults: [],
  searchStatus: 'idle',
  cache: {}
};

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
    },
    unfavorite: (state, action) => {
      const name = action.payload.name;
      const index = state.favorites.indexOf(name);

      if (index >= 0) {
        state.favorites.splice(index, 1);
      }
    }
  },
  extraReducers: builder => {}
});

export default pokemonSlice.reducer;
