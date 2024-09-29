import { createSelector } from '@reduxjs/toolkit';
import { selectLocationFilter, selectTypeFilter } from '../filters/selectors';
export const selectCampers = state => state.campers.items;
export const selectCampersById = state => state.campers.selectedCamper;
export const selectLoading = state => state.campers.loading;
export const selectError = state => state.campers.error;
export const selectLoadedCount = state => state.campers.loadedCount;
export const selectShowBtn = state => state.campers.showBtn;
export const selectFilteredCampers = createSelector(
  [
    selectCampers,
    selectLocationFilter,
    selectTypeFilter,
    state => state.filters.amenities || [],
  ],
  (campers, locationFilter, formFilter, amenities) => {
    return campers.filter(camper => {
      const matchesLocation = camper.location
        .toLowerCase()
        .includes(locationFilter.toLowerCase());
      const matchesForm = formFilter
        ? camper.form.toLowerCase() === formFilter.toLowerCase()
        : true;
      const matchesAmenities =
        amenities.length === 0 ||
        amenities.every(amenity => camper[amenity] === true);

      return matchesLocation && matchesForm && matchesAmenities;
    });
  },
);
