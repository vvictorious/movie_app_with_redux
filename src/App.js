import React from 'react'
import './App.css';
import { Provider } from 'react-redux'
import store from './store'

import SearchForm from './components/layout/search/SearchForm'
import MovieList from './components/layout/movies/MovieList'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>The start of the app</h1>
        <SearchForm />
        <MovieList />
      </div>
      </Provider>
  );
}

export default App;
