import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'

import SearchForm from './components/layout/search/SearchForm'
import MovieList from './components/layout/movies/MovieList'

const App = () => {
  return (
    <Provider store={store}>
      <h1 className='center'>Movie Searcher 5000</h1>
      <SearchForm />
      <MovieList />
    </Provider>
  );
}

export default App;
