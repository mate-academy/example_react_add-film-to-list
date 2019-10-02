import React, { Component } from 'react';
import { store } from './store';

export function connect(mapState2Props, mapDispatch2Props) {
  return (InnerComponent) => {
    class WrapperComponent extends Component {
      state = {
        state2Props: mapState2Props(store.getState(), this.props),
      };

      componentDidMount() {
        store.subscribe(() => {
          this.setState({
            state2Props: mapState2Props(store.getState(), this.props),
          });
        });
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      unsubscribe = () => {};

      render() {
        const { state2Props } = this.state;

        return (
          <InnerComponent
            {...this.props}
            {...state2Props}
          />
        );
      }
    }

    WrapperComponent.displayName = `connect(${InnerComponent.displayName || InnerComponent.name})`;

    return WrapperComponent;
  };
}
