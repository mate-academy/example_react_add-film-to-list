import { ACTION_TYPES } from '../actionTypes';

const filmsInitialState = {
  films: [],
};

export function filmsReducer(state = filmsInitialState, action = {}) {
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
