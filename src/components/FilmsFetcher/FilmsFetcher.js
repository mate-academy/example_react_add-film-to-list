import React, { useEffect } from 'react';

export const FilmsFetcher = (props) => {
  const {
    film,
    loadFilm,
    match,
    renderFilm,
  } = props;

  useEffect(() => {
    if (!film) {
      loadFilm(match.params.id);
    }
  }, [film, match.params.id]);

  if (!film) {
    return <div>Loading...</div>;
  }

  return renderFilm({ film });
};
