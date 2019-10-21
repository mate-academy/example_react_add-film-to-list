import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from '../redux';
import { selectFilmById } from '../store/selectors';
import { getFilm } from '../store/actions';

export const withFilm = (OldComponent) => {
  const WrapperComponent = (props) => {
    const { film, loadFilm, match } = props;

    useEffect(() => {
      if (!film) {
        loadFilm(match.params.id);
      }
    }, [film, match.params.id]);

    if (!film) {
      return <div>Loading...</div>;
    }

    return (
      <OldComponent {...props} />
    );
  };

  // eslint-disable-next-line max-len
  WrapperComponent.displayName = `withFilm(${OldComponent.displayName || OldComponent.name})`;

  WrapperComponent.propTypes = {
    loadFilm: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
    film: PropTypes.shape({}),
  };

  WrapperComponent.defaultProps = {
    film: null,
  };

  return connect(
    (state, ownProps) => ({
      film: selectFilmById(state, ownProps.match.params.id),
    }),
    { loadFilm: getFilm }
  )(WrapperComponent);
};
