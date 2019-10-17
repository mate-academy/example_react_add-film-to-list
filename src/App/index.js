import { App } from './App';
import { connect } from '../redux';
import { addNewFilm, searchFilm } from '../store';

const EnhancedApp = connect(
  null,
  {
    addNewFilm,
    searchFilm,
  },
)(App);

export {
  EnhancedApp as App,
};
