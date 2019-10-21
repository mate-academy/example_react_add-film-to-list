import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from '../redux';

export const withAPIData = params => (OldComponent) => {
  const {
    makeSelector,
    loader,
    dataName = 'data',
  } = params;
  const WrapperComponent = (props) => {
    const { data, loadData } = props;

    useEffect(() => {
      if (!data) {
        loadData();
      }
    }, [data]);

    if (!data) {
      return <div>Loading...</div>;
    }

    const newProps = {
      ...props,
      [dataName]: data,
    };

    return (
      <OldComponent {...newProps} />
    );
  };

  WrapperComponent.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    data: PropTypes.any,
    loadData: PropTypes.func.isRequired,
  };

  WrapperComponent.defaultProps = {
    data: null,
  };

  // eslint-disable-next-line max-len
  WrapperComponent.displayName = `withAPIData(${OldComponent.displayName || OldComponent.name})`;

  return connect(
    (state, ownProps) => ({
      data: makeSelector(ownProps)(state),
    }),
    (dispatch, ownProps) => ({ loadData: () => dispatch(loader(ownProps)) })
  )(WrapperComponent);
};
