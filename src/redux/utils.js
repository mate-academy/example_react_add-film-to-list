export const combineReducers = (reducers) => {
  const reducersEntries = Object.entries(reducers);

  return (state, action) => Object.fromEntries(
    reducersEntries
      .map(([key, reducer]) => [key, reducer(state[key], action)]),
  );
};

export const enhanceDispatch = (dispatch, middleware) => {
  return action => middleware(dispatch)(action);
};
