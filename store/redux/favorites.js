import {createSlice} from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state = initialState, actions) => {
      state.ids.push(actions.payload.id);
    },
    removeFavorite: (state = initialState, actions) => {
      state.ids.splice(state.ids.indexOf(actions.payload.id), 1);
    },
  },
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
