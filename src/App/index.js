import { connect } from 'react-redux';
import { App } from './App';
import { addNewFilm, searchFilm } from '../store/index';

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
