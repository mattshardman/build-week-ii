import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// redux imports
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';
import Login from './components/Login/Login';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Login} />
        </Router>
      </Provider>
    );
  }
}

export default App;
