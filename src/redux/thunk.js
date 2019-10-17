export const thunk = dispatch => (action) => {
  if (typeof action === 'function') {
    action(dispatch);
  } else {
    dispatch(action);
  }
};
