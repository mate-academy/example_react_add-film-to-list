import { connect } from '../../connect';
import { FilmsList } from './FilmsList';

// function mapState2Props(reduxState) {
//   return {
//     films: reduxState.films,
//   };
// }
//
// // connectHOC(Component) => EnhancedComponent
// const connectHOC = connect(
//   mapState2Props,
// );

const EnhancedFilmsList = connect(
  state => ({ films: state.films }),
)(FilmsList);

export {
  EnhancedFilmsList as FilmsList,
};
