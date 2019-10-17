import { ACTION_TYPES } from '../actionTypes';

const API_URL = 'https://www.omdbapi.com/?apikey=2f4a38c9&';

export const addNewFilm = film => ({
  type: ACTION_TYPES.ADD_NEW_FILM,
  payload: film,
});

export const searchFilm = searchWord => (dispatch) => {
  fetch(`${API_URL}t=${searchWord}`)
    .then(response => response.json())
    .then((data) => {
      const {
        Title,
        Plot,
        Poster,
        Website,
        imdbID,
      } = data;

      const newFilm = {
        id: imdbID,
        title: Title,
        description: Plot,
        imgUrl: Poster,
        imdbUrl: Website,
      };

      dispatch(addNewFilm(newFilm));
    });
};

export const getFilm = id => (dispatch) => {
  fetch(`${API_URL}i=${id}`)
    .then(response => response.json())
    .then((data) => {
      const {
        Title,
        Plot,
        Poster,
        Website,
        imdbID,
      } = data;

      const newFilm = {
        id: imdbID,
        title: Title,
        description: Plot,
        imgUrl: Poster,
        imdbUrl: Website,
      };

      dispatch(addNewFilm(newFilm));
    });
};
