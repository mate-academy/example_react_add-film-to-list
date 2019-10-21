import { connect } from 'react-redux';
import { selectFilmById } from '../../store/selectors';
import { getFilm } from '../../store/actions';
import { FilmsFetcher } from './FilmsFetcher';

const EnhancedFilmFetcher = connect(
  (state, ownProps) => ({
    film: selectFilmById(state, ownProps.match.params.id),
  }),
  { loadFilm: getFilm }
)(FilmsFetcher);

export {
  EnhancedFilmFetcher as FilmsFetcher,
};
