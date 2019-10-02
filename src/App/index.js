import { connect } from 'react-redux';
import { App } from './App';
import { addNewFilm } from '../store';

const EnhancedApp = connect(
  null,
  (dispatch) => {
    const connectedAddNewFilm = newFilm => dispatch(addNewFilm(newFilm));

    return {
      addNewFilm: connectedAddNewFilm,
    };
  },
)(App);

export {
  EnhancedApp as App,
};
