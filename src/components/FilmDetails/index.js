import { connect } from 'react-redux';
import { FilmDetails } from './FilmDetails';
import { getFilm } from '../../store';

const EnhancedFilmDetails = connect(
  (state, ownProps) => {
    const film = state.films
      .find(({ id }) => id === ownProps.match.params.id);

    return { film };
  },
  { getFilm }
)(FilmDetails);

export {
  EnhancedFilmDetails as FilmDetails,
};
