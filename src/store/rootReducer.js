import { combineReducers } from '../redux/utils';
import { filmsInitialState, filmsReducer } from './reducers';

export const initialState = {
  filmsReducer: filmsInitialState,
};

export const rootReducer = combineReducers({
  filmsReducer,
});
