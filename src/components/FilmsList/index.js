import { connect } from 'react-redux';
import { FilmsList } from './FilmsList';
import { selectFilmsList } from '../../store';

const EnhancedFilmsList = connect(
  state => ({ films: selectFilmsList(state) }),
)(FilmsList);

export {
  EnhancedFilmsList as FilmsList,
};
