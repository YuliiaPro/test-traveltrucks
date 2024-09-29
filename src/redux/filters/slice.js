import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: { location: '', form: '', amenities: [], transmission: '' },
  reducers: {
    changeFilter(state, action) {
      state.location = action.payload;
    },
    changeTypeFilter(state, action) {
      state.form = action.payload;
    },
    toggleAmenityFilter(state, action) {
      const amenity = action.payload;
      if (state.amenities.includes(amenity)) {
        state.amenities = state.amenities.filter(a => a !== amenity);
      } else {
        state.amenities.push(amenity);
      }
    },
    changeTransmissionFilter(state, action) {
      state.transmission = action.payload;
    },
  },
});

export const {
  changeFilter,
  changeTypeFilter,
  toggleAmenityFilter,
  changeTransmissionFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
