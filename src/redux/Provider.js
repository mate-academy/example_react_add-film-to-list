import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { StoreContext } from './StoreContext';
import { thunk } from './thunk';
import { enhanceDispatch } from './utils';

export const Provider = (props) => {
  const { children, initialState, reducer } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const enhancedDispatch = enhanceDispatch(dispatch, thunk);

  return (
    <StoreContext.Provider value={{ dispatch: enhancedDispatch, state }}>
      {children}
    </StoreContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  initialState: PropTypes.shape({}),
  reducer: PropTypes.func.isRequired,
};

Provider.defaultProps = {
  children: null,
  initialState: {},
};
