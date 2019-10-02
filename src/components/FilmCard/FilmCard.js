/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import './FilmCard.scss';
import { Link } from 'react-router-dom';

export const FilmCard = (props) => {
  const {
    title,
    description,
    imgUrl,
    imdbUrl,
    id,
  } = props;

  return (
    <Link to={`/film/${id}`} className="card">
      <span className="card-image">
        <figure className="image is-4by3">
          <img
            src={imgUrl}
            alt="Film logo"
          />
        </figure>
      </span>
      <span className="card-content">
        <span className="media">
          <span className="media-left">
            <figure className="image is-48x48">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/315W5zxAnTL._SY355_.png"
                alt="imdb"
              />
            </figure>
          </span>
          <span className="media-content">
            <p className="title is-4">{title}</p>
          </span>
        </span>

        <span className="content">
          {description}
          <br />
          <a href={imdbUrl}>IMDB</a>
        </span>
      </span>
    </Link>
  );
};

FilmCard.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
};

FilmCard.defaultProps = {
  description: '',
};
