import React from 'react'
import './App.css';
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>The start of the app</h1>
      </div>
      </Provider>
  );
}

export default App;
