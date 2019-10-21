import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
} from 'react-router-dom';
import './App.scss';
import { FilmsList, FilmDetails } from '../components';
import { FormField } from '../components/FormField';

export function App(props) {
  const { searchFilm } = props;
  const [searchWord, setSearchWord] = useState('');

  const handleSearchChange = useCallback(
    ({ target }) => {
      setSearchWord(target.value);
    },
    [setSearchWord]
  );

  const handleSearchSubmit = useCallback(
    (event) => {
      event.preventDefault();

      searchFilm(searchWord);
      setSearchWord('');
    },
    [setSearchWord, searchWord]
  );

  return (
    <div className="page">
      <div className="content">
        <form
          onSubmit={handleSearchSubmit}
          className="box"
        >
          <FormField
            value={searchWord}
            name="searchWord"
            placeholder="Type search word"
            label="Search film"
            onChange={handleSearchChange}
          />
          <button
            type="submit"
            className="button is-primary"
          >
            Search film
          </button>
        </form>

        <Switch>
          <Route
            exact
            path="/"
            component={FilmsList}
          />
          <Route
            exact
            path="/film/:id"
            component={FilmDetails}
          />
        </Switch>
      </div>
    </div>
  );
}

App.propTypes = {
  searchFilm: PropTypes.func.isRequired,
};
