import React from 'react';
import axios from 'axios';
import Movie from '../component/Movie';
import './Home.css';

class Home extends React.Component{

  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async() => {
    const {data : {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false})
  }

  componentDidMount(){
    this.getMovies();
  };

  render(){
    const {isLoading, movies} = this.state;
    // return <div>{isLoading ? "Loading..." : movies.map(movie => (<Movie movies = {movie} />))}</div>;
    return (
    <section className='container'>
      {isLoading ? 
        <div className='loader'>
          <span className='loader__text'>
            Loading...
          </span>
        </div> : 
        <div className='movies'>
        {movies.map(movie => (
          <Movie key = {movie.id} 
                id = {movie.id} 
                title = {movie.title}
                year = {movie.year}
                summary = {movie.summary}
                poster = {movie.medium_cover_image}
                genres = {movie.genres}/>))}
        </div>}
      </section>
    );
  };
}

export default Home;