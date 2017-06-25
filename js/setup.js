import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { Provider } from 'react-redux';
// import App from './App';
import AppNavigator from './AppNavigator';
import store from './configureStore';
import { connect } from 'react-redux';


class App extends React.Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.navigation,
      })} />
    );
  }
}
// handle app's navigation state in redux, to pass navigation prop to a navigator.
// navigation prop must provide the current state,
// as well as access to a dispatcher to handle navigation options.
const mapStateToProps = (state) => ({
  navigation: state.navigation
});
// map current navigation state to props

const AppWithNavigationState = connect(mapStateToProps)(App);
// build AppWithNavigationState by using connect method

function setup():React.Component {
  class Root extends Component {
    // constructor() {
    //   super();
    //   this.state = {
    //     isLoading: false,
    //     store: configureStore(() => this.setState({ isLoading: false })),
    //   };
    // }

    render() {
      return (
        <Provider store={store}>
          <AppWithNavigationState />
        </Provider>
      );
    }
  }

  return Root;
}

export default setup;
