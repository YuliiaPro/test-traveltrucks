import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, getCamperById, setLoadedCount } from './operation';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    selectedCamper: null,
    loading: false,
    error: false,
    loadedCount: 10,
    showBtn: true,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload.items.slice(0, state.loadedCount);
        state.loading = false;
        state.showBtn = action.payload.length > state.loadedCount;
        state.showBtn = action.payload.items.length > state.loadedCount;
      })
      .addCase(fetchCampers.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getCamperById.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.selectedCamper = action.payload;
        state.loading = false;
      })
      .addCase(getCamperById.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(setLoadedCount, (state, action) => {
        state.loadedCount = action.payload;
        state.items =
          action.payload < state.items.length
            ? state.items.slice(0, action.payload)
            : state.items;
      });
  },
});

export default campersSlice.reducer;
