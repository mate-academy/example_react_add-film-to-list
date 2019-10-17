import React, { useContext } from 'react';
import { StoreContext } from './StoreContext';

const defaultStateMap = () => ({});
const defaultMerge = (stateProps, dispatchProps, props) => ({
  ...props,
  ...stateProps,
  ...dispatchProps,
});

export const connect = (mapState, mapDispatch, merge) => {
  const mapState2Props = mapState || defaultStateMap;
  const mapDispatch2Props = mapDispatch || {};
  const mergeProps = merge || defaultMerge;

  return (Inner) => {
    const Connected = (ownProps) => {
      const { state, dispatch } = useContext(StoreContext);
      const stateProps = mapState2Props(state, ownProps);

      let dispatchProps;

      if (typeof mapDispatch2Props === 'function') {
        dispatchProps = mapDispatch2Props(dispatch, ownProps);
      } else {
        const dispatchPropsEntries = Object.entries(mapDispatch2Props)
          .map(([key, fn]) => [
            key,
            (...args) => dispatch(fn(...args)),
          ]);

        dispatchProps = Object.fromEntries(dispatchPropsEntries);
      }

      const props = mergeProps(stateProps, dispatchProps, ownProps);

      return (
        <Inner {...props} />
      );
    };

    Connected.displayName = `connect(${Inner.displayName || Inner.name})`;

    return Connected;
  };
};
