import { connect } from 'react-redux';
import { FilmDetails } from './FilmDetails';
import { getFilm, selectFilmById } from '../../store';

const EnhancedFilmDetails = connect(
  (state, ownProps) => ({
    film: selectFilmById(state, ownProps.match.params.id),
  }),
  { getFilm }
)(FilmDetails);

export {
  EnhancedFilmDetails as FilmDetails,
};
