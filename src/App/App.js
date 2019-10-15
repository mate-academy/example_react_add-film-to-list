import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
} from 'react-router-dom';
import './App.scss';
import { FilmsList, FilmDetails } from '../components';
import { NewFilm } from '../components/NewFilm';
import { FormField } from '../components/FormField';

export function App(props) {
  const { searchFilm, addNewFilm } = props;
  const [searchWord, setSearchWord] = useState('');

  const handleSearchChange = ({ target }) => {
    setSearchWord(target.value);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();

    searchFilm(searchWord);
    setSearchWord('');
  };

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
      <div className="sidebar">
        <NewFilm onAdd={addNewFilm} />
      </div>
    </div>
  );
}

App.propTypes = {
  addNewFilm: PropTypes.func.isRequired,
  searchFilm: PropTypes.func.isRequired,
};
