import { FilmDetails } from './FilmDetails';
import { connect } from '../../redux';
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
