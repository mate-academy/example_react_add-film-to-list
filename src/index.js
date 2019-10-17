import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './redux';
import { initialState, rootReducer } from './store';
import 'bulma/css/bulma.css';
import { App } from './App';

ReactDOM.render((
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider initialState={initialState} reducer={rootReducer}>
      <App />
    </Provider>
  </BrowserRouter>
), document.getElementById('root'));
