import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'

import SearchForm from './components/layout/search/SearchForm'
import MovieList from './components/layout/movies/MovieList'
import FavouritesList from './components/layout/favorites/FavouritesList'
import Alert from './components/layout/alert/Alert'

const App = () => {
  return (
    <Provider store={store}>
      <h1 className='center m-4'>Movie Searcher 5000</h1>
      <SearchForm />
      <Alert />
      <MovieList />
      <FavouritesList />
    </Provider>
  );
}

export default App;
