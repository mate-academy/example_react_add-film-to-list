import { combineReducers } from 'redux';
import { filmsReducer } from './reducers';

export const rootReducer = combineReducers({
  filmsReducer,
});
