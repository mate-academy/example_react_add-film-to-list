import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
} from 'react-router-dom';
import './App.scss';
import { FilmsList, FilmDetails } from '../components';
import { NewFilm } from '../components/NewFilm';
import { FormField } from '../components/FormField';

export class App extends Component {
  state = {
    searchWord: '',
  };

  handleSearchChange = ({ target }) => {
    this.setState({ searchWord: target.value });
  };

  render() {
    const { searchFilm, addNewFilm } = this.props;
    const { searchWord } = this.state;

    return (
      <div className="page">
        <div className="content">
          <div className="box">
            <FormField
              value={searchWord}
              name="searchWord"
              placeholder="Type search word"
              label="Search film"
              onChange={this.handleSearchChange}
            />
            <button
              onClick={() => searchFilm(searchWord)}
              type="button"
              className="button is-primary"
            >
              Search film
            </button>
          </div>

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
}

App.propTypes = {
  addNewFilm: PropTypes.func.isRequired,
};
