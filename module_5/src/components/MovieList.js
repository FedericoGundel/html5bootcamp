import React, { Component } from 'react';
import Movie from './Movie.js'


class MovieList extends Component{
  render(){

    return (
      
      <ul>
          {this.props.movies.map((movie)=> {
              return <Movie movie = {movie} 
                            key = {movie.id}/>
          })}
      </ul>
    );
  }
  
}

export default MovieList;