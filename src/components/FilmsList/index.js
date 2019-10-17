import { FilmsList } from './FilmsList';
import { connect } from '../../redux';
import { selectFilmsList } from '../../store';

const EnhancedFilmsList = connect(
  state => ({ films: selectFilmsList(state) }),
)(FilmsList);

export {
  EnhancedFilmsList as FilmsList,
};
