import { createSelector } from 'reselect';

const filmsRootSelector = state => state.filmsReducer;

export const selectFilmsList = createSelector(
  filmsRootSelector,
  state => state.films,
);

export const selectFilmById = createSelector(
  selectFilmsList,
  (_, id) => id,
  (state, id) => state.find(film => id === film.id),
);
