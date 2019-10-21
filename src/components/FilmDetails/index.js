import { FilmDetails } from './FilmDetails';
import { withAPIData } from '../../HOCs';
import { selectFilmById } from '../../store/selectors';
import { getFilm } from '../../store/actions';

const EnhancedFilmDetails = withAPIData({
  makeSelector: props => state => selectFilmById(state, props.match.params.id),
  loader: props => getFilm(props.match.params.id),
  dataName: 'film',
})(FilmDetails);

export {
  EnhancedFilmDetails as FilmDetails,
};
