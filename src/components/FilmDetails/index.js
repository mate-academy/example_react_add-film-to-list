import { connect } from 'react-redux';
import { FilmDetails } from './FilmDetails';

const EnhancedFilmDetails = connect(
  (state, ownProps) => {
    const film = state.films
      .find(({ id }) => id === ownProps.match.params.id);

    return { film };
  },
)(FilmDetails);

export {
  EnhancedFilmDetails as FilmDetails,
};
