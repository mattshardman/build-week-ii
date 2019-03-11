import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        
      </Provider>
    );
  }
}

export default App;
