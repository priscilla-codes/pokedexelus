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
  reducers: {},
  extraReducers: builder => {}
});

export default pokemonSlice.reducer;
