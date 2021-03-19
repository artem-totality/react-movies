import React from 'react';
import config from '../config/apiConfig';
import { Movies } from '../components/MoviesContainer';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    const testRequestStr = 'matrix';

    fetch(`${config.url}/?apikey=${API_KEY}&s=${testRequestStr}`)
      .then((responce) => responce.json())
      .then((data) =>
        this.setState({ movies: data.Search || [], loading: false })
      );
  }

  handleSearch = (searchText) => {
    this.setState({ loading: true });

    fetch(`${config.url}/?apikey=${API_KEY}${searchText}`)
      .then((responce) => responce.json())
      .then((data) =>
        this.setState({ movies: data.Search || [], loading: false })
      );
  };

  render() {
    const { movies, loading } = this.state;

    // console.log(movies);
    return (
      <main className="container content">
        <Search handleSearch={this.handleSearch} />

        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

export default Main;
