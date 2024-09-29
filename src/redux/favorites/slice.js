import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    selectedFavorites: JSON.parse(localStorage.getItem('favorites')) || [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      if (state.selectedFavorites.includes(camperId)) {
        state.selectedFavorites = state.selectedFavorites.filter(
          id => id !== camperId,
        );
      } else {
        state.selectedFavorites.push(camperId);
      }
      localStorage.setItem(
        'favorites',
        JSON.stringify(state.selectedFavorites),
      );
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
