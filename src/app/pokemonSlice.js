import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import data from '../pokemon.json';

const initialState = {
  favorites: [],
  pokemonList: data.results,
  searchResults: [],
  searchStatus: 'idle',
  cache: {}
};

function loadFromLocalStorage() {
  const pokemonCache = localStorage.getItem('pokemon.cache');
  if (pokemonCache) {
    initialState.cache = JSON.parse(pokemonCache);
  }

  const pokemonFavorites = localStorage.getItem('pokemon.favorites');
  if (pokemonFavorites) {
    initialState.favorites = JSON.parse(pokemonFavorites);
  }

  return initialState;
}

export const searchAsync = createAsyncThunk(
  'pokemon/search',
  async (query, thunkAPI) => {
    const globalState = thunkAPI.getState();
    const matchingPokemon = globalState.pokemon.pokemonList.filter(
      ({ name }) => {
        return name.includes(query);
      }
    );
    const notCached = matchingPokemon.filter(({ name }) => {
      return !globalState.pokemon.cache[name];
    });

    const responses = await download(notCached);
    const byName = responses.reduce((data, response, i) => {
      const name = notCached[i].name;
      return { ...data, [name]: response.data };
    }, {});
    return { byName, matchingPokemon };
  }
);

function download(pokemonList) {
  const requests = pokemonList.map(({ url }) => {
    const downloadRequest = axios({
      method: 'get',
      url: url
    });
    return downloadRequest;
  });

  return Promise.all(requests);
}

function saveToLocalStorage(cache, favorites) {
  if (cache) {
    localStorage.setItem('pokemon.cache', JSON.stringify(cache));
  }

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
      saveToLocalStorage(undefined, state.favorites);
    },
    unfavorite: (state, action) => {
      const name = action.payload.name;
      const index = state.favorites.indexOf(name);

      if (index >= 0) {
        state.favorites.splice(index, 1);
      }

      saveToLocalStorage(undefined, state.favorites);
    }
  },
  extraReducers: builder => {
    builder
      .addCase(searchAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(searchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.cache = { ...state.cache, ...action.payload.byName };
        saveToLocalStorage(state.cache);
        state.searchResults = action.payload.matchingPokemon.map(({ name }) => {
          return state.cache[name];
        });
      });
  }
});

export default pokemonSlice.reducer;
