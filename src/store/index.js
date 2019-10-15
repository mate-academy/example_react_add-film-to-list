import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const API_URL = 'https://www.omdbapi.com/?apikey=2f4a38c9&';

const ACTION_TYPES = {
  ADD_NEW_FILM: 'FILM::ADD',
};

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

const initialState = {
  films: [],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTION_TYPES.ADD_NEW_FILM: {
      return {
        ...state,
        films: [
          ...state.films,
          action.payload,
        ],
      };
    }

    default:
      return state;
  }
}

export const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

// console.log('STATE', store.getState());
//
// const unsubscribe1 = store.subscribe((state) => {
//   console.log(state.films.map(({ title }) => title));
// });
//
// store.dispatch(addNewFilm({ title: 'Avengers' }));
//
// store.subscribe((state) => {
//   console.log(state.films);
// });
// unsubscribe1();
//
// store.dispatch(addNewFilm({ title: 'Spider-Man' }));
//
// console.log('STATE', store.getState());
