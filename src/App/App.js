import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
} from 'react-router-dom';
import './App.scss';
import { FilmsList, FilmDetails } from '../components';
import { NewFilm } from '../components/NewFilm';
import { FormField } from '../components/FormField';
import { ThemeContext } from '../ThemeContext';

export function App(props) {
  const { searchFilm, addNewFilm } = props;
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

  const newFilmEl = useMemo(() => (
    <NewFilm onAdd={addNewFilm} />
  ), [addNewFilm]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
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
        <div className="sidebar">
          {newFilmEl}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

App.propTypes = {
  addNewFilm: PropTypes.func.isRequired,
  searchFilm: PropTypes.func.isRequired,
};
