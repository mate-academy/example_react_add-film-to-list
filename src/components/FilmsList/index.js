import { connect } from 'react-redux';
import { FilmsList } from './FilmsList';

const EnhancedFilmsList = connect(
  state => ({ films: state.films }),
)(FilmsList);

export {
  EnhancedFilmsList as FilmsList,
};
